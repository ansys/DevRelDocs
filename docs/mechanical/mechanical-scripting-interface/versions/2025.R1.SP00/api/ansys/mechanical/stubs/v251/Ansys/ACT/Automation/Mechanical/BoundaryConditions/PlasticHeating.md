# `PlasticHeating`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PlasticHeating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PlasticHeating.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PlasticHeating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#PlasticHeating.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PlasticHeating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PlasticHeating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PlasticHeating.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PlasticHeating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PlasticHeating.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PlasticHeating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PlasticHeating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PlasticHeating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PlasticHeating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PlasticHeating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PlasticHeating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PlasticHeating.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PlasticHeating.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PlasticHeating.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#PlasticHeating.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PlasticHeating.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PlasticHeating.Location)                               | Gets or sets the Location.                                    |
| [`PlasticWorkFraction`](#PlasticHeating.PlasticWorkFraction)         | Gets or sets the PlasticWorkFraction.                         |
| [`Properties`](#PlasticHeating.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#PlasticHeating.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PlasticHeating.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PlasticHeating.Children"></a>

### *property* PlasticHeating.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Comments"></a>

### *property* PlasticHeating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.DataModelObjectCategory"></a>

### *property* PlasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Images"></a>

### *property* PlasticHeating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.InternalObject"></a>

### *property* PlasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Location"></a>

### *property* PlasticHeating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PlasticWorkFraction"></a>

### *property* PlasticHeating.PlasticWorkFraction *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PlasticWorkFraction.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Properties"></a>

### *property* PlasticHeating.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Suppressed"></a>

### *property* PlasticHeating.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.VisibleProperties"></a>

### *property* PlasticHeating.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PlasticHeating.Activate"></a>

### PlasticHeating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddComment"></a>

### PlasticHeating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddImage"></a>

### PlasticHeating.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CopyTo"></a>

### PlasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CreateParameter"></a>

### PlasticHeating.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Delete"></a>

### PlasticHeating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Duplicate"></a>

### PlasticHeating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetChildren"></a>

### PlasticHeating.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetParameter"></a>

### PlasticHeating.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupAllSimilarChildren"></a>

### PlasticHeating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupSimilarObjects"></a>

### PlasticHeating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByAPIName"></a>

### PlasticHeating.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByName"></a>

### PlasticHeating.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.RemoveParameter"></a>

### PlasticHeating.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

