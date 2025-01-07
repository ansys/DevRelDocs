# download_toy_car_fmd

<a id="ansys.meshing.prime.examples.download_toy_car_fmd"></a>

### ansys.meshing.prime.examples.download_toy_car_fmd(destination=None, force=False)

Download the FMD file for the toy car example.

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
>>>     toy_car = prime_examples.download_toy_car_fmd()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(toy_car, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-toy-car-fmd"></a>

## Examples using download_toy_car_fmd

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<!-- thumbnail-parent-div-close --></div>
