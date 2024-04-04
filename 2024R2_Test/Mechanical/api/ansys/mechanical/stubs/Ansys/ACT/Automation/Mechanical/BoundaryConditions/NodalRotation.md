# NodalRotation

### *class* NodalRotation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalRotation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#NodalRotation.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#NodalRotation.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalRotation.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalRotation.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalRotation.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#NodalRotation.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#NodalRotation.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalRotation.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalRotation.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalRotation.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalRotation.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalRotation.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalRotation.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalRotation.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalRotation.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RotationX`](#NodalRotation.RotationX)                                                                                | Gets or sets the RotationX.                                   |
| [`RotationY`](#NodalRotation.RotationY)                                                                                | Gets or sets the RotationY.                                   |
| [`RotationZ`](#NodalRotation.RotationZ)                                                                                | Gets or sets the RotationZ.                                   |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets the CoordinateSystem.                                    |
| [`Location`](#NodalRotation.Location)                                                                                  | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalRotation.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalRotation.SharedRefBody)                                                                        | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalRotation.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#NodalRotation.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#NodalRotation.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#NodalRotation.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalRotation.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalRotation.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalRotation.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NodalRotation
```

## Property detail

### *property* NodalRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NodalRotation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NodalRotation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### NodalRotation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NodalRotation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalRotation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalRotation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NodalRotation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NodalRotation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NodalRotation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NodalRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NodalRotation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NodalRotation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NodalRotation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NodalRotation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NodalRotation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NodalRotation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NodalRotation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NodalRotation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
