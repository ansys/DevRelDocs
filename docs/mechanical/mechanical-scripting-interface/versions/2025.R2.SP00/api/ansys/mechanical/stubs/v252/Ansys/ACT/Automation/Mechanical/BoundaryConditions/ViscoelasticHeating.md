# `ViscoelasticHeating`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ViscoelasticHeating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ViscoelasticHeating.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ViscoelasticHeating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ViscoelasticHeating.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ViscoelasticHeating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ViscoelasticHeating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ViscoelasticHeating.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ViscoelasticHeating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ViscoelasticHeating.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ViscoelasticHeating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ViscoelasticHeating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ViscoelasticHeating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ViscoelasticHeating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ViscoelasticHeating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ViscoelasticHeating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ViscoelasticHeating.Children)                                 | Gets the list of children.                                    |
| [`Comments`](#ViscoelasticHeating.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ViscoelasticHeating.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                  |
| [`Images`](#ViscoelasticHeating.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#ViscoelasticHeating.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#ViscoelasticHeating.Location)                                 | Gets or sets the Location.                                    |
| [`Properties`](#ViscoelasticHeating.Properties)                             | Gets the list of properties for this object.                  |
| [`Suppressed`](#ViscoelasticHeating.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`ViscoelasticLossFraction`](#ViscoelasticHeating.ViscoelasticLossFraction) | Gets or sets the ViscoelasticLossFraction.                    |
| [`VisibleProperties`](#ViscoelasticHeating.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ViscoelasticHeating.Children"></a>

### *property* ViscoelasticHeating.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Comments"></a>

### *property* ViscoelasticHeating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.DataModelObjectCategory"></a>

### *property* ViscoelasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Images"></a>

### *property* ViscoelasticHeating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.InternalObject"></a>

### *property* ViscoelasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Location"></a>

### *property* ViscoelasticHeating.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Properties"></a>

### *property* ViscoelasticHeating.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Suppressed"></a>

### *property* ViscoelasticHeating.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ViscoelasticLossFraction"></a>

### *property* ViscoelasticHeating.ViscoelasticLossFraction *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscoelasticLossFraction.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.VisibleProperties"></a>

### *property* ViscoelasticHeating.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ViscoelasticHeating.Activate"></a>

### ViscoelasticHeating.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddComment"></a>

### ViscoelasticHeating.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddImage"></a>

### ViscoelasticHeating.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CopyTo"></a>

### ViscoelasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CreateParameter"></a>

### ViscoelasticHeating.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Delete"></a>

### ViscoelasticHeating.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Duplicate"></a>

### ViscoelasticHeating.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetChildren"></a>

### ViscoelasticHeating.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetParameter"></a>

### ViscoelasticHeating.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupAllSimilarChildren"></a>

### ViscoelasticHeating.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupSimilarObjects"></a>

### ViscoelasticHeating.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByAPIName"></a>

### ViscoelasticHeating.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByName"></a>

### ViscoelasticHeating.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.RemoveParameter"></a>

### ViscoelasticHeating.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

