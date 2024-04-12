<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Selection"></a>

<a id="the-selection-package"></a>

# The `Selection` package

<a id="summary"></a>

## Summary

### Classes

| [`GeometryRayCastHit`](GeometryRayCastHit.md#GeometryRayCastHit)                | GeometryRayCastHit, contains geoEntity and vector normal   |
|---------------------------------------------------------------------------------|------------------------------------------------------------|
| [`GeometryRayCastSettings`](GeometryRayCastSettings.md#GeometryRayCastSettings) | GeometryRayCastSettings class.                             |
| [`SelectionHelper`](SelectionHelper.md#SelectionHelper)                         | SelectionHelper class.                                     |

<a id="description"></a>

## Description

Selection subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Selection.GeometryRayCastHit"></a>

### *class* Selection.GeometryRayCastHit

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> GeometryRayCastHit, contains geoEntity and vector normal

> <!-- !! processed by numpydoc !! -->

### Properties

| [`HitVector`](#Selection.HitVector)   | BoundVector with location and normal direction on geometry entity to ray cast   |
|---------------------------------------|---------------------------------------------------------------------------------|
| [`Entity`](#Selection.Entity)         | Geometry entity hit by ray cast                                                 |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Selection import GeometryRayCastHit
```

<a id="property-detail"></a>

## Property detail

<a id="Selection.HitVector"></a>

### *property* Selection.HitVector *: [Ansys.Mechanical.Math.BoundVector](../Math/BoundVector.md#BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundVector with location and normal direction on geometry entity to ray cast

<!-- !! processed by numpydoc !! -->

<a id="Selection.Entity"></a>

### *property* Selection.Entity *: Ansys.ACT.Interfaces.Geometry.IGeoEntity | [None](https://docs.python.org/3/library/constants.html#None)*

Geometry entity hit by ray cast

<!-- !! processed by numpydoc !! -->

<a id="Selection.GeometryRayCastSettings"></a>

### *class* Selection.GeometryRayCastSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> GeometryRayCastSettings class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`HitFaces`](#Selection.HitFaces)       | Specifies whether ray casting should hit faces.                     |
|-----------------------------------------|---------------------------------------------------------------------|
| [`HitEdges`](#Selection.HitEdges)       | Specifies whether ray casting should hit edges.                     |
| [`HitVertices`](#Selection.HitVertices) | Specifies whether ray casting should hit vertices.                  |
| [`HitBodies`](#Selection.HitBodies)     | Specifies whether ray casting should hit bodies.                    |
| [`MaxHits`](#Selection.MaxHits)         | Specifies maximum number of ray casting hits.                       |
| [`CastRadius`](#Selection.CastRadius)   | Optional; specifies maximum radial distance from BoundVector.       |
| [`CastLength`](#Selection.CastLength)   | Optional; specifies maximum axial distance from BoundVector origin. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Selection import GeometryRayCastSettings
```

<a id="id2"></a>

## Property detail

<a id="Selection.HitFaces"></a>

### *property* Selection.HitFaces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit faces.
Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="Selection.HitEdges"></a>

### *property* Selection.HitEdges *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit edges.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="Selection.HitVertices"></a>

### *property* Selection.HitVertices *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit vertices.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="Selection.HitBodies"></a>

### *property* Selection.HitBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether ray casting should hit bodies.
Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="Selection.MaxHits"></a>

### *property* Selection.MaxHits *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies maximum number of ray casting hits.
Defaults to 1000.

<!-- !! processed by numpydoc !! -->

<a id="Selection.CastRadius"></a>

### *property* Selection.CastRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum radial distance from BoundVector.

<!-- !! processed by numpydoc !! -->

<a id="Selection.CastLength"></a>

### *property* Selection.CastLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Optional; specifies maximum axial distance from BoundVector origin.
Defaults to maximum needed length.

<!-- !! processed by numpydoc !! -->

<a id="Selection.SelectionHelper"></a>

### *class* Selection.SelectionHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SelectionHelper class.

> <!-- !! processed by numpydoc !! -->

### Constructors

| [`CreateVector3D`](#Selection.CreateVector3D)       | Creates a Vector3D object based on the given selection and reverse flag.                               |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`CastRayOnGeometry`](#Selection.CastRayOnGeometry) | Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Selection import SelectionHelper
```

<a id="method-detail"></a>

## Method detail

<a id="Selection.CreateVector3D"></a>

### *classmethod* Selection.CreateVector3D(selection: Ansys.ACT.Interfaces.Common.ISelectionInfo, reversed: System.Boolean)

Creates a Vector3D object based on the given selection and reverse flag.
: The direction is computed as the outward normal of a planar face, the direction between
  two nodes or vertices from the first to the second, or the axis of an edge.
  The reversed flag will return the opposite of the computed direction.

<!-- !! processed by numpydoc !! -->

<a id="Selection.CastRayOnGeometry"></a>

### *classmethod* Selection.CastRayOnGeometry(castVector: [Ansys.Mechanical.Math.BoundVector](../Math/BoundVector.md#BoundVector), settings: [Ansys.Mechanical.Selection.GeometryRayCastSettings](GeometryRayCastSettings.md#GeometryRayCastSettings))

Finds geometry entities intersecting input BoundVector and returns them in list of GeometryRayCastHit.
These are returned in the order they are hit, each item containing the entity and BoundVector normal to point hit.

<!-- !! processed by numpydoc !! -->
