# `Coupling`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Coupling.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Coupling.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Coupling.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Coupling.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Coupling.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Coupling.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Coupling.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Coupling.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Coupling.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Coupling.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Coupling.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Coupling.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Coupling.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Coupling.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Coupling.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Coupling.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Coupling.Comments)                               | Gets the list of associated comments.                         |
| [`DOFSelection`](#Coupling.DOFSelection)                       | Gets or sets the DOFSelection.                                |
| [`DataModelObjectCategory`](#Coupling.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#Coupling.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Coupling.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LocalCoordinates`](#Coupling.LocalCoordinates)               | Gets or sets the LocalCoordinates.                            |
| [`Location`](#Coupling.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#Coupling.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#Coupling.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Coupling.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Coupling.Children"></a>

### *property* Coupling.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Comments"></a>

### *property* Coupling.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DOFSelection"></a>

### *property* Coupling.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType](../../../../Mechanical/DataModel/Enums/CouplingConditionDOFType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DataModelObjectCategory"></a>

### *property* Coupling.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Images"></a>

### *property* Coupling.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.InternalObject"></a>

### *property* Coupling.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCouplingConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.LocalCoordinates"></a>

### *property* Coupling.LocalCoordinates *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalCoordinates.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Location"></a>

### *property* Coupling.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Properties"></a>

### *property* Coupling.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Suppressed"></a>

### *property* Coupling.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.VisibleProperties"></a>

### *property* Coupling.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Coupling.Activate"></a>

### Coupling.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddComment"></a>

### Coupling.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddImage"></a>

### Coupling.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CopyTo"></a>

### Coupling.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CreateParameter"></a>

### Coupling.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Delete"></a>

### Coupling.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Duplicate"></a>

### Coupling.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetChildren"></a>

### Coupling.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetParameter"></a>

### Coupling.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupAllSimilarChildren"></a>

### Coupling.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupSimilarObjects"></a>

### Coupling.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByAPIName"></a>

### Coupling.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByName"></a>

### Coupling.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.RemoveParameter"></a>

### Coupling.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

