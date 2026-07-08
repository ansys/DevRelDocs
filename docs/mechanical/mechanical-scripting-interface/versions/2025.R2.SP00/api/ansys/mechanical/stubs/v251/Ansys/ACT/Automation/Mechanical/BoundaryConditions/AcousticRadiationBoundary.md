# `AcousticRadiationBoundary`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticRadiationBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticRadiationBoundary.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticRadiationBoundary.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticRadiationBoundary.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticRadiationBoundary.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticRadiationBoundary.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticRadiationBoundary.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticRadiationBoundary.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticRadiationBoundary.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticRadiationBoundary.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticRadiationBoundary.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticRadiationBoundary.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticRadiationBoundary.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticRadiationBoundary.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticRadiationBoundary.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticRadiationBoundary.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticRadiationBoundary.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticRadiationBoundary.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticRadiationBoundary.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticRadiationBoundary.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticRadiationBoundary.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticRadiationBoundary.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticRadiationBoundary.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticRadiationBoundary.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticRadiationBoundary.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticRadiationBoundary.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticRadiationBoundary.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticRadiationBoundary.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticRadiationBoundary.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticRadiationBoundary.Children"></a>

### *property* AcousticRadiationBoundary.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Comments"></a>

### *property* AcousticRadiationBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.DataModelObjectCategory"></a>

### *property* AcousticRadiationBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Figures"></a>

### *property* AcousticRadiationBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Images"></a>

### *property* AcousticRadiationBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.InternalObject"></a>

### *property* AcousticRadiationBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Location"></a>

### *property* AcousticRadiationBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Properties"></a>

### *property* AcousticRadiationBoundary.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ReadOnly"></a>

### *property* AcousticRadiationBoundary.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.SharedRefBody"></a>

### *property* AcousticRadiationBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Suppressed"></a>

### *property* AcousticRadiationBoundary.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.VisibleProperties"></a>

### *property* AcousticRadiationBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticRadiationBoundary.Activate"></a>

### AcousticRadiationBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddComment"></a>

### AcousticRadiationBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddFigure"></a>

### AcousticRadiationBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddImage"></a>

### AcousticRadiationBoundary.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.CopyTo"></a>

### AcousticRadiationBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.CreateParameter"></a>

### AcousticRadiationBoundary.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Delete"></a>

### AcousticRadiationBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Duplicate"></a>

### AcousticRadiationBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetChildren"></a>

### AcousticRadiationBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetParameter"></a>

### AcousticRadiationBoundary.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GroupAllSimilarChildren"></a>

### AcousticRadiationBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GroupSimilarObjects"></a>

### AcousticRadiationBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PromoteToNamedSelection"></a>

### AcousticRadiationBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PropertyByAPIName"></a>

### AcousticRadiationBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PropertyByName"></a>

### AcousticRadiationBoundary.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.RemoveParameter"></a>

### AcousticRadiationBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

