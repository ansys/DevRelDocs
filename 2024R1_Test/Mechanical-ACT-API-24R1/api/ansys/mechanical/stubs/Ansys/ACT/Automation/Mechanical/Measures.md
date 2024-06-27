# Measures

<a id="Measures"></a>

### *class* Measures

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Measures.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#Measures.EvaluateAllResults)           | Evaluate all measures.                                                            |
| [`AddCompositeCriterion`](#Measures.AddCompositeCriterion)     | Creates a new CompositeCriterion                                                  |
| [`AddPrimaryCriterion`](#Measures.AddPrimaryCriterion)         | Creates a new PrimaryCriterion                                                    |
| [`Delete`](#Measures.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Measures.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Measures.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Measures.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Measures.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Measures.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Measures.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Measures.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Measures.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Measures.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Measures.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Measures.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Measures.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Measures.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Measures.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Measures.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Measures.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Measures.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Measures.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Measures.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Measures
```

<a id="property-detail"></a>

## Property detail

<a id="Measures.InternalObject"></a>

### *property* Measures.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeasureGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Measures.DataModelObjectCategory"></a>

### *property* Measures.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Children"></a>

### *property* Measures.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Comments"></a>

### *property* Measures.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Figures"></a>

### *property* Measures.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Images"></a>

### *property* Measures.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Measures.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Properties"></a>

### *property* Measures.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Measures.VisibleProperties"></a>

### *property* Measures.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Measures.EvaluateAllResults"></a>

### Measures.EvaluateAllResults()

Evaluate all measures.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddCompositeCriterion"></a>

### Measures.AddCompositeCriterion()

Creates a new CompositeCriterion

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddPrimaryCriterion"></a>

### Measures.AddPrimaryCriterion()

Creates a new PrimaryCriterion

<!-- !! processed by numpydoc !! -->

<a id="Measures.Delete"></a>

### Measures.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetChildren"></a>

### Measures.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Measures.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddComment"></a>

### Measures.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddFigure"></a>

### Measures.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Measures.AddImage"></a>

### Measures.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Activate"></a>

### Measures.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Measures.CopyTo"></a>

### Measures.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Measures.Duplicate"></a>

### Measures.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GroupAllSimilarChildren"></a>

### Measures.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GroupSimilarObjects"></a>

### Measures.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Measures.PropertyByName"></a>

### Measures.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Measures.PropertyByAPIName"></a>

### Measures.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Measures.CreateParameter"></a>

### Measures.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.GetParameter"></a>

### Measures.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Measures.RemoveParameter"></a>

### Measures.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
