# GenericBoundaryCondition

### *class* GenericBoundaryCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GenericBoundaryCondition.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#GenericBoundaryCondition.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#GenericBoundaryCondition.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericBoundaryCondition.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericBoundaryCondition.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericBoundaryCondition.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#GenericBoundaryCondition.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#GenericBoundaryCondition.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericBoundaryCondition.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericBoundaryCondition.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericBoundaryCondition.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericBoundaryCondition.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericBoundaryCondition.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericBoundaryCondition.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericBoundaryCondition.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericBoundaryCondition.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Suppressed`](#GenericBoundaryCondition.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#GenericBoundaryCondition.SharedRefBody)                                                             | Gets or sets the SharedRefBody.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GenericBoundaryCondition.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#GenericBoundaryCondition.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#GenericBoundaryCondition.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#GenericBoundaryCondition.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericBoundaryCondition.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericBoundaryCondition.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericBoundaryCondition.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import GenericBoundaryCondition
```

## Property detail

### *property* GenericBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GenericBoundaryCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GenericBoundaryCondition.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GenericBoundaryCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
