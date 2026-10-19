# `Point`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point"></a>

#### *class* Ansys.Mechanical.DataModel.ConstructionLines.Point

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A point in a ConstructionLine instance, may have an associated edge vertex.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|----------------------------------------------------|-----------------------|
| [`__eq__`](#Point.__eq__)   | op_Equality method.   |
| [`__ne__`](#Point.__ne__)   | op_Inequality method. |

### Methods

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------|
| [`Equals`](#Point.Equals)           | Equals method.                                            |
| [`Equivalent`](#Point.Equivalent)                          | Checks to see if another point is equivalent to this one. |
| [`GetHashCode`](#Point.GetHashCode) | GetHashCode method.                                       |

### Properties

| Name | Description |
|------------------------------------------------------|------------------------------------------------------------------------|
| [`ConstructionLineId`](#Point.ConstructionLineId)    | The ID of the associated ConstructionLine.                             |
| [`Definition`](#Point.Definition)                    | Definition property.                                                   |
| [`IsRepresentation`](#Point.IsRepresentation)        | Check to see if there is a valid entity that this instance represents. |
| [`Location`](#Point.Location) | Get the global location of this point.                                 |
| [`ObjectId`](#Point.ObjectId)                        | Get the ID of the represented entity.                                  |
| [`Type`](#Point.Type)                                | Type property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="Point.ConstructionLineId"></a>

### *property* Point.ConstructionLineId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The ID of the associated ConstructionLine.

<!-- !! processed by numpydoc !! -->

<a id="Point.Definition"></a>

### *property* Point.Definition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Definition property.

<!-- !! processed by numpydoc !! -->

<a id="Point.IsRepresentation"></a>

### *property* Point.IsRepresentation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

<a id="Point.Location"></a>

### *property* Point.Location *: [Ansys.ACT.Core.Math.Point3D](../../../ACT/Core/Math/Point3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Point3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the global location of this point.

<!-- !! processed by numpydoc !! -->

<a id="Point.ObjectId"></a>

### *property* Point.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

<a id="Point.Type"></a>

### *property* Point.Type *: [Ansys.Mechanical.DataModel.ConstructionLines.PointType](PointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.PointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Point.Equals"></a>

### Point.Equals(other: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Point.Equals(obj: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Point.Equals(other: Ansys.Mechanical.DataModel.ConstructionLines.ConstructionLineAssociation) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Point.Equivalent"></a>

### Point.Equivalent(other: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks to see if another point is equivalent to this one.

<!-- !! processed by numpydoc !! -->

<a id="Point.GetHashCode"></a>

### Point.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Point.__eq__"></a>

### *classmethod* Point.\_\_eq_\_(left: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point), right: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Equality method.

<!-- !! processed by numpydoc !! -->

<a id="Point.__ne__"></a>

### *classmethod* Point.\_\_ne_\_(left: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point), right: [Ansys.Mechanical.DataModel.ConstructionLines.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Inequality method.

<!-- !! processed by numpydoc !! -->

