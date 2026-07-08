# `BodyMerge`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.BodyMerge"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BodyMerge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Body Merge is used to combine multiple geometric bodies with shared faces into a single merged body.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BodyMerge.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#BodyMerge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyMerge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyMerge.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#BodyMerge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BodyMerge.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#BodyMerge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#BodyMerge.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BodyMerge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BodyMerge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyMerge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#BodyMerge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BodyMerge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BodyMerge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Children`](#BodyMerge.Children)                               | Gets the list of children.                                                                               |
| [`Comments`](#BodyMerge.Comments)                               | Gets the list of associated comments.                                                                    |
| [`DataModelObjectCategory`](#BodyMerge.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                             |
| [`Figures`](#BodyMerge.Figures)                                 | Gets the list of associated figures.                                                                     |
| [`Images`](#BodyMerge.Images)                                   | Gets the list of associated images.                                                                      |
| [`InternalObject`](#BodyMerge.InternalObject)                   | Gets the internal object. For advanced usage only.                                                       |
| [`Location`](#BodyMerge.Location)                               | Gets or sets the Location.                                                                               |
| [`MergedBodies`](#BodyMerge.MergedBodies)                       | Get collection of resultant bodies. Throws an exception if the BodyMerge operation hasn't been executed. |
| [`Properties`](#BodyMerge.Properties)                           | Gets the list of properties for this object.                                                             |
| [`ScopingMethod`](#BodyMerge.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                          |
| [`VisibleProperties`](#BodyMerge.VisibleProperties)             | Gets the list of properties that are visible for this object.                                            |

<a id="property-detail"></a>

## Property detail

<a id="BodyMerge.Children"></a>

### *property* BodyMerge.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Comments"></a>

### *property* BodyMerge.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.DataModelObjectCategory"></a>

### *property* BodyMerge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Figures"></a>

### *property* BodyMerge.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Images"></a>

### *property* BodyMerge.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.InternalObject"></a>

### *property* BodyMerge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyMergeTreeNodeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Location"></a>

### *property* BodyMerge.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v261.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.MergedBodies"></a>

### *property* BodyMerge.MergedBodies *: Iterable[Ansys.ACT.Interfaces.Geometry.IGeoBody] | [None](https://docs.python.org/3/library/constants.html#None)*

Get collection of resultant bodies. Throws an exception if the BodyMerge operation hasn't been executed.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Properties"></a>

### *property* BodyMerge.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ScopingMethod"></a>

### *property* BodyMerge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.VisibleProperties"></a>

### *property* BodyMerge.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyMerge.Activate"></a>

### BodyMerge.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddComment"></a>

### BodyMerge.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddFigure"></a>

### BodyMerge.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddImage"></a>

### BodyMerge.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.CopyTo"></a>

### BodyMerge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.CreateParameter"></a>

### BodyMerge.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Duplicate"></a>

### BodyMerge.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetChildren"></a>

### BodyMerge.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetParameter"></a>

### BodyMerge.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GroupAllSimilarChildren"></a>

### BodyMerge.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GroupSimilarObjects"></a>

### BodyMerge.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PropertyByAPIName"></a>

### BodyMerge.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PropertyByName"></a>

### BodyMerge.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.RemoveParameter"></a>

### BodyMerge.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

