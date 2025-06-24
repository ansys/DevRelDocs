# `AcousticRigidWall`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRigidWall"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRigidWall

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticRigidWall.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticRigidWall.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticRigidWall.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticRigidWall.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticRigidWall.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticRigidWall.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticRigidWall.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticRigidWall.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticRigidWall.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticRigidWall.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticRigidWall.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticRigidWall.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticRigidWall.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticRigidWall.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticRigidWall.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticRigidWall.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticRigidWall.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticRigidWall.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticRigidWall.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticRigidWall.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticRigidWall.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticRigidWall.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticRigidWall.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticRigidWall.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticRigidWall.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticRigidWall.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticRigidWall.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticRigidWall.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticRigidWall.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticRigidWall.Children"></a>

### *property* AcousticRigidWall.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Comments"></a>

### *property* AcousticRigidWall.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.DataModelObjectCategory"></a>

### *property* AcousticRigidWall.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Figures"></a>

### *property* AcousticRigidWall.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Images"></a>

### *property* AcousticRigidWall.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.InternalObject"></a>

### *property* AcousticRigidWall.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Location"></a>

### *property* AcousticRigidWall.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Properties"></a>

### *property* AcousticRigidWall.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.ReadOnly"></a>

### *property* AcousticRigidWall.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.SharedRefBody"></a>

### *property* AcousticRigidWall.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Suppressed"></a>

### *property* AcousticRigidWall.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.VisibleProperties"></a>

### *property* AcousticRigidWall.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticRigidWall.Activate"></a>

### AcousticRigidWall.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.AddComment"></a>

### AcousticRigidWall.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.AddFigure"></a>

### AcousticRigidWall.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.AddImage"></a>

### AcousticRigidWall.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.CopyTo"></a>

### AcousticRigidWall.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.CreateParameter"></a>

### AcousticRigidWall.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Delete"></a>

### AcousticRigidWall.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.Duplicate"></a>

### AcousticRigidWall.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.GetChildren"></a>

### AcousticRigidWall.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.GetParameter"></a>

### AcousticRigidWall.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.GroupAllSimilarChildren"></a>

### AcousticRigidWall.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.GroupSimilarObjects"></a>

### AcousticRigidWall.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.PromoteToNamedSelection"></a>

### AcousticRigidWall.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.PropertyByAPIName"></a>

### AcousticRigidWall.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.PropertyByName"></a>

### AcousticRigidWall.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRigidWall.RemoveParameter"></a>

### AcousticRigidWall.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

