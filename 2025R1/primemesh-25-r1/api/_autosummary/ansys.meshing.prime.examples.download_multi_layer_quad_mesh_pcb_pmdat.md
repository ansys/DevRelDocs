# download_multi_layer_quad_mesh_pcb_pmdat

<a id="ansys.meshing.prime.examples.download_multi_layer_quad_mesh_pcb_pmdat"></a>

### ansys.meshing.prime.examples.download_multi_layer_quad_mesh_pcb_pmdat(destination=None, force=False)

Download the PMDAT file for the multi-layer PCB meshing example.

* **Parameters:**
  **destination**
  : Path to download the example file to. The default
    is `None`, in which case the default path for app data
    is used.

  **force**
  : Whether to download the example file. The default is
    `False`, in which case if the example file is cached, it
    is reused.
* **Returns:**
  :

  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)
  : Local path to the downloaded file.
* **Return type:**
  [`Union`](https://docs.python.org/3.11/library/typing.html#typing.Union)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str), [`PathLike`](https://docs.python.org/3.11/library/os.html#os.PathLike)]

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> import ansys.meshing.prime.examples as prime_examples
>>> with prime.launch_prime() as session:
>>>     model = session.model
>>>     cad_file = prime_examples.download_multi_layer_quad_mesh_pcb_pmdat()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.read_pmdat(cad_file, params=prime.FileReadParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-multi-layer-quad-mesh-pcb-pmdat"></a>

## Examples using download_multi_layer_quad_mesh_pcb_pmdat

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
