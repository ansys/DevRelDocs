# DeleteTopoEntitiesParams

<a id="ansys.meshing.prime.DeleteTopoEntitiesParams"></a>

### *class* ansys.meshing.prime.DeleteTopoEntitiesParams(model=None, delete_geom_zonelets=None, delete_mesh_zonelets=None, json_data=None, \*\*kwargs)

Parameters to control delete topoentities.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteTopoEntitiesParams` object with default parameters.

  **delete_geom_zonelets: bool, optional**
  : Option to delete geometry zonelets of topology.

  **delete_mesh_zonelets: bool, optional**
  : Option to delete mesh zonelets of topology.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteTopoEntitiesParams` object with provided parameters.

### Examples

```pycon
>>> delete_topo_entities_params = prime.DeleteTopoEntitiesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`DeleteTopoEntitiesParams.print_default`](ansys.meshing.prime.DeleteTopoEntitiesParams.print_default.md#ansys.meshing.prime.DeleteTopoEntitiesParams.print_default)()   | Print the default values of `DeleteTopoEntitiesParams` object.   |
| [`DeleteTopoEntitiesParams.set_default`](ansys.meshing.prime.DeleteTopoEntitiesParams.set_default.md#ansys.meshing.prime.DeleteTopoEntitiesParams.set_default)([...])    | Set the default values of the `DeleteTopoEntitiesParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`DeleteTopoEntitiesParams.delete_geom_zonelets`](ansys.meshing.prime.DeleteTopoEntitiesParams.delete_geom_zonelets.md#ansys.meshing.prime.DeleteTopoEntitiesParams.delete_geom_zonelets)   | Option to delete geometry zonelets of topology.   |
| [`DeleteTopoEntitiesParams.delete_mesh_zonelets`](ansys.meshing.prime.DeleteTopoEntitiesParams.delete_mesh_zonelets.md#ansys.meshing.prime.DeleteTopoEntitiesParams.delete_mesh_zonelets)   | Option to delete mesh zonelets of topology.       |
<!-- vale on -->