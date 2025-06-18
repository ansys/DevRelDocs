# `CoupledPhysicsHeatingObjects`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CoupledPhysicsHeatingObjects"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CoupledPhysicsHeatingObjects

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoupledPhysicsHeatingObjects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CoupledPhysicsHeatingObjects.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CoupledPhysicsHeatingObjects.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#CoupledPhysicsHeatingObjects.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CoupledPhysicsHeatingObjects.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CoupledPhysicsHeatingObjects.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CoupledPhysicsHeatingObjects.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CoupledPhysicsHeatingObjects.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CoupledPhysicsHeatingObjects.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CoupledPhysicsHeatingObjects.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CoupledPhysicsHeatingObjects.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoupledPhysicsHeatingObjects.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CoupledPhysicsHeatingObjects.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CoupledPhysicsHeatingObjects.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CoupledPhysicsHeatingObjects.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CoupledPhysicsHeatingObjects.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CoupledPhysicsHeatingObjects.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CoupledPhysicsHeatingObjects.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#CoupledPhysicsHeatingObjects.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CoupledPhysicsHeatingObjects.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CoupledPhysicsHeatingObjects.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#CoupledPhysicsHeatingObjects.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#CoupledPhysicsHeatingObjects.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CoupledPhysicsHeatingObjects.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CoupledPhysicsHeatingObjects.Children"></a>

### *property* CoupledPhysicsHeatingObjects.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Comments"></a>

### *property* CoupledPhysicsHeatingObjects.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.DataModelObjectCategory"></a>

### *property* CoupledPhysicsHeatingObjects.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Images"></a>

### *property* CoupledPhysicsHeatingObjects.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.InternalObject"></a>

### *property* CoupledPhysicsHeatingObjects.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Location"></a>

### *property* CoupledPhysicsHeatingObjects.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Properties"></a>

### *property* CoupledPhysicsHeatingObjects.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Suppressed"></a>

### *property* CoupledPhysicsHeatingObjects.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.VisibleProperties"></a>

### *property* CoupledPhysicsHeatingObjects.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoupledPhysicsHeatingObjects.Activate"></a>

### CoupledPhysicsHeatingObjects.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.AddComment"></a>

### CoupledPhysicsHeatingObjects.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.AddImage"></a>

### CoupledPhysicsHeatingObjects.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.CopyTo"></a>

### CoupledPhysicsHeatingObjects.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.CreateParameter"></a>

### CoupledPhysicsHeatingObjects.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Delete"></a>

### CoupledPhysicsHeatingObjects.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Duplicate"></a>

### CoupledPhysicsHeatingObjects.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetChildren"></a>

### CoupledPhysicsHeatingObjects.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetParameter"></a>

### CoupledPhysicsHeatingObjects.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GroupAllSimilarChildren"></a>

### CoupledPhysicsHeatingObjects.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GroupSimilarObjects"></a>

### CoupledPhysicsHeatingObjects.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.PropertyByAPIName"></a>

### CoupledPhysicsHeatingObjects.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.PropertyByName"></a>

### CoupledPhysicsHeatingObjects.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.RemoveParameter"></a>

### CoupledPhysicsHeatingObjects.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

