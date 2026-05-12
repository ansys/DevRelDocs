# `CompositeSamplingPointTool`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeSamplingPointTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CompositeSamplingPointTool.Activate)                                   | Activate the current object.                                                      |
| [`AddComment`](#CompositeSamplingPointTool.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddCompositeSamplingPoint`](#CompositeSamplingPointTool.AddCompositeSamplingPoint) | Creates a new CompositeSamplingPoint                                              |
| [`AddFigure`](#CompositeSamplingPointTool.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeSamplingPointTool.AddImage)                                   | Creates a new child Image.                                                        |
| [`CopyTo`](#CompositeSamplingPointTool.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CompositeSamplingPointTool.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`Delete`](#CompositeSamplingPointTool.Delete)                                       | Run the Delete action.                                                            |
| [`Duplicate`](#CompositeSamplingPointTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CompositeSamplingPointTool.GetChildren)                             | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CompositeSamplingPointTool.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CompositeSamplingPointTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeSamplingPointTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CompositeSamplingPointTool.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`PropertyByName`](#CompositeSamplingPointTool.PropertyByName)                       | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CompositeSamplingPointTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CompositeSamplingPointTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CompositeSamplingPointTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeSamplingPointTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CompositeSamplingPointTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CompositeSamplingPointTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeSamplingPointTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeSamplingPointTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeSamplingPointTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeSamplingPointTool.Children"></a>

### *property* CompositeSamplingPointTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Comments"></a>

### *property* CompositeSamplingPointTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.DataModelObjectCategory"></a>

### *property* CompositeSamplingPointTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Figures"></a>

### *property* CompositeSamplingPointTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Images"></a>

### *property* CompositeSamplingPointTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.InternalObject"></a>

### *property* CompositeSamplingPointTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Properties"></a>

### *property* CompositeSamplingPointTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.VisibleProperties"></a>

### *property* CompositeSamplingPointTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPointTool.Activate"></a>

### CompositeSamplingPointTool.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddComment"></a>

### CompositeSamplingPointTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddCompositeSamplingPoint"></a>

### CompositeSamplingPointTool.AddCompositeSamplingPoint() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint](CompositeSamplingPoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint)

Creates a new CompositeSamplingPoint

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddFigure"></a>

### CompositeSamplingPointTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddImage"></a>

### CompositeSamplingPointTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CopyTo"></a>

### CompositeSamplingPointTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CreateParameter"></a>

### CompositeSamplingPointTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Delete"></a>

### CompositeSamplingPointTool.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Duplicate"></a>

### CompositeSamplingPointTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetChildren"></a>

### CompositeSamplingPointTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetParameter"></a>

### CompositeSamplingPointTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupAllSimilarChildren"></a>

### CompositeSamplingPointTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupSimilarObjects"></a>

### CompositeSamplingPointTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByAPIName"></a>

### CompositeSamplingPointTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByName"></a>

### CompositeSamplingPointTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.RemoveParameter"></a>

### CompositeSamplingPointTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

