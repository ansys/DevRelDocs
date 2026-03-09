# `BodyMergeSequence`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.BodyMergeSequence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BodyMergeSequence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A container for Body Merge operators ordered in a sequence.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [`Activate`](#BodyMergeSequence.Activate)                               | Activate the current object.                                                                                   |
| [`AddComment`](#BodyMergeSequence.AddComment)                           | Creates a new child Comment.                                                                                   |
| [`AddFigure`](#BodyMergeSequence.AddFigure)                             | Creates a new child Figure.                                                                                    |
| [`AddImage`](#BodyMergeSequence.AddImage)                               | Creates a new child Image.                                                                                     |
| [`ClearGeneratedData`](#BodyMergeSequence.ClearGeneratedData)           | Reverses all previously executed body merge operations, effectively undoing the actions performed by Generate. |
| [`CopyTo`](#BodyMergeSequence.CopyTo)                                   | Copies all visible properties from this object to another.                                                     |
| [`CreateAndAppend`](#BodyMergeSequence.CreateAndAppend)                 | Creates new body merge at the end of the sequence and returns the object.                                      |
| [`CreateParameter`](#BodyMergeSequence.CreateParameter)                 | Creates a new parameter for a Property.                                                                        |
| [`Duplicate`](#BodyMergeSequence.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                 |
| [`Generate`](#BodyMergeSequence.Generate)                               | Executes all body merge operators in sequential order.                                                         |
| [`GetChildren`](#BodyMergeSequence.GetChildren)                         | Gets the list of children, filtered by type.                                                                   |
| [`GetParameter`](#BodyMergeSequence.GetParameter)                       | Gets the parameter corresponding to the given property.                                                        |
| [`GroupAllSimilarChildren`](#BodyMergeSequence.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                        |
| [`GroupSimilarObjects`](#BodyMergeSequence.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                            |
| [`PropertyByAPIName`](#BodyMergeSequence.PropertyByAPIName)             | Get a property by its API name.                                                                                |
| [`PropertyByName`](#BodyMergeSequence.PropertyByName)                   | Get a property by its unique name.                                                                             |
| [`RemoveParameter`](#BodyMergeSequence.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                              |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#BodyMergeSequence.Children)                               | Gets the list of children.                                    |
| [`Comments`](#BodyMergeSequence.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BodyMergeSequence.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#BodyMergeSequence.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#BodyMergeSequence.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BodyMergeSequence.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BodyMergeSequence.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BodyMergeSequence.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyMergeSequence.Children"></a>

### *property* BodyMergeSequence.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Comments"></a>

### *property* BodyMergeSequence.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.DataModelObjectCategory"></a>

### *property* BodyMergeSequence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Figures"></a>

### *property* BodyMergeSequence.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Images"></a>

### *property* BodyMergeSequence.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.InternalObject"></a>

### *property* BodyMergeSequence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyMergeTreeNodeGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Properties"></a>

### *property* BodyMergeSequence.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.VisibleProperties"></a>

### *property* BodyMergeSequence.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyMergeSequence.Activate"></a>

### BodyMergeSequence.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddComment"></a>

### BodyMergeSequence.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddFigure"></a>

### BodyMergeSequence.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddImage"></a>

### BodyMergeSequence.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ClearGeneratedData"></a>

### BodyMergeSequence.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Reverses all previously executed body merge operations, effectively undoing the actions performed by Generate.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CopyTo"></a>

### BodyMergeSequence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CreateAndAppend"></a>

### BodyMergeSequence.CreateAndAppend() → [Ansys.ACT.Automation.Mechanical.BodyMerge](BodyMerge.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.BodyMerge)

Creates new body merge at the end of the sequence and returns the object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CreateParameter"></a>

### BodyMergeSequence.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Duplicate"></a>

### BodyMergeSequence.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Generate"></a>

### BodyMergeSequence.Generate() → [None](https://docs.python.org/3/library/constants.html#None)

Executes all body merge operators in sequential order.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetChildren"></a>

### BodyMergeSequence.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetParameter"></a>

### BodyMergeSequence.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GroupAllSimilarChildren"></a>

### BodyMergeSequence.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GroupSimilarObjects"></a>

### BodyMergeSequence.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PropertyByAPIName"></a>

### BodyMergeSequence.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PropertyByName"></a>

### BodyMergeSequence.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.RemoveParameter"></a>

### BodyMergeSequence.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

