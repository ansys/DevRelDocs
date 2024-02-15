# ConstructionPoint

### *class* ConstructionPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ConstructionPoint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SetLocation`](#id1)                                                   | Sets the point location.                                                          |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ConstructionPoint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ConstructionPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConstructionPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ConstructionPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ConstructionPoint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ConstructionPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ConstructionPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ConstructionPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstructionPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ConstructionPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ConstructionPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ConstructionPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ConstructionPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ConstructionPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LocationX`](#ConstructionPoint.LocationX)                                                                         | Gets or sets the LocationX.                                   |
| [`LocationY`](#ConstructionPoint.LocationY)                                                                         | Gets or sets the LocationY.                                   |
| [`LocationZ`](#ConstructionPoint.LocationZ)                                                                         | Gets or sets the LocationZ.                                   |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ConstructionPoint.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#ConstructionPoint.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#ConstructionPoint.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#ConstructionPoint.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConstructionPoint.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConstructionPoint.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

### Attributes

| [`SetLocation`](#id1)   |    |
|-------------------------|----|

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ConstructionPoint
```

## Property detail

### *property* ConstructionPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionPointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.LocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationX.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.LocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationY.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.LocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZ.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Attribute detail

### ConstructionPoint.SetLocation

## Method detail

### ConstructionPoint.SetLocation(newvalue: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None))

Sets the point location.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ConstructionPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
