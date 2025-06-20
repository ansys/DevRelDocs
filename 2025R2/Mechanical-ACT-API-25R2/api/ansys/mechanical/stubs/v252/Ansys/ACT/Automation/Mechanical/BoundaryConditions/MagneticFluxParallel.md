# `MagneticFluxParallel`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticFluxParallel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MagneticFluxParallel.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MagneticFluxParallel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticFluxParallel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticFluxParallel.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MagneticFluxParallel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MagneticFluxParallel.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MagneticFluxParallel.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MagneticFluxParallel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MagneticFluxParallel.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MagneticFluxParallel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MagneticFluxParallel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticFluxParallel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MagneticFluxParallel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MagneticFluxParallel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MagneticFluxParallel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MagneticFluxParallel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MagneticFluxParallel.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MagneticFluxParallel.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MagneticFluxParallel.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MagneticFluxParallel.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MagneticFluxParallel.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MagneticFluxParallel.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MagneticFluxParallel.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#MagneticFluxParallel.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MagneticFluxParallel.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#MagneticFluxParallel.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#MagneticFluxParallel.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MagneticFluxParallel.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MagneticFluxParallel.Children"></a>

### *property* MagneticFluxParallel.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Comments"></a>

### *property* MagneticFluxParallel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.DataModelObjectCategory"></a>

### *property* MagneticFluxParallel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Figures"></a>

### *property* MagneticFluxParallel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Images"></a>

### *property* MagneticFluxParallel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.InternalObject"></a>

### *property* MagneticFluxParallel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Location"></a>

### *property* MagneticFluxParallel.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Properties"></a>

### *property* MagneticFluxParallel.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ReadOnly"></a>

### *property* MagneticFluxParallel.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.SharedRefBody"></a>

### *property* MagneticFluxParallel.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Suppressed"></a>

### *property* MagneticFluxParallel.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.VisibleProperties"></a>

### *property* MagneticFluxParallel.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticFluxParallel.Activate"></a>

### MagneticFluxParallel.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddComment"></a>

### MagneticFluxParallel.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddFigure"></a>

### MagneticFluxParallel.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddImage"></a>

### MagneticFluxParallel.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CopyTo"></a>

### MagneticFluxParallel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CreateParameter"></a>

### MagneticFluxParallel.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Delete"></a>

### MagneticFluxParallel.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Duplicate"></a>

### MagneticFluxParallel.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetChildren"></a>

### MagneticFluxParallel.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetParameter"></a>

### MagneticFluxParallel.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupAllSimilarChildren"></a>

### MagneticFluxParallel.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupSimilarObjects"></a>

### MagneticFluxParallel.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PromoteToNamedSelection"></a>

### MagneticFluxParallel.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByAPIName"></a>

### MagneticFluxParallel.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByName"></a>

### MagneticFluxParallel.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.RemoveParameter"></a>

### MagneticFluxParallel.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

