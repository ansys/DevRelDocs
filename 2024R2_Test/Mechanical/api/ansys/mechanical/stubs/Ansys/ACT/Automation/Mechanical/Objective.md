<a id="objective"></a>

# Objective

<a id="Objective"></a>

### *class* Objective

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Objective.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Delete`](#Objective.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Objective.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Objective.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Objective.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Objective.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Objective.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Objective.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Objective.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Objective.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Objective.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Objective.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Objective.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Objective.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Worksheet`](Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`NormalizedSum`](#Objective.NormalizedSum)                                                                         | Gets or sets the NormalizedSum.                               |
| [`Suppressed`](#Objective.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Objective.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#Objective.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Images`](#Objective.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Objective.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Objective.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Objective
```

<a id="property-detail"></a>

## Property detail

<a id="Objective.Worksheet"></a>

### *property* Objective.Worksheet *: [Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet](ObjectiveWorksheet.md#ObjectiveWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.InternalObject"></a>

### *property* Objective.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoObjectiveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.NormalizedSum"></a>

### *property* Objective.NormalizedSum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalizedSum.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Suppressed"></a>

### *property* Objective.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Objective.DataModelObjectCategory"></a>

### *property* Objective.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Children"></a>

### *property* Objective.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Comments"></a>

### *property* Objective.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Images"></a>

### *property* Objective.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Objective.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Properties"></a>

### *property* Objective.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.VisibleProperties"></a>

### *property* Objective.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Objective.Delete"></a>

### Objective.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetChildren"></a>

### Objective.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Objective.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddComment"></a>

### Objective.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddImage"></a>

### Objective.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Activate"></a>

### Objective.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CopyTo"></a>

### Objective.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Duplicate"></a>

### Objective.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupAllSimilarChildren"></a>

### Objective.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupSimilarObjects"></a>

### Objective.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByName"></a>

### Objective.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByAPIName"></a>

### Objective.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CreateParameter"></a>

### Objective.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetParameter"></a>

### Objective.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.RemoveParameter"></a>

### Objective.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
