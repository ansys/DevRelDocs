# LimitBoundary

### *class* LimitBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LimitBoundary.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#LimitBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#LimitBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LimitBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#LimitBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#LimitBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#LimitBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#LimitBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LimitBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LimitBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LimitBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LimitBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LimitBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#LimitBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LimitBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LimitBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LimitBCMax`](#LimitBoundary.LimitBCMax)                                                                              | Gets or sets the LimitBCMax.                                  |
| [`LimitBCMaxX`](#LimitBoundary.LimitBCMaxX)                                                                            | Gets or sets the LimitBCMaxX.                                 |
| [`LimitBCMaxY`](#LimitBoundary.LimitBCMaxY)                                                                            | Gets or sets the LimitBCMaxY.                                 |
| [`LimitBCMaxZ`](#LimitBoundary.LimitBCMaxZ)                                                                            | Gets or sets the LimitBCMaxZ.                                 |
| [`LimitBCMin`](#LimitBoundary.LimitBCMin)                                                                              | Gets or sets the LimitBCMin.                                  |
| [`LimitBCMinX`](#LimitBoundary.LimitBCMinX)                                                                            | Gets or sets the LimitBCMinX.                                 |
| [`LimitBCMinY`](#LimitBoundary.LimitBCMinY)                                                                            | Gets or sets the LimitBCMinY.                                 |
| [`LimitBCMinZ`](#LimitBoundary.LimitBCMinZ)                                                                            | Gets or sets the LimitBCMinZ.                                 |
| [`LimitBCDirection`](../../../../Mechanical/DataModel/Enums/LimitBCDirection.md#LimitBCDirection)                      | Gets or sets the LimitBCDirection.                            |
| [`Location`](#LimitBoundary.Location)                                                                                  | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#LimitBoundary.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#LimitBoundary.SharedRefBody)                                                                        | Gets or sets the SharedRefBody.                               |
| [`Children`](#LimitBoundary.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#LimitBoundary.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#LimitBoundary.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#LimitBoundary.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#LimitBoundary.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LimitBoundary.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LimitBoundary.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import LimitBoundary
```

## Property detail

### *property* LimitBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMax *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMax.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMaxX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxX.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMaxY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxY.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMaxZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxZ.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMin.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMinX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinX.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMinY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinY.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCMinZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinZ.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.LimitBCDirection *: [Ansys.Mechanical.DataModel.Enums.LimitBCDirection](../../../../Mechanical/DataModel/Enums/LimitBCDirection.md#LimitBCDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCDirection.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LimitBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LimitBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LimitBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
