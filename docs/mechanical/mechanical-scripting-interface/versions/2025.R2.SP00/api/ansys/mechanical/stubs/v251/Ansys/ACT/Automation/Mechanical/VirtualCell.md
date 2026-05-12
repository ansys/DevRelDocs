# `VirtualCell`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.VirtualCell"></a>

#### *class* Ansys.ACT.Automation.Mechanical.VirtualCell

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualCell.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VirtualCell.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#VirtualCell.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VirtualCell.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VirtualCell.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#VirtualCell.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VirtualCell.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VirtualCell.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VirtualCell.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#VirtualCell.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VirtualCell.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VirtualCell.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VirtualCell.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#VirtualCell.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VirtualCell.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VirtualCell.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#VirtualCell.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#VirtualCell.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VirtualCell.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#VirtualCell.Figures)                                         | Gets the list of associated figures.                          |
| [`Geometry`](#VirtualCell.Geometry)                                       | Gets the Geometry.                                            |
| [`Images`](#VirtualCell.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#VirtualCell.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`ProjectToUnderlyingGeometry`](#VirtualCell.ProjectToUnderlyingGeometry) | Gets or sets the ProjectToUnderlyingGeometry.                 |
| [`Properties`](#VirtualCell.Properties)                                   | Gets the list of properties for this object.                  |
| [`VTClass`](#VirtualCell.VTClass)                                         | Gets the VTClass.                                             |
| [`VisibleProperties`](#VirtualCell.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VirtualCell.Children"></a>

### *property* VirtualCell.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Comments"></a>

### *property* VirtualCell.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.DataModelObjectCategory"></a>

### *property* VirtualCell.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Figures"></a>

### *property* VirtualCell.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Geometry"></a>

### *property* VirtualCell.Geometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Images"></a>

### *property* VirtualCell.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.InternalObject"></a>

### *property* VirtualCell.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ProjectToUnderlyingGeometry"></a>

### *property* VirtualCell.ProjectToUnderlyingGeometry *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToUnderlyingGeometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Properties"></a>

### *property* VirtualCell.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VTClass"></a>

### *property* VirtualCell.VTClass *: [Ansys.Mechanical.DataModel.Enums.VirtualCellClassType](../../../Mechanical/DataModel/Enums/VirtualCellClassType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.VirtualCellClassType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VTClass.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VisibleProperties"></a>

### *property* VirtualCell.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VirtualCell.Activate"></a>

### VirtualCell.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddComment"></a>

### VirtualCell.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddFigure"></a>

### VirtualCell.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddImage"></a>

### VirtualCell.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CopyTo"></a>

### VirtualCell.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CreateParameter"></a>

### VirtualCell.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Delete"></a>

### VirtualCell.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Duplicate"></a>

### VirtualCell.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetChildren"></a>

### VirtualCell.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetParameter"></a>

### VirtualCell.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupAllSimilarChildren"></a>

### VirtualCell.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupSimilarObjects"></a>

### VirtualCell.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByAPIName"></a>

### VirtualCell.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByName"></a>

### VirtualCell.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.RemoveParameter"></a>

### VirtualCell.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

