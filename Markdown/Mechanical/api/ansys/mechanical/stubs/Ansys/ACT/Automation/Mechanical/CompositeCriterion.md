# CompositeCriterion

### *class* CompositeCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompositeCriterion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetDefinition`](#CompositeCriterion.GetDefinition)                     | Gets the Worksheet Definition.                                                    |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#CompositeCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ClearGeneratedData`](#CompositeCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#CompositeCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CompositeCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CompositeCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CompositeCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CompositeCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CompositeCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CompositeCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CompositeCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CompositeCriterion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CompositeCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CompositeCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Value`](#CompositeCriterion.Value)                                                                                | Gets the Value.                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#CompositeCriterion.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`Children`](#CompositeCriterion.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#CompositeCriterion.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#CompositeCriterion.Figures)                                                                            | Gets the list of associated figures.                          |
| [`Images`](#CompositeCriterion.Images)                                                                              | Gets the list of associated images.                           |
| [`ReadOnly`](#CompositeCriterion.ReadOnly)                                                                          | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeCriterion.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeCriterion.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CompositeCriterion
```

## Property detail

### *property* CompositeCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Value *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CompositeCriterion.GetDefinition()

Gets the Worksheet Definition.
This Definition is a list of CompositeCriterionTerms.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CompositeCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
