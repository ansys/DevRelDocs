# download_elbow_fmd

<a id="ansys.meshing.prime.examples.download_elbow_fmd"></a>

### ansys.meshing.prime.examples.download_elbow_fmd(destination=None, force=False)

Download the FMD file for the mixing elbow example.

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
>>>     elbow = prime_examples.download_elbow_fmd()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(elbow, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-download-elbow-fmd"></a>

## Examples using download_elbow_fmd

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="A block comment must be included at the top of any new example. Each example must have a reference tag in this format:">  <div class="sphx-glr-thumbnail-title">Add a new example</div>
</div>
* [Add a new example](../../examples/gallery_examples/misc/example_template.md#sphx-glr-examples-gallery-examples-misc-example-template-py)

<!-- thumbnail-parent-div-close --></div>
