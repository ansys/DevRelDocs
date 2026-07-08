# `Material`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Material"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Material

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Material.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Material.Activate)                                 | Activate the current object.                                                      |
| [`AddComment`](#Material.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Material.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Material.AddImage)                                 | Creates a new child Image.                                                        |
| [`AddMaterialAssignment`](#Material.AddMaterialAssignment)       | Run the AddMaterialAssignment action.                                             |
| [`CopyTo`](#Material.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`CreateMaterialAssignment`](#Material.CreateMaterialAssignment) | Run the CreateMaterialAssignment action.                                          |
| [`CreateParameter`](#Material.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#Material.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GetAsDictionary`](#Material.GetAsDictionary)                   | Returns material as a python dictionary                                           |
| [`GetChildren`](#Material.GetChildren)                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Material.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Material.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Material.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Material.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`PropertyByName`](#Material.PropertyByName)                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Material.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`AssignedBodies`](#Material.AssignedBodies)                   | Gets the AssignedBodies.                                                      |
| [`Children`](#Material.Children)                               | Gets the list of children.                                                    |
| [`Comments`](#Material.Comments)                               | Gets the list of associated comments.                                         |
| [`DataModelObjectCategory`](#Material.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                  |
| [`Figures`](#Material.Figures)                                 | Gets the list of associated figures.                                          |
| [`Images`](#Material.Images)                                   | Gets the list of associated images.                                           |
| [`InternalObject`](#Material.InternalObject)                   | Gets the internal object. For advanced usage only.                            |
| [`MaterialModels`](#Material.MaterialModels)                   | Returns a collection of the material models that this material is made up of. |
| [`Properties`](#Material.Properties)                           | Gets the list of properties for this object.                                  |
| [`VisibleProperties`](#Material.VisibleProperties)             | Gets the list of properties that are visible for this object.                 |

<a id="property-detail"></a>

## Property detail

<a id="Material.AssignedBodies"></a>

### *property* Material.AssignedBodies *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

<a id="Material.Children"></a>

### *property* Material.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Material.Comments"></a>

### *property* Material.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Material.DataModelObjectCategory"></a>

### *property* Material.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Material.Figures"></a>

### *property* Material.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Material.Images"></a>

### *property* Material.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Material.InternalObject"></a>

### *property* Material.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Material.MaterialModels"></a>

### *property* Material.MaterialModels *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a collection of the material models that this material is made up of.

<!-- !! processed by numpydoc !! -->

<a id="Material.Properties"></a>

### *property* Material.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Material.VisibleProperties"></a>

### *property* Material.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Material.Activate"></a>

### Material.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddComment"></a>

### Material.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddFigure"></a>

### Material.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Material.AddImage"></a>

### Material.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Material.AddMaterialAssignment"></a>

### Material.AddMaterialAssignment()

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.CopyTo"></a>

### Material.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateMaterialAssignment"></a>

### Material.CreateMaterialAssignment()

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="Material.CreateParameter"></a>

### Material.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Material.Duplicate"></a>

### Material.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetAsDictionary"></a>

### Material.GetAsDictionary()

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="Material.GetChildren"></a>

### Material.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Material.GetParameter"></a>

### Material.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupAllSimilarChildren"></a>

### Material.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Material.GroupSimilarObjects"></a>

### Material.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByAPIName"></a>

### Material.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Material.PropertyByName"></a>

### Material.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Material.RemoveParameter"></a>

### Material.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

