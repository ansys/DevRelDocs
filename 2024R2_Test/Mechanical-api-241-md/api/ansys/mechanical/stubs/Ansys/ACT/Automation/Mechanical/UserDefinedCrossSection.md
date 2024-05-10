<a id="userdefinedcrosssection"></a>

# UserDefinedCrossSection

<a id="UserDefinedCrossSection"></a>

### *class* UserDefinedCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a UserDefinedCrossSection.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Delete`](#UserDefinedCrossSection.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#UserDefinedCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#UserDefinedCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#UserDefinedCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#UserDefinedCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#UserDefinedCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#UserDefinedCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#UserDefinedCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#UserDefinedCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#UserDefinedCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#UserDefinedCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#UserDefinedCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#UserDefinedCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#UserDefinedCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CGy`](#UserDefinedCrossSection.CGy)                                                                               | Gets or sets the CGy.                                         |
| [`CGZ`](#UserDefinedCrossSection.CGZ)                                                                               | Gets or sets the CGZ.                                         |
| [`Area`](#UserDefinedCrossSection.Area)                                                                             | Gets or sets the Area.                                        |
| [`Iyy`](#UserDefinedCrossSection.Iyy)                                                                               | Gets or sets the Iyy.                                         |
| [`Izz`](#UserDefinedCrossSection.Izz)                                                                               | Gets or sets the Izz.                                         |
| [`SHy`](#UserDefinedCrossSection.SHy)                                                                               | Gets or sets the SHy.                                         |
| [`SHz`](#UserDefinedCrossSection.SHz)                                                                               | Gets or sets the SHz.                                         |
| [`J`](#UserDefinedCrossSection.J)                                                                                   | Gets or sets the J.                                           |
| [`Iw`](#UserDefinedCrossSection.Iw)                                                                                 | Gets or sets the Iw.                                          |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#UserDefinedCrossSection.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#UserDefinedCrossSection.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#UserDefinedCrossSection.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#UserDefinedCrossSection.Images)                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#UserDefinedCrossSection.ReadOnly)                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#UserDefinedCrossSection.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#UserDefinedCrossSection.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import UserDefinedCrossSection
```

<a id="property-detail"></a>

## Property detail

<a id="UserDefinedCrossSection.InternalObject"></a>

### *property* UserDefinedCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGy"></a>

### *property* UserDefinedCrossSection.CGy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGZ"></a>

### *property* UserDefinedCrossSection.CGZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGZ.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Area"></a>

### *property* UserDefinedCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Area.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iyy"></a>

### *property* UserDefinedCrossSection.Iyy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iyy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Izz"></a>

### *property* UserDefinedCrossSection.Izz *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Izz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHy"></a>

### *property* UserDefinedCrossSection.SHy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHz"></a>

### *property* UserDefinedCrossSection.SHz *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.J"></a>

### *property* UserDefinedCrossSection.J *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the J.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iw"></a>

### *property* UserDefinedCrossSection.Iw *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iw.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.DataModelObjectCategory"></a>

### *property* UserDefinedCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Children"></a>

### *property* UserDefinedCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Comments"></a>

### *property* UserDefinedCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Figures"></a>

### *property* UserDefinedCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Images"></a>

### *property* UserDefinedCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ReadOnly"></a>

### *property* UserDefinedCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* UserDefinedCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Properties"></a>

### *property* UserDefinedCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.VisibleProperties"></a>

### *property* UserDefinedCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UserDefinedCrossSection.Delete"></a>

### UserDefinedCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetChildren"></a>

### UserDefinedCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### UserDefinedCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddComment"></a>

### UserDefinedCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddFigure"></a>

### UserDefinedCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddImage"></a>

### UserDefinedCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Activate"></a>

### UserDefinedCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CopyTo"></a>

### UserDefinedCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Duplicate"></a>

### UserDefinedCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupAllSimilarChildren"></a>

### UserDefinedCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupSimilarObjects"></a>

### UserDefinedCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByName"></a>

### UserDefinedCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByAPIName"></a>

### UserDefinedCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CreateParameter"></a>

### UserDefinedCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetParameter"></a>

### UserDefinedCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.RemoveParameter"></a>

### UserDefinedCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
