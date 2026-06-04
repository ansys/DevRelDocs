# `AcousticSymmetryPlane`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticSymmetryPlane.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticSymmetryPlane.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticSymmetryPlane.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticSymmetryPlane.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticSymmetryPlane.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticSymmetryPlane.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticSymmetryPlane.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticSymmetryPlane.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticSymmetryPlane.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticSymmetryPlane.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticSymmetryPlane.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticSymmetryPlane.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticSymmetryPlane.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticSymmetryPlane.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticSymmetryPlane.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticSymmetryPlane.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticSymmetryPlane.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticSymmetryPlane.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticSymmetryPlane.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#AcousticSymmetryPlane.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#AcousticSymmetryPlane.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticSymmetryPlane.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticSymmetryPlane.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticSymmetryPlane.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticSymmetryPlane.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticSymmetryPlane.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticSymmetryPlane.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticSymmetryPlane.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticSymmetryPlane.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticSymmetryPlane.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticSymmetryPlane.Children"></a>

### *property* AcousticSymmetryPlane.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Comments"></a>

### *property* AcousticSymmetryPlane.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CoordinateSystem"></a>

### *property* AcousticSymmetryPlane.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.DataModelObjectCategory"></a>

### *property* AcousticSymmetryPlane.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Figures"></a>

### *property* AcousticSymmetryPlane.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Images"></a>

### *property* AcousticSymmetryPlane.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.InternalObject"></a>

### *property* AcousticSymmetryPlane.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Location"></a>

### *property* AcousticSymmetryPlane.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Properties"></a>

### *property* AcousticSymmetryPlane.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.ReadOnly"></a>

### *property* AcousticSymmetryPlane.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.SharedRefBody"></a>

### *property* AcousticSymmetryPlane.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Suppressed"></a>

### *property* AcousticSymmetryPlane.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.VisibleProperties"></a>

### *property* AcousticSymmetryPlane.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSymmetryPlane.Activate"></a>

### AcousticSymmetryPlane.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddComment"></a>

### AcousticSymmetryPlane.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddFigure"></a>

### AcousticSymmetryPlane.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.AddImage"></a>

### AcousticSymmetryPlane.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CopyTo"></a>

### AcousticSymmetryPlane.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.CreateParameter"></a>

### AcousticSymmetryPlane.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Delete"></a>

### AcousticSymmetryPlane.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.Duplicate"></a>

### AcousticSymmetryPlane.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetChildren"></a>

### AcousticSymmetryPlane.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GetParameter"></a>

### AcousticSymmetryPlane.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupAllSimilarChildren"></a>

### AcousticSymmetryPlane.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.GroupSimilarObjects"></a>

### AcousticSymmetryPlane.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PromoteToNamedSelection"></a>

### AcousticSymmetryPlane.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByAPIName"></a>

### AcousticSymmetryPlane.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.PropertyByName"></a>

### AcousticSymmetryPlane.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSymmetryPlane.RemoveParameter"></a>

### AcousticSymmetryPlane.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

