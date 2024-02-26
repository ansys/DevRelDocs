# RAGeometryCollection

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAGeometryCollection

Rocky API wrapper for the collection of geometries in a project.

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
| [`RemoveGeometry`](#generated.RAGeometryCollection.RemoveGeometry)(geometry)                  | Remove the given geometry from the project.                                                             |

#### GetBoundingBox(time_step: Optional[ITimeStep], force_load: bool = False)

Get the bounding box containing all geometries in this collection, at the given time.

* **Parameters:**
  * **time_step** (*ITimeStep*) – 
  * **force_load** (*bool*) – 
* **Rtype (FixedArray, FixedArray):**
* **Returns:**
  The bounding box of all the geometries in the passed time step, or None if the box
  could not be computed.

#### GetGeometry(geometry_name)

Get a geometry from its name.

* **Parameters:**
  **geometry_name** (*unicode*) – 

#### GetGeometryNames()

Get the names of the geometries in this collection.

#### IterInletGeometries()

Iterate over the inlet geometries.

#### IterInputGeometries()

Deprecated: Use [`IterInletGeometries()`](#generated.RAGeometryCollection.IterInletGeometries) instead.

#### IterSurfaces()

Iterate over the surface geometries.

#### RemoveGeometry(geometry: Optional[Union[RABaseGeometry, str]])

Remove the given geometry from the project.
