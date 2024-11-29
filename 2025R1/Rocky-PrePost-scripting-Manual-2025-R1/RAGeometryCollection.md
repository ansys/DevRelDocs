# RAGeometryCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAGeometryCollection"></a>

### *class* RAGeometryCollection

Rocky PrePost Scripting wrapper for the collection of geometries in a project.

The class represents the “Geometries” item on the project data tree. To get the [`RAGeometryCollection`](#generated.RAGeometryCollection)
from a [`RAStudy`](RAStudy.md#generated.RAStudy), use:

```python
geometry_collection = study.GetGeometryCollection()
```

This class contains methods to iterate and retrieve the geometries in a given project, manipulating
the collection as a regular Python list, e.g.:

```python
for geometry in geometry_collection:
    print(geometry.GetName())

feed_conveyor = geometry_collection[1]
inlet = geometry_collection.GetGeometry('Inlet <01>')
```

To create the different kind of geometries (conveyors, inlets and custom geometries), see
[`RAStudy`](RAStudy.md#generated.RAStudy).

**Methods:**

| [`GetBoundingBox`](#generated.RAGeometryCollection.GetBoundingBox)(time_step[, force_load])   | Get the bounding box containing all geometries in this collection, at the given time.                   |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`GetGeometry`](#generated.RAGeometryCollection.GetGeometry)(geometry_name)                   | Get a geometry from its name.                                                                           |
| [`GetGeometryNames`](#generated.RAGeometryCollection.GetGeometryNames)()                      | Get the names of the geometries in this collection.                                                     |
| [`IterInletGeometries`](#generated.RAGeometryCollection.IterInletGeometries)()                | Iterate over the inlet geometries.                                                                      |
| [`IterInputGeometries`](#generated.RAGeometryCollection.IterInputGeometries)()                | Deprecated: Use [`IterInletGeometries()`](#generated.RAGeometryCollection.IterInletGeometries) instead. |
| [`IterSurfaces`](#generated.RAGeometryCollection.IterSurfaces)()                              | Iterate over the surface geometries.                                                                    |
| [`IterSystemCouplingWalls`](#generated.RAGeometryCollection.IterSystemCouplingWalls)()        | Iterate over the System Coupling walls geometries.                                                      |
| [`IterWalls`](#generated.RAGeometryCollection.IterWalls)()                                    | Iterate over the walls geometries.                                                                      |
| [`RemoveGeometry`](#generated.RAGeometryCollection.RemoveGeometry)(geometry)                  | Remove the given geometry from the project.                                                             |

<a id="generated.RAGeometryCollection.GetBoundingBox"></a>

#### GetBoundingBox(time_step: coilib50.time.time_step_interface.ITimeStep | None, force_load: bool = False)

Get the bounding box containing all geometries in this collection, at the given time.

* **Parameters:**
  * **time_step** (*ITimeStep*) – 
  * **force_load** (*bool*) – 
* **Rtype (FixedArray, FixedArray):**
* **Returns:**
  The bounding box of all the geometries in the passed time step, or None if the box
  could not be computed.

<a id="generated.RAGeometryCollection.GetGeometry"></a>

#### GetGeometry(geometry_name)

Get a geometry from its name.

* **Parameters:**
  **geometry_name** (*unicode*) – 

<a id="generated.RAGeometryCollection.GetGeometryNames"></a>

#### GetGeometryNames()

Get the names of the geometries in this collection.

<a id="generated.RAGeometryCollection.IterInletGeometries"></a>

#### IterInletGeometries()

Iterate over the inlet geometries.

<a id="generated.RAGeometryCollection.IterInputGeometries"></a>

#### IterInputGeometries()

Deprecated: Use [`IterInletGeometries()`](#generated.RAGeometryCollection.IterInletGeometries) instead.

<a id="generated.RAGeometryCollection.IterSurfaces"></a>

#### IterSurfaces()

Iterate over the surface geometries.

<a id="generated.RAGeometryCollection.IterSystemCouplingWalls"></a>

#### IterSystemCouplingWalls()

Iterate over the System Coupling walls geometries.

<a id="generated.RAGeometryCollection.IterWalls"></a>

#### IterWalls()

Iterate over the walls geometries.

<a id="generated.RAGeometryCollection.RemoveGeometry"></a>

#### RemoveGeometry(geometry: rocky30.plugins.api.ra_base_geometry.RABaseGeometry | str | None)

Remove the given geometry from the project.
