# Plane

### *class* Plane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A 2D sketching planes in a ConstructionLine instance.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Equivalent`](#Plane.Equivalent)   | Checks to see if another plane is equivalent to this one.   |
|-------------------------------------|-------------------------------------------------------------|

### Properties

| [`Type`](#Plane.Type)                                     | Type property.                                                         |
|-----------------------------------------------------------|------------------------------------------------------------------------|
| [`Definition`](#Plane.Definition)                         | Definition property.                                                   |
| [`Origin`](#Plane.Origin)                                 | The global location of this plane’s origin.                            |
| [`PrimaryAxisDirection`](#Plane.PrimaryAxisDirection)     | The orientation of the plane’s primary (X) axis orientation.           |
| [`SecondaryAxisDirection`](#Plane.SecondaryAxisDirection) | The orientation of the plane’s secondary (Y) axis orientation.         |
| [`Normal`](#Plane.Normal)                                 | The plane’s normal vector (Z axis orientation) orientation.            |
| [`ObjectId`](#Plane.ObjectId)                             | Get the ID of the represented entity.                                  |
| [`IsRepresentation`](#Plane.IsRepresentation)             | Check to see if there is a valid entity that this instance represents. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import Plane
```

## Property detail

### *property* Plane.Type *: [Ansys.Mechanical.DataModel.ConstructionLines.PlaneType](PlaneType.md#PlaneType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

### *property* Plane.Definition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Definition property.

<!-- !! processed by numpydoc !! -->

### *property* Plane.Origin *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The global location of this plane’s origin.

<!-- !! processed by numpydoc !! -->

### *property* Plane.PrimaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s primary (X) axis orientation.

<!-- !! processed by numpydoc !! -->

### *property* Plane.SecondaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s secondary (Y) axis orientation.

<!-- !! processed by numpydoc !! -->

### *property* Plane.Normal *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The plane’s normal vector (Z axis orientation) orientation.

<!-- !! processed by numpydoc !! -->

### *property* Plane.ObjectId *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

### *property* Plane.IsRepresentation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

## Method detail

### Plane.Equivalent(other: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](#Plane))

Checks to see if another plane is equivalent to this one.

<!-- !! processed by numpydoc !! -->
