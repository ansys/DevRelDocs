# `InitialConditions`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.InitialConditions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.InitialConditions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#InitialConditions.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#InitialConditions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InitialConditions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InitialConditions.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#InitialConditions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#InitialConditions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#InitialConditions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#InitialConditions.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#InitialConditions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#InitialConditions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InitialConditions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`InsertAngularVelocity`](#InitialConditions.InsertAngularVelocity)     | Creates a new Angular Velocity                                                    |
| [`InsertDropHeight`](#InitialConditions.InsertDropHeight)               | Creates a new Drop Height                                                         |
| [`InsertVelocity`](#InitialConditions.InsertVelocity)                   | Creates a new Velocity                                                            |
| [`PropertyByAPIName`](#InitialConditions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#InitialConditions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#InitialConditions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#InitialConditions.Children)                               | Gets the list of children.                                    |
| [`Comments`](#InitialConditions.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#InitialConditions.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#InitialConditions.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#InitialConditions.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#InitialConditions.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InitialConditions.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InitialConditions.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InitialConditions.Children"></a>

### *property* InitialConditions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Comments"></a>

### *property* InitialConditions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.DataModelObjectCategory"></a>

### *property* InitialConditions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Figures"></a>

### *property* InitialConditions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Images"></a>

### *property* InitialConditions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InternalObject"></a>

### *property* InitialConditions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Properties"></a>

### *property* InitialConditions.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.VisibleProperties"></a>

### *property* InitialConditions.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InitialConditions.Activate"></a>

### InitialConditions.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddComment"></a>

### InitialConditions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddFigure"></a>

### InitialConditions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddImage"></a>

### InitialConditions.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CopyTo"></a>

### InitialConditions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CreateParameter"></a>

### InitialConditions.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Duplicate"></a>

### InitialConditions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetChildren"></a>

### InitialConditions.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetParameter"></a>

### InitialConditions.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupAllSimilarChildren"></a>

### InitialConditions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupSimilarObjects"></a>

### InitialConditions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertAngularVelocity"></a>

### InitialConditions.InsertAngularVelocity() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Angular Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertDropHeight"></a>

### InitialConditions.InsertDropHeight() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Drop Height

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertVelocity"></a>

### InitialConditions.InsertVelocity() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByAPIName"></a>

### InitialConditions.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByName"></a>

### InitialConditions.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.RemoveParameter"></a>

### InitialConditions.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

