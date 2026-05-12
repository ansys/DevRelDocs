# `ImportedConstraintEquations`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedConstraintEquations"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedConstraintEquations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedConstraintEquations.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedConstraintEquations.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedConstraintEquations.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedConstraintEquations.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedConstraintEquations.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedConstraintEquations.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedConstraintEquations.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedConstraintEquations.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedConstraintEquations.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedConstraintEquations.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedConstraintEquations.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedConstraintEquations.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedConstraintEquations.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedConstraintEquations.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedConstraintEquations.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedConstraintEquations.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedConstraintEquations.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedConstraintEquations.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedConstraintEquations.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedConstraintEquations.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedConstraintEquations.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedConstraintEquations.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedConstraintEquations.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedConstraintEquations.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedConstraintEquations.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedConstraintEquations.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedConstraintEquations.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedConstraintEquations.Children"></a>

### *property* ImportedConstraintEquations.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Comments"></a>

### *property* ImportedConstraintEquations.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Count"></a>

### *property* ImportedConstraintEquations.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.DataModelObjectCategory"></a>

### *property* ImportedConstraintEquations.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Figures"></a>

### *property* ImportedConstraintEquations.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Images"></a>

### *property* ImportedConstraintEquations.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.InternalObject"></a>

### *property* ImportedConstraintEquations.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Properties"></a>

### *property* ImportedConstraintEquations.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.ReadOnly"></a>

### *property* ImportedConstraintEquations.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Suppressed"></a>

### *property* ImportedConstraintEquations.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.VisibleProperties"></a>

### *property* ImportedConstraintEquations.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedConstraintEquations.Activate"></a>

### ImportedConstraintEquations.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddComment"></a>

### ImportedConstraintEquations.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddFigure"></a>

### ImportedConstraintEquations.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddImage"></a>

### ImportedConstraintEquations.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.CopyTo"></a>

### ImportedConstraintEquations.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.CreateParameter"></a>

### ImportedConstraintEquations.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Delete"></a>

### ImportedConstraintEquations.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Duplicate"></a>

### ImportedConstraintEquations.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GetChildren"></a>

### ImportedConstraintEquations.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GetParameter"></a>

### ImportedConstraintEquations.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GroupAllSimilarChildren"></a>

### ImportedConstraintEquations.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GroupSimilarObjects"></a>

### ImportedConstraintEquations.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.PropertyByAPIName"></a>

### ImportedConstraintEquations.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.PropertyByName"></a>

### ImportedConstraintEquations.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.RemoveParameter"></a>

### ImportedConstraintEquations.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

