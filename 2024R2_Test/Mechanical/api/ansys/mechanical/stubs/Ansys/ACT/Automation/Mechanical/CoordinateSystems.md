# CoordinateSystems

### *class* CoordinateSystems

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CoordinateSystems.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCoordinateSystemAtCenterOfMass`](#CoordinateSystems.AddCoordinateSystemAtCenterOfMass)   | AddCoordinateSystemAtCenterOfMass method.                                         |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCoordinateSystem`](#CoordinateSystems.AddCoordinateSystem)                               | Creates a new CoordinateSystem                                                    |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CoordinateSystems.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#CoordinateSystems.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#CoordinateSystems.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#CoordinateSystems.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#CoordinateSystems.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CoordinateSystems.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CoordinateSystems.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoordinateSystems.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CoordinateSystems.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CoordinateSystems.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#CoordinateSystems.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CoordinateSystems.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CoordinateSystems.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CoordinateSystems.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#CoordinateSystems.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#CoordinateSystems.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#CoordinateSystems.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CoordinateSystems.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CoordinateSystems.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CoordinateSystems
```

## Property detail

### *property* CoordinateSystems.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCoordinateSystemGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CoordinateSystems.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CoordinateSystems.AddCoordinateSystemAtCenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#DistributedMass)])

AddCoordinateSystemAtCenterOfMass method.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.AddCoordinateSystem()

Creates a new CoordinateSystem

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CoordinateSystems.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
