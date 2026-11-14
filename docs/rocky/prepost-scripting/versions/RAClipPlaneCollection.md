

# RAClipPlaneCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAClipPlaneCollection"></a>

### *class* RAClipPlaneCollection

Rocky PrePost Scripting wrapper for the collection of Clip Planes in a project.

This wrapper corresponds to the “3D Clip Planes” item in the project’s data tree. To retrieve the
[`RAClipPlaneCollection`](#generated.RAClipPlaneCollection) from a [`RAProject`](RAProject.md#generated.RAProject), use:

```python
clip_planes_collection = project.Get3DClipPlanesCollection()
```

**Methods:**

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`CreateClipPlane`](#generated.RAClipPlaneCollection.CreateClipPlane)([name, origin, normal])   | Create a new clip plane with the (optionally) given name, origin and normal.   |
| [`GetClipPlaneByName`](#generated.RAClipPlaneCollection.GetClipPlaneByName)(name)               | Get the clip plane with the given name.                                        |
| [`GetClipPlaneNames`](#generated.RAClipPlaneCollection.GetClipPlaneNames)()                     | Get a list with the name of the clip planes.                                   |
| [`RemoveClipPlane`](#generated.RAClipPlaneCollection.RemoveClipPlane)(clip_plane)               | Removes the given clip plane from the project.                                 |

<a id="generated.RAClipPlaneCollection.CreateClipPlane"></a>

#### CreateClipPlane(name: str | None = None, origin: tuple[float, float, float] | None = None, normal: tuple[float, float, float] | None = None)

Create a new clip plane with the (optionally) given name, origin and normal.
Returns the newly created clip plane.

<a id="generated.RAClipPlaneCollection.GetClipPlaneByName"></a>

#### GetClipPlaneByName(name: str)

Get the clip plane with the given name.

<a id="generated.RAClipPlaneCollection.GetClipPlaneNames"></a>

#### GetClipPlaneNames()

Get a list with the name of the clip planes.

<a id="generated.RAClipPlaneCollection.RemoveClipPlane"></a>

#### RemoveClipPlane(clip_plane: RAClipPlane | str)

Removes the given clip plane from the project.

* **Parameters:**
  **clip_plane** – a RAClipPlane or its name
