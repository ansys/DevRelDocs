# EarthGravity

### *class* EarthGravity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EarthGravity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#EarthGravity.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EarthGravity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EarthGravity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EarthGravity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EarthGravity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EarthGravity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EarthGravity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EarthGravity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EarthGravity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EarthGravity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EarthGravity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EarthGravity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EarthGravity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EarthGravity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`GeometrySelection`](#EarthGravity.GeometrySelection)                                                                 | Gets the GeometrySelection.                                   |
| [`XComponent`](#EarthGravity.XComponent)                                                                               | Gets the XComponent.                                          |
| [`YComponent`](#EarthGravity.YComponent)                                                                               | Gets the YComponent.                                          |
| [`ZComponent`](#EarthGravity.ZComponent)                                                                               | Gets the ZComponent.                                          |
| [`Direction`](#EarthGravity.Direction)                                                                                 | Gets or sets the Direction.                                   |
| [`Suppressed`](#EarthGravity.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#EarthGravity.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#EarthGravity.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#EarthGravity.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#EarthGravity.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EarthGravity.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EarthGravity.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import EarthGravity
```

## Property detail

### *property* EarthGravity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAccelerationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.GeometrySelection *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Direction *: [Ansys.Mechanical.DataModel.Enums.GravityOrientationType](../../../../Mechanical/DataModel/Enums/GravityOrientationType.md#GravityOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EarthGravity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EarthGravity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EarthGravity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EarthGravity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EarthGravity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EarthGravity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EarthGravity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EarthGravity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EarthGravity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EarthGravity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EarthGravity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EarthGravity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EarthGravity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EarthGravity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EarthGravity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EarthGravity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EarthGravity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
