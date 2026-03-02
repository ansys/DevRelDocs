# MultiZoneMapMeshParams

<a id="ansys.meshing.prime.MultiZoneMapMeshParams"></a>

### *class* ansys.meshing.prime.MultiZoneMapMeshParams(model=None, scope=None, json_data=None, \*\*kwargs)

Define controlling parameters for the map mesh using MultiZone.

* **Parameters:**

  **model: Model**
  : Model to create a `MultiZoneMapMeshParams` object with default parameters.

  **scope: ScopeDefinition, optional**
  : Scope used for MultiZone map mesh control.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `MultiZoneMapMeshParams` object with provided parameters.

### Examples

```pycon
>>> multi_zone_map_mesh_params = prime.MultiZoneMapMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`MultiZoneMapMeshParams.print_default`](ansys.meshing.prime.MultiZoneMapMeshParams.print_default.md#ansys.meshing.prime.MultiZoneMapMeshParams.print_default)()   | Print the default values of `MultiZoneMapMeshParams` object.   |
| [`MultiZoneMapMeshParams.set_default`](ansys.meshing.prime.MultiZoneMapMeshParams.set_default.md#ansys.meshing.prime.MultiZoneMapMeshParams.set_default)([scope])  | Set the default values of the `MultiZoneMapMeshParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| [`MultiZoneMapMeshParams.scope`](ansys.meshing.prime.MultiZoneMapMeshParams.scope.md#ansys.meshing.prime.MultiZoneMapMeshParams.scope)   | Scope used for MultiZone map mesh control.   |
<!-- vale on -->