# MultiZoneEdgeBiasingParams

<a id="ansys.meshing.prime.MultiZoneEdgeBiasingParams"></a>

### *class* ansys.meshing.prime.MultiZoneEdgeBiasingParams(model=None, face_scope=None, edge_scope=None, bias_factor=None, n_divisions=None, json_data=None, \*\*kwargs)

Defines MultiZone edge biasing control parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `MultiZoneEdgeBiasingParams` object with default parameters.

  **face_scope: ScopeDefinition, optional**
  : Reference face zonelets to control mesh clustering orientation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_scope: ScopeDefinition, optional**
  : Edge zonelets to control the expanse of edge biasing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **bias_factor: float, optional**
  : Bias factor used for MultiZone edge biasing control.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_divisions: int, optional**
  : Number of divisions on the section where edge biasing is done.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `MultiZoneEdgeBiasingParams` object with provided parameters.

### Examples

```pycon
>>> multi_zone_edge_biasing_params = prime.MultiZoneEdgeBiasingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`MultiZoneEdgeBiasingParams.print_default`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.print_default.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.print_default)()   | Print the default values of `MultiZoneEdgeBiasingParams` object.   |
| [`MultiZoneEdgeBiasingParams.set_default`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.set_default.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.set_default)([...])    | Set the default values of the `MultiZoneEdgeBiasingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`MultiZoneEdgeBiasingParams.bias_factor`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.bias_factor.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.bias_factor)   | Bias factor used for MultiZone edge biasing control.            |
| [`MultiZoneEdgeBiasingParams.edge_scope`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.edge_scope.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.edge_scope)      | Edge zonelets to control the expanse of edge biasing.           |
| [`MultiZoneEdgeBiasingParams.face_scope`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.face_scope.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.face_scope)      | Reference face zonelets to control mesh clustering orientation. |
| [`MultiZoneEdgeBiasingParams.n_divisions`](ansys.meshing.prime.MultiZoneEdgeBiasingParams.n_divisions.md#ansys.meshing.prime.MultiZoneEdgeBiasingParams.n_divisions)   | Number of divisions on the section where edge biasing is done.  |
<!-- vale on -->