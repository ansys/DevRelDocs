# Solid

### *class* Solid

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Solid.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddGeometry`](#Solid.AddGeometry)                         | Add solid to the geometry.                                                        |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`UpdateGeometry`](#Solid.UpdateGeometry)                   | Update the solid on the geometry.                                                 |
| [`RemoveGeometry`](#Solid.RemoveGeometry)                   | Remove the solid from the geometry.                                               |
| [`Delete`](#Solid.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Solid.AddComment)                           | Creates a new child Comment.                                                      |
| [`Activate`](#Solid.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Solid.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Solid.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Solid.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Solid.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Solid.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Solid.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Solid.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Solid.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Solid.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PartName`](#Solid.PartName)                                                                                       | Gets the PartName.                                            |
| [`X1`](#Solid.X1)                                                                                                   | Gets or sets the X1.                                          |
| [`X2`](#Solid.X2)                                                                                                   | Gets or sets the X2.                                          |
| [`Y1`](#Solid.Y1)                                                                                                   | Gets or sets the Y1.                                          |
| [`Y2`](#Solid.Y2)                                                                                                   | Gets or sets the Y2.                                          |
| [`Z1`](#Solid.Z1)                                                                                                   | Gets or sets the Z1.                                          |
| [`Z2`](#Solid.Z2)                                                                                                   | Gets or sets the Z2.                                          |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Solid.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Solid.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`ReadOnly`](#Solid.ReadOnly)                                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Solid.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Solid.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Solid
```

## Property detail

### *property* Solid.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolidAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Solid.PartName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartName.

<!-- !! processed by numpydoc !! -->

### *property* Solid.X1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X1.

<!-- !! processed by numpydoc !! -->

### *property* Solid.X2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X2.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Y1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y1.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Y2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y2.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Z1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z1.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Z2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z2.

<!-- !! processed by numpydoc !! -->

### *property* Solid.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Solid.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Solid.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Solid.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Solid.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Solid.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Solid.AddGeometry()

Add solid to the geometry.

<!-- !! processed by numpydoc !! -->

### Solid.UpdateGeometry()

Update the solid on the geometry.

<!-- !! processed by numpydoc !! -->

### Solid.RemoveGeometry()

Remove the solid from the geometry.

<!-- !! processed by numpydoc !! -->

### Solid.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Solid.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Solid.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Solid.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Solid.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Solid.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Solid.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Solid.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Solid.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Solid.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Solid.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Solid.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Solid.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Solid.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
