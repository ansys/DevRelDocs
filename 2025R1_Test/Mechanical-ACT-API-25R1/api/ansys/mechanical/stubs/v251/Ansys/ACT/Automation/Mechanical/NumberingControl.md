# `NumberingControl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NumberingControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NumberingControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NumberingControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NumberingControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#NumberingControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NumberingControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NumberingControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#NumberingControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NumberingControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#NumberingControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NumberingControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#NumberingControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NumberingControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NumberingControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NumberingControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#NumberingControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NumberingControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NumberingControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BeginElementNumber`](#NumberingControl.BeginElementNumber)           | Gets or sets the BeginElementNumber.                          |
| [`BeginNodeNumber`](#NumberingControl.BeginNodeNumber)                 | Gets or sets the BeginNodeNumber.                             |
| [`Children`](#NumberingControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NumberingControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NumberingControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`EndElementNumber`](#NumberingControl.EndElementNumber)               | Gets or sets the EndElementNumber.                            |
| [`EndNodeNumber`](#NumberingControl.EndNodeNumber)                     | Gets or sets the EndNodeNumber.                               |
| [`Figures`](#NumberingControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NumberingControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NumberingControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NumberingControl.Location)                               | Gets or sets the Location.                                    |
| [`NodeNumber`](#NumberingControl.NodeNumber)                           | Gets or sets the NodeNumber.                                  |
| [`Properties`](#NumberingControl.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#NumberingControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NumberingControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NumberingControl.BeginElementNumber"></a>

### *property* NumberingControl.BeginElementNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.BeginNodeNumber"></a>

### *property* NumberingControl.BeginNodeNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Children"></a>

### *property* NumberingControl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Comments"></a>

### *property* NumberingControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.DataModelObjectCategory"></a>

### *property* NumberingControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndElementNumber"></a>

### *property* NumberingControl.EndElementNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndNodeNumber"></a>

### *property* NumberingControl.EndNodeNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Figures"></a>

### *property* NumberingControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Images"></a>

### *property* NumberingControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.InternalObject"></a>

### *property* NumberingControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Location"></a>

### *property* NumberingControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.NodeNumber"></a>

### *property* NumberingControl.NodeNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Properties"></a>

### *property* NumberingControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Suppressed"></a>

### *property* NumberingControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.VisibleProperties"></a>

### *property* NumberingControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NumberingControl.Activate"></a>

### NumberingControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddComment"></a>

### NumberingControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddFigure"></a>

### NumberingControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddImage"></a>

### NumberingControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CopyTo"></a>

### NumberingControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CreateParameter"></a>

### NumberingControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Delete"></a>

### NumberingControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Duplicate"></a>

### NumberingControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetChildren"></a>

### NumberingControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetParameter"></a>

### NumberingControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupAllSimilarChildren"></a>

### NumberingControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupSimilarObjects"></a>

### NumberingControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByAPIName"></a>

### NumberingControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByName"></a>

### NumberingControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.RemoveParameter"></a>

### NumberingControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

