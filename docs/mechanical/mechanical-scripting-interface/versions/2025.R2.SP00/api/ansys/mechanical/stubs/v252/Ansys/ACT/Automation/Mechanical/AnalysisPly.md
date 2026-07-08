# `AnalysisPly`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisPly

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AnalysisPly.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AnalysisPly.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AnalysisPly.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AnalysisPly.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AnalysisPly.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AnalysisPly.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AnalysisPly.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#AnalysisPly.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AnalysisPly.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AnalysisPly.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AnalysisPly.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AnalysisPly.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AnalysisPly.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AnalysisPly.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AnalysisPly.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Angle`](#AnalysisPly.Angle)                                     | Gets or sets the Angle.                                       |
| [`Children`](#AnalysisPly.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AnalysisPly.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AnalysisPly.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AnalysisPly.Figures)                                 | Gets the list of associated figures.                          |
| [`IDInSource`](#AnalysisPly.IDInSource)                           | Gets the IDInSource.                                          |
| [`Images`](#AnalysisPly.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AnalysisPly.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Material`](#AnalysisPly.Material)                               | Gets the Material.                                            |
| [`NameInSource`](#AnalysisPly.NameInSource)                       | Gets the NameInSource.                                        |
| [`NumberOfElements`](#AnalysisPly.NumberOfElements)               | Gets the NumberOfElements.                                    |
| [`Properties`](#AnalysisPly.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AnalysisPly.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thickness`](#AnalysisPly.Thickness)                             | Gets the Thickness.                                           |
| [`VisibleProperties`](#AnalysisPly.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AnalysisPly.Angle"></a>

### *property* AnalysisPly.Angle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Angle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Children"></a>

### *property* AnalysisPly.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Comments"></a>

### *property* AnalysisPly.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.DataModelObjectCategory"></a>

### *property* AnalysisPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Figures"></a>

### *property* AnalysisPly.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IDInSource"></a>

### *property* AnalysisPly.IDInSource *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IDInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Images"></a>

### *property* AnalysisPly.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.InternalObject"></a>

### *property* AnalysisPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisPlyAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Material"></a>

### *property* AnalysisPly.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NameInSource"></a>

### *property* AnalysisPly.NameInSource *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NameInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NumberOfElements"></a>

### *property* AnalysisPly.NumberOfElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfElements.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Properties"></a>

### *property* AnalysisPly.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ReadOnly"></a>

### *property* AnalysisPly.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Thickness"></a>

### *property* AnalysisPly.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.VisibleProperties"></a>

### *property* AnalysisPly.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisPly.Activate"></a>

### AnalysisPly.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddComment"></a>

### AnalysisPly.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddFigure"></a>

### AnalysisPly.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddImage"></a>

### AnalysisPly.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CopyTo"></a>

### AnalysisPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CreateParameter"></a>

### AnalysisPly.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Duplicate"></a>

### AnalysisPly.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetChildren"></a>

### AnalysisPly.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetParameter"></a>

### AnalysisPly.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupAllSimilarChildren"></a>

### AnalysisPly.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupSimilarObjects"></a>

### AnalysisPly.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByAPIName"></a>

### AnalysisPly.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByName"></a>

### AnalysisPly.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.RemoveParameter"></a>

### AnalysisPly.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

