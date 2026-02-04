# `ConstructionPoint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ConstructionPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstructionPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ConstructionPoint.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ConstructionPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConstructionPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ConstructionPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ConstructionPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ConstructionPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ConstructionPoint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ConstructionPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ConstructionPoint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ConstructionPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ConstructionPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstructionPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ConstructionPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ConstructionPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ConstructionPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetLocation`](#ConstructionPoint.SetLocation)                         | Sets the point location.                                                          |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ConstructionPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ConstructionPoint.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ConstructionPoint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ConstructionPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ConstructionPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ConstructionPoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LocationX`](#ConstructionPoint.LocationX)                             | Gets or sets the LocationX.                                   |
| [`LocationY`](#ConstructionPoint.LocationY)                             | Gets or sets the LocationY.                                   |
| [`LocationZ`](#ConstructionPoint.LocationZ)                             | Gets or sets the LocationZ.                                   |
| [`Properties`](#ConstructionPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConstructionPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionPoint.Children"></a>

### *property* ConstructionPoint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Comments"></a>

### *property* ConstructionPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.DataModelObjectCategory"></a>

### *property* ConstructionPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Figures"></a>

### *property* ConstructionPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Images"></a>

### *property* ConstructionPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.InternalObject"></a>

### *property* ConstructionPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionPointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationX"></a>

### *property* ConstructionPoint.LocationX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationX.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationY"></a>

### *property* ConstructionPoint.LocationY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationY.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationZ"></a>

### *property* ConstructionPoint.LocationZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZ.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Properties"></a>

### *property* ConstructionPoint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.VisibleProperties"></a>

### *property* ConstructionPoint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionPoint.Activate"></a>

### ConstructionPoint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddComment"></a>

### ConstructionPoint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddFigure"></a>

### ConstructionPoint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddImage"></a>

### ConstructionPoint.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CopyTo"></a>

### ConstructionPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CreateParameter"></a>

### ConstructionPoint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Delete"></a>

### ConstructionPoint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Duplicate"></a>

### ConstructionPoint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetChildren"></a>

### ConstructionPoint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetParameter"></a>

### ConstructionPoint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupAllSimilarChildren"></a>

### ConstructionPoint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupSimilarObjects"></a>

### ConstructionPoint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByAPIName"></a>

### ConstructionPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByName"></a>

### ConstructionPoint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.RemoveParameter"></a>

### ConstructionPoint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.SetLocation"></a>

### ConstructionPoint.SetLocation(newvalue: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the point location.

<!-- !! processed by numpydoc !! -->

