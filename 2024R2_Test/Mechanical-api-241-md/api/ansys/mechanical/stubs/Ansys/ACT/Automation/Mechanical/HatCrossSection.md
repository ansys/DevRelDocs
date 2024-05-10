<a id="hatcrosssection"></a>

# HatCrossSection

<a id="HatCrossSection"></a>

### *class* HatCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a HatCrossSection.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Delete`](#HatCrossSection.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#HatCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#HatCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#HatCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#HatCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#HatCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#HatCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#HatCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HatCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#HatCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#HatCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#HatCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#HatCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#HatCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#HatCrossSection.Area)                                                                                     | Gets the Area.                                                |
| [`IYY`](#HatCrossSection.IYY)                                                                                       | Gets the IYY.                                                 |
| [`IZZ`](#HatCrossSection.IZZ)                                                                                       | Gets the IZZ.                                                 |
| [`Thick1`](#HatCrossSection.Thick1)                                                                                 | Gets or sets the Thick1.                                      |
| [`Thick2`](#HatCrossSection.Thick2)                                                                                 | Gets or sets the Thick2.                                      |
| [`Thick3`](#HatCrossSection.Thick3)                                                                                 | Gets or sets the Thick3.                                      |
| [`Thick4`](#HatCrossSection.Thick4)                                                                                 | Gets or sets the Thick4.                                      |
| [`Thick5`](#HatCrossSection.Thick5)                                                                                 | Gets or sets the Thick5.                                      |
| [`Width1`](#HatCrossSection.Width1)                                                                                 | Gets or sets the Width1.                                      |
| [`Width2`](#HatCrossSection.Width2)                                                                                 | Gets or sets the Width2.                                      |
| [`Width3`](#HatCrossSection.Width3)                                                                                 | Gets or sets the Width3.                                      |
| [`Width4`](#HatCrossSection.Width4)                                                                                 | Gets or sets the Width4.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#HatCrossSection.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#HatCrossSection.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#HatCrossSection.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#HatCrossSection.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#HatCrossSection.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#HatCrossSection.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#HatCrossSection.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import HatCrossSection
```

<a id="property-detail"></a>

## Property detail

<a id="HatCrossSection.InternalObject"></a>

### *property* HatCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Area"></a>

### *property* HatCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IYY"></a>

### *property* HatCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IZZ"></a>

### *property* HatCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick1"></a>

### *property* HatCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick2"></a>

### *property* HatCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick3"></a>

### *property* HatCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick4"></a>

### *property* HatCrossSection.Thick4 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick4.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick5"></a>

### *property* HatCrossSection.Thick5 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick5.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width1"></a>

### *property* HatCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width2"></a>

### *property* HatCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width3"></a>

### *property* HatCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width4"></a>

### *property* HatCrossSection.Width4 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width4.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.DataModelObjectCategory"></a>

### *property* HatCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Children"></a>

### *property* HatCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Comments"></a>

### *property* HatCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Figures"></a>

### *property* HatCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Images"></a>

### *property* HatCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ReadOnly"></a>

### *property* HatCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* HatCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Properties"></a>

### *property* HatCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.VisibleProperties"></a>

### *property* HatCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HatCrossSection.Delete"></a>

### HatCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetChildren"></a>

### HatCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### HatCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddComment"></a>

### HatCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddFigure"></a>

### HatCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddImage"></a>

### HatCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Activate"></a>

### HatCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CopyTo"></a>

### HatCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Duplicate"></a>

### HatCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupAllSimilarChildren"></a>

### HatCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupSimilarObjects"></a>

### HatCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByName"></a>

### HatCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByAPIName"></a>

### HatCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CreateParameter"></a>

### HatCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetParameter"></a>

### HatCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.RemoveParameter"></a>

### HatCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
