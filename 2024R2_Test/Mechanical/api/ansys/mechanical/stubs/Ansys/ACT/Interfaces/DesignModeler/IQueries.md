# IQueries

### *class* IQueries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available queries on the geometry.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Clash`](#IQueries.Clash)             | Clash method.                                     |
|----------------------------------------|---------------------------------------------------|
| [`Distance`](#IQueries.Distance)       | Distance method.                                  |
| [`Coincidence`](#IQueries.Coincidence) | Checks if 2 geometry entities are coincident.     |
| [`Containment`](#IQueries.Containment) | Checks if one geometry entity contains one other. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IQueries
```

## Method detail

### IQueries.Clash(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Clash method.

<!-- !! processed by numpydoc !! -->

### IQueries.Distance(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Distance method.

<!-- !! processed by numpydoc !! -->

### IQueries.Coincidence(first: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), second: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if 2 geometry entities are coincident.

<!-- !! processed by numpydoc !! -->

### IQueries.Containment(bigOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), smallOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if one geometry entity contains one other.

<!-- !! processed by numpydoc !! -->
