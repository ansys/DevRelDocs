# `Surface`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Surface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Surface.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Surface.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Surface.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Surface.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Surface.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Surface.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Surface.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Surface.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Surface.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Surface.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Surface.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Surface.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Surface.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Surface.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Surface.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Surface.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Surface.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Surface.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Surface.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Surface.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Surface.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Surface.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Surface.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#Surface.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Surface.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Surface.Children"></a>

### *property* Surface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Comments"></a>

### *property* Surface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CoordinateSystem"></a>

### *property* Surface.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Surface.DataModelObjectCategory"></a>

### *property* Surface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Figures"></a>

### *property* Surface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Images"></a>

### *property* Surface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Surface.InternalObject"></a>

### *property* Surface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSurfaceAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Properties"></a>

### *property* Surface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Suppressed"></a>

### *property* Surface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Surface.VisibleProperties"></a>

### *property* Surface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Surface.Activate"></a>

### Surface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddComment"></a>

### Surface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddFigure"></a>

### Surface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddImage"></a>

### Surface.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Surface.CopyTo"></a>

### Surface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CreateParameter"></a>

### Surface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Delete"></a>

### Surface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Duplicate"></a>

### Surface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetChildren"></a>

### Surface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetParameter"></a>

### Surface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GroupAllSimilarChildren"></a>

### Surface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GroupSimilarObjects"></a>

### Surface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.PropertyByAPIName"></a>

### Surface.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Surface.PropertyByName"></a>

### Surface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Surface.RemoveParameter"></a>

### Surface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

