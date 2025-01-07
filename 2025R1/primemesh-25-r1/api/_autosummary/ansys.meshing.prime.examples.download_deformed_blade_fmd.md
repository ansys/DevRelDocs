# download_deformed_blade_fmd

<a id="ansys.meshing.prime.examples.download_deformed_blade_fmd"></a>

### ansys.meshing.prime.examples.download_deformed_blade_fmd(destination=None, force=False)

Download the FMD file for the turbine blade example.

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
  : Local path to the downloaded example file.
* **Return type:**
  [`Union`](https://docs.python.org/3.11/library/typing.html#typing.Union)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str), [`PathLike`](https://docs.python.org/3.11/library/os.html#os.PathLike)]

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> import ansys.meshing.prime.examples as prime_examples
>>> with prime.launch_prime() as session:
>>>     model = session.model
>>>     deformed_blade = prime_examples.download_deformed_blade_fmd()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(deformed_blade, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-deformed-blade-fmd"></a>

## Examples using download_deformed_blade_fmd

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<!-- thumbnail-parent-div-close --></div>
