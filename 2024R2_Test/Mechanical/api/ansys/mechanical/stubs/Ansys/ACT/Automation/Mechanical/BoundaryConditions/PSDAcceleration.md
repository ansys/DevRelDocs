# PSDAcceleration

### *class* PSDAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PSDAcceleration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#PSDAcceleration.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PSDAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PSDAcceleration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PSDAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PSDAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PSDAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PSDAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PSDAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PSDAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PSDAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PSDAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LoadData`](#PSDAcceleration.LoadData)                                                                                | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](#PSDAcceleration.BoundaryCondition)                                                              | Gets or sets the BoundaryCondition.                           |
| [`Direction`](#PSDAcceleration.Direction)                                                                              | Gets or sets the Direction.                                   |
| [`Suppressed`](#PSDAcceleration.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`Children`](#PSDAcceleration.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#PSDAcceleration.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#PSDAcceleration.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#PSDAcceleration.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PSDAcceleration.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PSDAcceleration.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PSDAcceleration
```

## Property detail

### *property* PSDAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PSDAcceleration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PSDAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PSDAcceleration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
