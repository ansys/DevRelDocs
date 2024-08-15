# `GeometryRayCastSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Selection.GeometryRayCastSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

GeometryRayCastSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|---------------|---------------------------------------------------------------------|
| `HitFaces`    | Specifies whether ray casting should hit faces.                     |
| `HitEdges`    | Specifies whether ray casting should hit edges.                     |
| `HitVertices` | Specifies whether ray casting should hit vertices.                  |
| `HitBodies`   | Specifies whether ray casting should hit bodies.                    |
| `MaxHits`     | Specifies maximum number of ray casting hits.                       |
| `CastRadius`  | Optional; specifies maximum radial distance from BoundVector.       |
| `CastLength`  | Optional; specifies maximum axial distance from BoundVector origin. |

<a id="property-detail"></a>

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

