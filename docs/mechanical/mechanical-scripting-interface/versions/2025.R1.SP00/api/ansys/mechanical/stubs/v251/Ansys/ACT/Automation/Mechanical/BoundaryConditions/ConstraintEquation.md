# `ConstraintEquation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstraintEquation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ConstraintEquation.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ConstraintEquation.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ConstraintEquation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConstraintEquation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`CopyTo`](#ConstraintEquation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ConstraintEquation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ConstraintEquation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ConstraintEquation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ConstraintEquation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ConstraintEquation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ConstraintEquation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstraintEquation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ConstraintEquation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ConstraintEquation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ConstraintEquation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ConstraintEquation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ConstraintEquation.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ConstraintEquation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ConstraintEquation.Figures)                                 | Gets the list of associated figures.                          |
| [`InternalObject`](#ConstraintEquation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConstraintEquation.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ConstraintEquation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ConstraintEquation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstraintEquation.Children"></a>

### *property* ConstraintEquation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Comments"></a>

### *property* ConstraintEquation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.DataModelObjectCategory"></a>

### *property* ConstraintEquation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Figures"></a>

### *property* ConstraintEquation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.InternalObject"></a>

### *property* ConstraintEquation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstraintEquationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Properties"></a>

### *property* ConstraintEquation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Suppressed"></a>

### *property* ConstraintEquation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.VisibleProperties"></a>

### *property* ConstraintEquation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstraintEquation.Activate"></a>

### ConstraintEquation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddCommandSnippet"></a>

### ConstraintEquation.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddComment"></a>

### ConstraintEquation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.AddFigure"></a>

### ConstraintEquation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.CopyTo"></a>

### ConstraintEquation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.CreateParameter"></a>

### ConstraintEquation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Delete"></a>

### ConstraintEquation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.Duplicate"></a>

### ConstraintEquation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetChildren"></a>

### ConstraintEquation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GetParameter"></a>

### ConstraintEquation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GroupAllSimilarChildren"></a>

### ConstraintEquation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.GroupSimilarObjects"></a>

### ConstraintEquation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.PropertyByAPIName"></a>

### ConstraintEquation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.PropertyByName"></a>

### ConstraintEquation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstraintEquation.RemoveParameter"></a>

### ConstraintEquation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

