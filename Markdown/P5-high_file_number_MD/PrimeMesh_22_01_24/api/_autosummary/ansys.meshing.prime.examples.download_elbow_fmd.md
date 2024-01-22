# ansys.meshing.prime.examples.download_elbow_fmd

### ansys.meshing.prime.examples.download_elbow_fmd(destination=None, force=False)

Download the FMD file for the mixing elbow example.

* **Parameters:**
  **destination**
  : Path to which you download the example file. The default
    is `None`, in which case the default path for app data
    is used.

  **force**
  : Option to download the example file. The default is
    `False`, in which case if the example file is cached, it
    is reused.
* **Returns:**
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
