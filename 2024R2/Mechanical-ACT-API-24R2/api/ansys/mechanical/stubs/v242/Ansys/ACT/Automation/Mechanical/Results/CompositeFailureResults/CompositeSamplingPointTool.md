# `CompositeSamplingPointTool`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeSamplingPointTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

### *property* CompositeSamplingPointTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Comments"></a>

### *property* CompositeSamplingPointTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.DataModelObjectCategory"></a>

### *property* CompositeSamplingPointTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Figures"></a>

### *property* CompositeSamplingPointTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Images"></a>

### *property* CompositeSamplingPointTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.InternalObject"></a>

### *property* CompositeSamplingPointTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Properties"></a>

### *property* CompositeSamplingPointTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.VisibleProperties"></a>

### *property* CompositeSamplingPointTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPointTool.Activate"></a>

### CompositeSamplingPointTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddComment"></a>

### CompositeSamplingPointTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddCompositeSamplingPoint"></a>

### CompositeSamplingPointTool.AddCompositeSamplingPoint()

Creates a new CompositeSamplingPoint

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddFigure"></a>

### CompositeSamplingPointTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddImage"></a>

### CompositeSamplingPointTool.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CopyTo"></a>

### CompositeSamplingPointTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CreateParameter"></a>

### CompositeSamplingPointTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Delete"></a>

### CompositeSamplingPointTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Duplicate"></a>

### CompositeSamplingPointTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetChildren"></a>

### CompositeSamplingPointTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetParameter"></a>

### CompositeSamplingPointTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupAllSimilarChildren"></a>

### CompositeSamplingPointTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupSimilarObjects"></a>

### CompositeSamplingPointTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByAPIName"></a>

### CompositeSamplingPointTool.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByName"></a>

### CompositeSamplingPointTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.RemoveParameter"></a>

### CompositeSamplingPointTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

