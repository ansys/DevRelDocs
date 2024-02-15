# RotationBoundaryCondition

### *class* RotationBoundaryCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RotationBoundaryCondition.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#RotationBoundaryCondition.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RotationBoundaryCondition.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationBoundaryCondition.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationBoundaryCondition.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RotationBoundaryCondition.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RotationBoundaryCondition.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RotationBoundaryCondition.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RotationBoundaryCondition.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationBoundaryCondition.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RotationBoundaryCondition.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RotationBoundaryCondition.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RotationBoundaryCondition.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RotationBoundaryCondition.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RotationBoundaryCondition.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Axis`](#RotationBoundaryCondition.Axis)                                                                              | Gets or sets the Axis.                                        |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#RotationBoundaryCondition.NumberOfSegments)                                                      | Gets or sets the NumberOfSegments.                            |
| [`Suppressed`](#RotationBoundaryCondition.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RotationBoundaryCondition.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#RotationBoundaryCondition.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#RotationBoundaryCondition.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#RotationBoundaryCondition.Images)                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#RotationBoundaryCondition.ReadOnly)                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RotationBoundaryCondition.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RotationBoundaryCondition.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RotationBoundaryCondition
```

## Property detail

### *property* RotationBoundaryCondition.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RotationBoundaryCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RotationBoundaryCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RotationBoundaryCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
