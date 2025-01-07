# download_block_model_fmd

<a id="ansys.meshing.prime.examples.download_block_model_fmd"></a>

### ansys.meshing.prime.examples.download_block_model_fmd(destination=None, force=False)

Download CAD file for the block model example.

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
>>>     block_model = prime_examples.download_block_model_fmd()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(block_model, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-block-model-fmd"></a>

## Examples using download_block_model_fmd

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<!-- thumbnail-parent-div-close --></div>
