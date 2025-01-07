# download_f1_rw_main_plane_stl

<a id="ansys.meshing.prime.examples.download_f1_rw_main_plane_stl"></a>

### ansys.meshing.prime.examples.download_f1_rw_main_plane_stl(destination=None, force=False)

Download STL file for the generic f1 rear wing example.

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
>>>     f1_rw_main_plane = prime_examples.download_f1_rw_main_plane_stl()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(f1_rw_main_plane, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-f1-rw-main-plane-stl"></a>

## Examples using download_f1_rw_main_plane_stl

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
