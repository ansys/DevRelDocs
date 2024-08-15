# `SelectionHelper`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Selection.SelectionHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

SelectionHelper class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`CreateVector3D`](#SelectionHelper.CreateVector3D)       | Creates a Vector3D object based on the given selection and reverse flag.                               |
| [`CastRayOnGeometry`](#SelectionHelper.CastRayOnGeometry) | Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit. |

<a id="method-detail"></a>

## Method detail

<a id="SelectionHelper.CreateVector3D"></a>

### *classmethod* SelectionHelper.CreateVector3D(selection: Ansys.ACT.Interfaces.Common.ISelectionInfo, reversed: System.Boolean)

* **No-index:**

```text
Creates a Vector3D object based on the given selection and reverse flag.
    The direction is computed as the outward normal of a planar face, the direction between
    two nodes or vertices from the first to the second, or the axis of an edge.
    The reversed flag will return the opposite of the computed direction.
```

<!-- !! processed by numpydoc !! -->

<a id="SelectionHelper.CastRayOnGeometry"></a>

### *classmethod* SelectionHelper.CastRayOnGeometry(castVector: [Ansys.Mechanical.Math.BoundVector](../../../../v241/Ansys/Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Math.BoundVector), settings: [Ansys.Mechanical.Selection.GeometryRayCastSettings](../../../../v241/Ansys/Mechanical/Selection/GeometryRayCastSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Selection.GeometryRayCastSettings))

* **No-index:**

```text
Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit.
These are returned in the order they are hit, each item containing the entity and BoundVector normal to point hit.
```

<!-- !! processed by numpydoc !! -->

