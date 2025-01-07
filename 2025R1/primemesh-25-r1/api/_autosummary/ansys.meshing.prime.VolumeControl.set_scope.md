# set_scope

<a id="ansys.meshing.prime.VolumeControl.set_scope"></a>

#### VolumeControl.set_scope(scope)

Sets the scope for volume control to evaluate.

Volume control uses scope to evaluate entities for which volume mesh needs to be generated.

* **Parameters:**
  **scope**
  : ScopeDefinition to scope entities for volume mesh generation.
* **Returns:**
  :

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

<a id="examples-using-volumecontrol-set-scope"></a>

## Examples using VolumeControl.set_scope

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
