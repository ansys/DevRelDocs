# PSDGAcceleration

### *class* PSDGAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PSDGAcceleration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#PSDGAcceleration.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PSDGAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDGAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDGAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PSDGAcceleration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PSDGAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PSDGAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PSDGAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDGAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PSDGAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PSDGAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PSDGAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PSDGAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PSDGAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LoadData`](#PSDGAcceleration.LoadData)                                                                               | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](#PSDGAcceleration.BoundaryCondition)                                                             | Gets or sets the BoundaryCondition.                           |
| [`Direction`](#PSDGAcceleration.Direction)                                                                             | Gets or sets the Direction.                                   |
| [`Suppressed`](#PSDGAcceleration.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`Children`](#PSDGAcceleration.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#PSDGAcceleration.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#PSDGAcceleration.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDGAcceleration.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PSDGAcceleration.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PSDGAcceleration.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PSDGAcceleration
```

## Property detail

### *property* PSDGAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PSDGAcceleration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PSDGAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PSDGAcceleration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
