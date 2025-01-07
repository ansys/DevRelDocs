# download_turbine_blade_cdb

<a id="ansys.meshing.prime.examples.download_turbine_blade_cdb"></a>

### ansys.meshing.prime.examples.download_turbine_blade_cdb(destination=None, force=False)

Download the CDB file for the turbine blade example.

* **Return type:**
  [`Union`](https://docs.python.org/3.11/library/typing.html#typing.Union)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str), [`PathLike`](https://docs.python.org/3.11/library/os.html#os.PathLike)]

destination
: Path to download the example file to. The default
  is `None`, in which case the default path for app data
  is used.

force
: Whether to download the example file. The default is
  `False`, in which case if the example file is cached, it
  is reused.

* **Returns:**
  :

  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)
  : Local path to the downloaded example file.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> import ansys.meshing.prime.examples as prime_examples
>>> with prime.launch_prime() as session:
>>>     model = session.model
>>>     turbine_blade_mesh = prime_examples.download_turbine_blade_cdb()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_mapdl_cdb(
>>>             turbine_blade_mesh,
>>>             params=prime.ImportMapdlCdbParams(model),
>>>         )
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-turbine-blade-cdb"></a>

## Examples using download_turbine_blade_cdb

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<!-- thumbnail-parent-div-close --></div>
