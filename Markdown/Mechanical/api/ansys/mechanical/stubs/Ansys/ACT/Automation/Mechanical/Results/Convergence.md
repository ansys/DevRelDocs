# Convergence

### *class* Convergence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Convergence.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Convergence.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Convergence.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Convergence.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Convergence.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Convergence.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Convergence.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Convergence.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Convergence.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Convergence.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Convergence.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Convergence.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Convergence.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Convergence.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Convergence.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LastChange`](#Convergence.LastChange)                                                                                | Gets the LastChange.                                          |
| [`AllowableChange`](#Convergence.AllowableChange)                                                                      | Gets or sets the AllowableChange.                             |
| [`Type`](#Convergence.Type)                                                                                            | Gets or sets the Type.                                        |
| [`IsConverged`](#Convergence.IsConverged)                                                                              | Gets the IsConverged.                                         |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Convergence.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Convergence.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Convergence.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Convergence.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Convergence.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Convergence.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import Convergence
```

## Property detail

### *property* Convergence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConvergenceAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.LastChange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastChange.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.AllowableChange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowableChange.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Type *: [Ansys.Mechanical.DataModel.Enums.ConvergenceType](../../../../Mechanical/DataModel/Enums/ConvergenceType.md#ConvergenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.IsConverged *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsConverged.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Convergence.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Convergence.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Convergence.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Convergence.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Convergence.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Convergence.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Convergence.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Convergence.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Convergence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Convergence.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Convergence.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Convergence.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Convergence.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Convergence.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Convergence.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Convergence.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Convergence.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
