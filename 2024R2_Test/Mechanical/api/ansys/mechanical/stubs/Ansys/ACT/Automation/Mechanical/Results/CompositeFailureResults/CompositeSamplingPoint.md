# CompositeSamplingPoint

### *class* CompositeSamplingPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompositeSamplingPoint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#CompositeSamplingPoint.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#CompositeSamplingPoint.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CompositeSamplingPoint.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#CompositeSamplingPoint.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#CompositeSamplingPoint.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#CompositeSamplingPoint.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeSamplingPoint.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeSamplingPoint.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults import CompositeSamplingPoint
```

## Property detail

### *property* CompositeSamplingPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeSamplingPointResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CompositeSamplingPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CompositeSamplingPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CompositeSamplingPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
