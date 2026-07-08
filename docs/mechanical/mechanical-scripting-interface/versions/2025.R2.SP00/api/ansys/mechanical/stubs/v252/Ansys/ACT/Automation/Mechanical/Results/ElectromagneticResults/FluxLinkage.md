# `FluxLinkage`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluxLinkage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FluxLinkage.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FluxLinkage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FluxLinkage.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FluxLinkage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FluxLinkage.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FluxLinkage.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FluxLinkage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FluxLinkage.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FluxLinkage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FluxLinkage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluxLinkage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FluxLinkage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FluxLinkage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FluxLinkage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FluxLinkage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FluxLinkage.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FluxLinkage.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#FluxLinkage.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FluxLinkage.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#FluxLinkage.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Properties`](#FluxLinkage.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FluxLinkage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FluxLinkage.Children"></a>

### *property* FluxLinkage.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Comments"></a>

### *property* FluxLinkage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.DataModelObjectCategory"></a>

### *property* FluxLinkage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Images"></a>

### *property* FluxLinkage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.InternalObject"></a>

### *property* FluxLinkage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Multiplier"></a>

### *property* FluxLinkage.Multiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Properties"></a>

### *property* FluxLinkage.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.VisibleProperties"></a>

### *property* FluxLinkage.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluxLinkage.Activate"></a>

### FluxLinkage.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddComment"></a>

### FluxLinkage.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddImage"></a>

### FluxLinkage.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CopyTo"></a>

### FluxLinkage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CreateParameter"></a>

### FluxLinkage.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Delete"></a>

### FluxLinkage.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Duplicate"></a>

### FluxLinkage.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetChildren"></a>

### FluxLinkage.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetParameter"></a>

### FluxLinkage.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupAllSimilarChildren"></a>

### FluxLinkage.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupSimilarObjects"></a>

### FluxLinkage.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByAPIName"></a>

### FluxLinkage.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByName"></a>

### FluxLinkage.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.RemoveParameter"></a>

### FluxLinkage.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

