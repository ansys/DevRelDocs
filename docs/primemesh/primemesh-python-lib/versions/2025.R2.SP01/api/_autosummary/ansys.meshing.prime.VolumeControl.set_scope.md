# set_scope

<a id="ansys.meshing.prime.VolumeControl.set_scope"></a>

#### VolumeControl.set_scope(scope)

Sets the scope for volume control to evaluate.

Volume control uses scope to evaluate entities for which volume mesh needs to be generated.

* **Parameters:**

  **scope**
  : ScopeDefinition to scope entities for volume mesh generation.

* **Returns:**

  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)
  : Returns a SetScopeResults.

* **Return type:**

  [`SetScopeResults`](ansys.meshing.prime.SetScopeResults.md#ansys.meshing.prime.SetScopeResults)

### Examples

```pycon
>>> volume_control.set_scope(prime.ScopeDefinition(model=model,
>>>                        entity_type = ScopeEntity.VOLUMES,
>>>                        evaluation_type = ScopeEvaluationType.ZONES,
>>>                        zone_expression = "vol_in"))
```

<!-- !! processed by numpydoc !! -->
