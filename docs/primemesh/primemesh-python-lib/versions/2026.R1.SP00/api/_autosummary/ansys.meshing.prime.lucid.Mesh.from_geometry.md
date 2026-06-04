# from_geometry

<a id="ansys.meshing.prime.lucid.Mesh.from_geometry"></a>

#### Mesh.from_geometry(design, append=False)

Import geometry from a PyGeometry Design object.

This method exports the Design to a temporary FMD file and imports
it into the model.

**Parameters:**

  **design**

  PyGeometry Design object to import.

  **append**

  Whether to append the imported geometry to the current model.
    The default is `False`.

### Examples

```pycon
>>> from ansys.geometry.core import launch_modeler
>>> modeler = launch_modeler()
>>> design = modeler.create_design("MyDesign")
>>> mesh_util = prime.lucid.Mesh(model=model)
>>> mesh_util.from_geometry(design)
```

<!-- !! processed by numpydoc !! -->
