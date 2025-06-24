# `GeometryRayCastSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Selection.GeometryRayCastSettings"></a>

#### *class* Ansys.Mechanical.Selection.GeometryRayCastSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

GeometryRayCastSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------|-----------------------------------------------------------------------|
| [`CastLength`](#GeometryRayCastSettings.CastLength)   | Optional; specifies maximum axial distance from BoundVector origin.   |
| [`CastRadius`](#GeometryRayCastSettings.CastRadius)   | Optional; specifies maximum radial distance from BoundVector.         |
| [`HitBodies`](#GeometryRayCastSettings.HitBodies)     | Specifies whether ray casting should hit bodies.                      |
| [`HitEdges`](#GeometryRayCastSettings.HitEdges)       | Specifies whether ray casting should hit edges.                       |
| [`HitFaces`](#GeometryRayCastSettings.HitFaces)       | Specifies whether ray casting should hit faces.                       |
| [`HitVertices`](#GeometryRayCastSettings.HitVertices) | Specifies whether ray casting should hit vertices.                    |
| [`MaxHits`](#GeometryRayCastSettings.MaxHits)         | Specifies maximum number of ray casting hits.                         |

<a id="property-detail"></a>

## Property detail

<a id="GeometryRayCastSettings.CastLength"></a>

### *property* GeometryRayCastSettings.CastLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum axial distance from BoundVector origin.
Defaults to maximum needed length.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.CastRadius"></a>

### *property* GeometryRayCastSettings.CastRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum radial distance from BoundVector.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.HitBodies"></a>

### *property* GeometryRayCastSettings.HitBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit bodies.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.HitEdges"></a>

### *property* GeometryRayCastSettings.HitEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit edges.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.HitFaces"></a>

### *property* GeometryRayCastSettings.HitFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit faces.
Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.HitVertices"></a>

### *property* GeometryRayCastSettings.HitVertices *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit vertices.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="GeometryRayCastSettings.MaxHits"></a>

### *property* GeometryRayCastSettings.MaxHits *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies maximum number of ray casting hits.
Defaults to 1000.

<!-- !! processed by numpydoc !! -->

