# get_zone_name

<a id="ansys.meshing.prime.Model.get_zone_name"></a>

#### Model.get_zone_name(id)

Get the name of given zone.

* **Parameters:**
  **id**
  : Id of zone.
* **Returns:**
  :

  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)
  : Return the zone name. Return empty name if the id is invalid.
* **Return type:**
  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)

### Examples

```pycon
>>> client = prime.launch_prime()
>>> model = client.model
>>> name = model.get_zone_name(id)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-model-get-zone-name"></a>

## Examples using Model.get_zone_name

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
