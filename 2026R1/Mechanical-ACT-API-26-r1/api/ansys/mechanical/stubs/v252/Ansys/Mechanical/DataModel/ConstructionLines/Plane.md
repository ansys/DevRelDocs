# `Plane`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Plane"></a>

#### *class* Ansys.Mechanical.DataModel.ConstructionLines.Plane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A 2D sketching planes in a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------|-------------------------------------------------------------|
| [`Equivalent`](#Plane.Equivalent)   | Checks to see if another plane is equivalent to this one.   |

### Properties

| Name | Description |
|-----------------------------------------------------------|------------------------------------------------------------------------|
| [`Definition`](#Plane.Definition)                         | Definition property.                                                   |
| [`IsRepresentation`](#Plane.IsRepresentation)             | Check to see if there is a valid entity that this instance represents. |
| [`Normal`](#Plane.Normal)                                 | The plane’s normal vector (Z axis orientation) orientation.            |
| [`ObjectId`](#Plane.ObjectId)                             | Get the ID of the represented entity.                                  |
| [`Origin`](#Plane.Origin)                                 | The global location of this plane’s origin.                            |
| [`PrimaryAxisDirection`](#Plane.PrimaryAxisDirection)     | The orientation of the plane’s primary (X) axis orientation.           |
| [`SecondaryAxisDirection`](#Plane.SecondaryAxisDirection) | The orientation of the plane’s secondary (Y) axis orientation.         |
| [`Type`](#Plane.Type)                                     | Type property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="Plane.Definition"></a>

### *property* Plane.Definition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Definition property.

<!-- !! processed by numpydoc !! -->

<a id="Plane.IsRepresentation"></a>

### *property* Plane.IsRepresentation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

<a id="Plane.Normal"></a>

### *property* Plane.Normal *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The plane’s normal vector (Z axis orientation) orientation.

<!-- !! processed by numpydoc !! -->

<a id="Plane.ObjectId"></a>

### *property* Plane.ObjectId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

<a id="Plane.Origin"></a>

### *property* Plane.Origin *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The global location of this plane’s origin.

<!-- !! processed by numpydoc !! -->

<a id="Plane.PrimaryAxisDirection"></a>

### *property* Plane.PrimaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s primary (X) axis orientation.

<!-- !! processed by numpydoc !! -->

<a id="Plane.SecondaryAxisDirection"></a>

### *property* Plane.SecondaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s secondary (Y) axis orientation.

<!-- !! processed by numpydoc !! -->

<a id="Plane.Type"></a>

### *property* Plane.Type *: [Ansys.Mechanical.DataModel.ConstructionLines.PlaneType](PlaneType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.PlaneType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Plane.Equivalent"></a>

### Plane.Equivalent(other: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Plane)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Checks to see if another plane is equivalent to this one.

<!-- !! processed by numpydoc !! -->

