# `LCrossSection`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.LCrossSection"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.LCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#LCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#LCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#LCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#LCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#LCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#LCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#LCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#LCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thick1`](#LCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#LCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`VisibleProperties`](#LCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width1`](#LCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#LCrossSection.Width2)                                   | Gets or sets the Width2.                                      |

<a id="property-detail"></a>

## Property detail

<a id="LCrossSection.Area"></a>

### *property* LCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Children"></a>

### *property* LCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Comments"></a>

### *property* LCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.DataModelObjectCategory"></a>

### *property* LCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Figures"></a>

### *property* LCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IYY"></a>

### *property* LCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IZZ"></a>

### *property* LCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Images"></a>

### *property* LCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.InternalObject"></a>

### *property* LCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Properties"></a>

### *property* LCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ReadOnly"></a>

### *property* LCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Thick1"></a>

### *property* LCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Thick2"></a>

### *property* LCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.VisibleProperties"></a>

### *property* LCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Width1"></a>

### *property* LCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Width2"></a>

### *property* LCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LCrossSection.Activate"></a>

### LCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddComment"></a>

### LCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddFigure"></a>

### LCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddImage"></a>

### LCrossSection.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.CopyTo"></a>

### LCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.CreateParameter"></a>

### LCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Delete"></a>

### LCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Duplicate"></a>

### LCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetChildren"></a>

### LCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetParameter"></a>

### LCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GroupAllSimilarChildren"></a>

### LCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GroupSimilarObjects"></a>

### LCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.PropertyByAPIName"></a>

### LCrossSection.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.PropertyByName"></a>

### LCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.RemoveParameter"></a>

### LCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

