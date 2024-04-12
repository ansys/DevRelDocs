<a id="iqueries"></a>

# IQueries

<a id="IQueries"></a>

### *class* IQueries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available queries on the geometry.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Clash`](#IQueries.Clash)             | Clash method.                                     |
|----------------------------------------|---------------------------------------------------|
| [`Distance`](#IQueries.Distance)       | Distance method.                                  |
| [`Coincidence`](#IQueries.Coincidence) | Checks if 2 geometry entities are coincident.     |
| [`Containment`](#IQueries.Containment) | Checks if one geometry entity contains one other. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IQueries
```

<a id="method-detail"></a>

## Method detail

<a id="IQueries.Clash"></a>

### IQueries.Clash(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Clash method.

<!-- !! processed by numpydoc !! -->

<a id="IQueries.Distance"></a>

### IQueries.Distance(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Distance method.

<!-- !! processed by numpydoc !! -->

<a id="IQueries.Coincidence"></a>

### IQueries.Coincidence(first: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), second: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if 2 geometry entities are coincident.

<!-- !! processed by numpydoc !! -->

<a id="IQueries.Containment"></a>

### IQueries.Containment(bigOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), smallOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if one geometry entity contains one other.

<!-- !! processed by numpydoc !! -->
