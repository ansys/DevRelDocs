# ParameterVariableGroup

### *class* ParameterVariableGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ParameterVariableGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddParameterVariable`](#ParameterVariableGroup.AddParameterVariable)       | Create the object for working with an imported part.                              |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ParameterVariableGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ParameterVariableGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ParameterVariableGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ParameterVariableGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ParameterVariableGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ParameterVariableGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ParameterVariableGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ParameterVariableGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ParameterVariableGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ParameterVariableGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ParameterVariableGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ParameterVariableGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ParameterVariableGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ParameterVariableGroup.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#ParameterVariableGroup.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#ParameterVariableGroup.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#ParameterVariableGroup.Images)                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ParameterVariableGroup.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ParameterVariableGroup.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ParameterVariableGroup
```

## Property detail

### *property* ParameterVariableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariableGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ParameterVariableGroup.AddParameterVariable()

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ParameterVariableGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
