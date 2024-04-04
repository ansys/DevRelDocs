# ParameterVariable

### *class* ParameterVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ParameterVariable.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ParameterVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ParameterVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ParameterVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ParameterVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ParameterVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ParameterVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ParameterVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ParameterVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ParameterVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ParameterVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ParameterVariable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ParameterVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ParameterVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ParameterVariable.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#ParameterVariable.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#ParameterVariable.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#ParameterVariable.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ParameterVariable.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ParameterVariable.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ParameterVariable
```

## Property detail

### *property* ParameterVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ParameterVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ParameterVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ParameterVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
