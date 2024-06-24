# ansys.meshing.prime.examples.download_multi_layer_quad_mesh_pcb_pmdb

<a id="ansys.meshing.prime.examples.download_multi_layer_quad_mesh_pcb_pmdb"></a>

### ansys.meshing.prime.examples.download_multi_layer_quad_mesh_pcb_pmdb(destination=None, force=False)

Download the file for the multi layer PCB meshin tutorial in .pmdb format.

* **Parameters:**
  **destination: Optional[str]**
  : Destination for the file to be downloaded.
    If nothing is provided, the default path in app data is used.

  **force: bool**
  : Option to download the file.
    If true, the file is always downloaded.
    If false, an existing file in the cache may be reused.
* **Returns:**
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
>>>     cad_file = prime_examples.download_multi_layer_quad_mesh_pcb_pmdb()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(cad_file, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->
