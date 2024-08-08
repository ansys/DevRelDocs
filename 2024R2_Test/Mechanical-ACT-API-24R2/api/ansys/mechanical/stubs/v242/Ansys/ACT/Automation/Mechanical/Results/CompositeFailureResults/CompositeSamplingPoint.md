# `CompositeSamplingPoint`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeSamplingPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#CompositeSamplingPoint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CompositeSamplingPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeSamplingPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeSamplingPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CompositeSamplingPoint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CompositeSamplingPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CompositeSamplingPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CompositeSamplingPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeSamplingPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CompositeSamplingPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CompositeSamplingPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CompositeSamplingPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CompositeSamplingPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CompositeSamplingPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#CompositeSamplingPoint.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#CompositeSamplingPoint.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#CompositeSamplingPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CompositeSamplingPoint.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#CompositeSamplingPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CompositeSamplingPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeSamplingPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeSamplingPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeSamplingPoint.InternalObject"></a>

### *property* CompositeSamplingPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeSamplingPointResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Location"></a>

### *property* CompositeSamplingPoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.DataModelObjectCategory"></a>

### *property* CompositeSamplingPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Children"></a>

### *property* CompositeSamplingPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Comments"></a>

### *property* CompositeSamplingPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Figures"></a>

### *property* CompositeSamplingPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Images"></a>

### *property* CompositeSamplingPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CompositeSamplingPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Properties"></a>

### *property* CompositeSamplingPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.VisibleProperties"></a>

### *property* CompositeSamplingPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPoint.Delete"></a>

### CompositeSamplingPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetChildren"></a>

### CompositeSamplingPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CompositeSamplingPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddComment"></a>

### CompositeSamplingPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddFigure"></a>

### CompositeSamplingPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddImage"></a>

### CompositeSamplingPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Activate"></a>

### CompositeSamplingPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CopyTo"></a>

### CompositeSamplingPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Duplicate"></a>

### CompositeSamplingPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupAllSimilarChildren"></a>

### CompositeSamplingPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupSimilarObjects"></a>

### CompositeSamplingPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByName"></a>

### CompositeSamplingPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByAPIName"></a>

### CompositeSamplingPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CreateParameter"></a>

### CompositeSamplingPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetParameter"></a>

### CompositeSamplingPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.RemoveParameter"></a>

### CompositeSamplingPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

