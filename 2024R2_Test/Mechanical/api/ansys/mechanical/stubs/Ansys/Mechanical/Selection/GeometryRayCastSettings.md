# GeometryRayCastSettings

### *class* GeometryRayCastSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> GeometryRayCastSettings class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`HitFaces`](#GeometryRayCastSettings.HitFaces)       | Specifies whether ray casting should hit faces.                     |
|-------------------------------------------------------|---------------------------------------------------------------------|
| [`HitEdges`](#GeometryRayCastSettings.HitEdges)       | Specifies whether ray casting should hit edges.                     |
| [`HitVertices`](#GeometryRayCastSettings.HitVertices) | Specifies whether ray casting should hit vertices.                  |
| [`HitBodies`](#GeometryRayCastSettings.HitBodies)     | Specifies whether ray casting should hit bodies.                    |
| [`MaxHits`](#GeometryRayCastSettings.MaxHits)         | Specifies maximum number of ray casting hits.                       |
| [`CastRadius`](#GeometryRayCastSettings.CastRadius)   | Optional; specifies maximum radial distance from BoundVector.       |
| [`CastLength`](#GeometryRayCastSettings.CastLength)   | Optional; specifies maximum axial distance from BoundVector origin. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Selection import GeometryRayCastSettings
```

## Property detail

### *property* GeometryRayCastSettings.HitFaces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit faces.
Defaults to true.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.HitEdges *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit edges.
Defaults to false.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.HitVertices *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit vertices.
Defaults to false.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.HitBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit bodies.
Defaults to false.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.MaxHits *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies maximum number of ray casting hits.
Defaults to 1000.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.CastRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum radial distance from BoundVector.

<!-- !! processed by numpydoc !! -->

### *property* GeometryRayCastSettings.CastLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum axial distance from BoundVector origin.
Defaults to maximum needed length.

<!-- !! processed by numpydoc !! -->
