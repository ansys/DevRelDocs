# SelectionHelper

### *class* SelectionHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SelectionHelper class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Constructors

| [`CreateVector3D`](#SelectionHelper.CreateVector3D)       | Creates a Vector3D object based on the given selection and reverse flag.                               |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`CastRayOnGeometry`](#SelectionHelper.CastRayOnGeometry) | Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Selection import SelectionHelper
```

## Method detail

### *classmethod* SelectionHelper.CreateVector3D(selection: Ansys.ACT.Interfaces.Common.ISelectionInfo, reversed: System.Boolean)

Creates a Vector3D object based on the given selection and reverse flag.
: The direction is computed as the outward normal of a planar face, the direction between
  two nodes or vertices from the first to the second, or the axis of an edge.
  The reversed flag will return the opposite of the computed direction.

<!-- !! processed by numpydoc !! -->

### *classmethod* SelectionHelper.CastRayOnGeometry(castVector: [Ansys.Mechanical.Math.BoundVector](../Math/BoundVector.md#BoundVector), settings: [Ansys.Mechanical.Selection.GeometryRayCastSettings](GeometryRayCastSettings.md#GeometryRayCastSettings))

Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit.
These are returned in the order they are hit, each item containing the entity and BoundVector normal to point hit.

<!-- !! processed by numpydoc !! -->
