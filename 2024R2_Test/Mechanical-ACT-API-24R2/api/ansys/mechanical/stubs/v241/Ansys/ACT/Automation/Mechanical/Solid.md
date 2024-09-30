# `Solid`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solid"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solid

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Solid.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Solid.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Solid.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddGeometry`](#Solid.AddGeometry)                         | Add solid to the geometry.                                                        |
| [`CopyTo`](#Solid.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Solid.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Solid.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Solid.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Solid.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Solid.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Solid.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Solid.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Solid.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Solid.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveGeometry`](#Solid.RemoveGeometry)                   | Remove the solid from the geometry.                                               |
| [`RemoveParameter`](#Solid.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`UpdateGeometry`](#Solid.UpdateGeometry)                   | Update the solid on the geometry.                                                 |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Solid.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Solid.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Solid.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Solid.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#Solid.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`PartName`](#Solid.PartName)                               | Gets the PartName.                                            |
| [`Properties`](#Solid.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Solid.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#Solid.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`X1`](#Solid.X1)                                           | Gets or sets the X1.                                          |
| [`X2`](#Solid.X2)                                           | Gets or sets the X2.                                          |
| [`Y1`](#Solid.Y1)                                           | Gets or sets the Y1.                                          |
| [`Y2`](#Solid.Y2)                                           | Gets or sets the Y2.                                          |
| [`Z1`](#Solid.Z1)                                           | Gets or sets the Z1.                                          |
| [`Z2`](#Solid.Z2)                                           | Gets or sets the Z2.                                          |

<a id="property-detail"></a>

## Property detail

<a id="Solid.Children"></a>

### *property* Solid.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Comments"></a>

### *property* Solid.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CoordinateSystem"></a>

### *property* Solid.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Solid.DataModelObjectCategory"></a>

### *property* Solid.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Solid.InternalObject"></a>

### *property* Solid.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolidAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Solid.PartName"></a>

### *property* Solid.PartName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartName.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Properties"></a>

### *property* Solid.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ReadOnly"></a>

### *property* Solid.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Solid.VisibleProperties"></a>

### *property* Solid.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.X1"></a>

### *property* Solid.X1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.X2"></a>

### *property* Solid.X2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X2.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Y1"></a>

### *property* Solid.Y1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Y2"></a>

### *property* Solid.Y2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y2.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Z1"></a>

### *property* Solid.Z1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Z2"></a>

### *property* Solid.Z2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Solid.Activate"></a>

### Solid.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.AddComment"></a>

### Solid.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Solid.AddGeometry"></a>

### Solid.AddGeometry()

Add solid to the geometry.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CopyTo"></a>

### Solid.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CreateParameter"></a>

### Solid.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Delete"></a>

### Solid.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Duplicate"></a>

### Solid.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetChildren"></a>

### Solid.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetParameter"></a>

### Solid.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GroupAllSimilarChildren"></a>

### Solid.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GroupSimilarObjects"></a>

### Solid.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.PropertyByAPIName"></a>

### Solid.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Solid.PropertyByName"></a>

### Solid.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Solid.RemoveGeometry"></a>

### Solid.RemoveGeometry()

Remove the solid from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="Solid.RemoveParameter"></a>

### Solid.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.UpdateGeometry"></a>

### Solid.UpdateGeometry()

Update the solid on the geometry.

<!-- !! processed by numpydoc !! -->

