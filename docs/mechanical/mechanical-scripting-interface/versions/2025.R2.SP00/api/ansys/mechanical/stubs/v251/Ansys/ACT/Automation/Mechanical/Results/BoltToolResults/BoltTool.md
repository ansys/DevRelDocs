# `BoltTool`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BoltTool.Activate)                               | Activate the current object.                                                      |
| [`AddAdjustment`](#BoltTool.AddAdjustment)                     | Creates a new BoltAdjustment                                                      |
| [`AddComment`](#BoltTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltTool.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltTool.AddImage)                               | Creates a new child Image.                                                        |
| [`AddWorkingLoad`](#BoltTool.AddWorkingLoad)                   | Creates a new BoltWorkingLoad                                                     |
| [`CopyTo`](#BoltTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BoltTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#BoltTool.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BoltTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#BoltTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#BoltTool.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BoltTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BoltTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#BoltTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BoltTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BoltTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#BoltTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#BoltTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BoltTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#BoltTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#BoltTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BoltTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BoltTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BoltTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BoltTool.Children"></a>

### *property* BoltTool.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Comments"></a>

### *property* BoltTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.DataModelObjectCategory"></a>

### *property* BoltTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Figures"></a>

### *property* BoltTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Images"></a>

### *property* BoltTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.InternalObject"></a>

### *property* BoltTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBoltToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Properties"></a>

### *property* BoltTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.VisibleProperties"></a>

### *property* BoltTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltTool.Activate"></a>

### BoltTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddAdjustment"></a>

### BoltTool.AddAdjustment()

Creates a new BoltAdjustment

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddComment"></a>

### BoltTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddFigure"></a>

### BoltTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddImage"></a>

### BoltTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddWorkingLoad"></a>

### BoltTool.AddWorkingLoad()

Creates a new BoltWorkingLoad

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CopyTo"></a>

### BoltTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CreateParameter"></a>

### BoltTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Delete"></a>

### BoltTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Duplicate"></a>

### BoltTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.EvaluateAllResults"></a>

### BoltTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetChildren"></a>

### BoltTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetParameter"></a>

### BoltTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupAllSimilarChildren"></a>

### BoltTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupSimilarObjects"></a>

### BoltTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByAPIName"></a>

### BoltTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByName"></a>

### BoltTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.RemoveParameter"></a>

### BoltTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

