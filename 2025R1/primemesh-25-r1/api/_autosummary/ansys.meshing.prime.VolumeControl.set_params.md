# set_params

<a id="ansys.meshing.prime.VolumeControl.set_params"></a>

#### VolumeControl.set_params(volume_control_params)

Sets the volume control parameters.

* **Parameters:**
  **volume_control_params**
  : Parameters to control volume.

### Examples

```pycon
>>> volume_control.set_params(
>>>                  prime.VolumeControlParams(model=model,
>>>                  cell_zonelet_type = prime.CellZoneletType.FLUID))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-volumecontrol-set-params"></a>

## Examples using VolumeControl.set_params

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
