# `GeneralAxisymmetric`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeneralAxisymmetric.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeneralAxisymmetric.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GeneralAxisymmetric.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneralAxisymmetric.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneralAxisymmetric.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GeneralAxisymmetric.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GeneralAxisymmetric.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GeneralAxisymmetric.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GeneralAxisymmetric.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GeneralAxisymmetric.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GeneralAxisymmetric.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeneralAxisymmetric.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneralAxisymmetric.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GeneralAxisymmetric.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeneralAxisymmetric.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeneralAxisymmetric.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#GeneralAxisymmetric.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#GeneralAxisymmetric.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeneralAxisymmetric.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#GeneralAxisymmetric.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#GeneralAxisymmetric.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`EndPlane`](#GeneralAxisymmetric.EndPlane)                               | Gets or sets the EndPlane.                                    |
| [`Figures`](#GeneralAxisymmetric.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GeneralAxisymmetric.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeneralAxisymmetric.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#GeneralAxisymmetric.Location)                               | Gets or sets the Location.                                    |
| [`NodalPlanes`](#GeneralAxisymmetric.NodalPlanes)                         | Gets or sets the NodalPlanes.                                 |
| [`NodalPlanesVisible`](#GeneralAxisymmetric.NodalPlanesVisible)           | Gets or sets the NodalPlanesVisible.                          |
| [`Properties`](#GeneralAxisymmetric.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GeneralAxisymmetric.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`StartPlane`](#GeneralAxisymmetric.StartPlane)                           | Gets or sets the StartPlane.                                  |
| [`Suppressed`](#GeneralAxisymmetric.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GeneralAxisymmetric.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeneralAxisymmetric.Axis"></a>

### *property* GeneralAxisymmetric.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Children"></a>

### *property* GeneralAxisymmetric.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Comments"></a>

### *property* GeneralAxisymmetric.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CoordinateSystem"></a>

### *property* GeneralAxisymmetric.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.DataModelObjectCategory"></a>

### *property* GeneralAxisymmetric.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.EndPlane"></a>

### *property* GeneralAxisymmetric.EndPlane *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Figures"></a>

### *property* GeneralAxisymmetric.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Images"></a>

### *property* GeneralAxisymmetric.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.InternalObject"></a>

### *property* GeneralAxisymmetric.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeneralAxisymmetricAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Location"></a>

### *property* GeneralAxisymmetric.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanes"></a>

### *property* GeneralAxisymmetric.NodalPlanes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanes.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanesVisible"></a>

### *property* GeneralAxisymmetric.NodalPlanesVisible *: [Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible](../../../Mechanical/DataModel/Enums/NodalPlanesVisible.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanesVisible.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Properties"></a>

### *property* GeneralAxisymmetric.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ReadOnly"></a>

### *property* GeneralAxisymmetric.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.StartPlane"></a>

### *property* GeneralAxisymmetric.StartPlane *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Suppressed"></a>

### *property* GeneralAxisymmetric.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.VisibleProperties"></a>

### *property* GeneralAxisymmetric.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneralAxisymmetric.Activate"></a>

### GeneralAxisymmetric.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddComment"></a>

### GeneralAxisymmetric.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddFigure"></a>

### GeneralAxisymmetric.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddImage"></a>

### GeneralAxisymmetric.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CopyTo"></a>

### GeneralAxisymmetric.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CreateParameter"></a>

### GeneralAxisymmetric.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Delete"></a>

### GeneralAxisymmetric.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Duplicate"></a>

### GeneralAxisymmetric.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetChildren"></a>

### GeneralAxisymmetric.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetParameter"></a>

### GeneralAxisymmetric.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupAllSimilarChildren"></a>

### GeneralAxisymmetric.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupSimilarObjects"></a>

### GeneralAxisymmetric.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByAPIName"></a>

### GeneralAxisymmetric.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByName"></a>

### GeneralAxisymmetric.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.RemoveParameter"></a>

### GeneralAxisymmetric.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

