# Objective

### *class* Objective

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Objective.

> <!-- !! processed by numpydoc !! -->

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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Objective
```

## Property detail

### *property* Objective.Worksheet *: [Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet](ObjectiveWorksheet.md#ObjectiveWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

### *property* Objective.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoObjectiveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Objective.NormalizedSum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalizedSum.

<!-- !! processed by numpydoc !! -->

### *property* Objective.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Objective.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Objective.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Objective.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Objective.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Objective.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Objective.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Objective.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Objective.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Objective.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Objective.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Objective.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Objective.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Objective.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Objective.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Objective.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Objective.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Objective.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Objective.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Objective.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Objective.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Objective.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Objective.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
