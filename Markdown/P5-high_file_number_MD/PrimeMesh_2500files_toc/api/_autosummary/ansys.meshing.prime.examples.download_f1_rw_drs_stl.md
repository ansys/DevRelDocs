# ansys.meshing.prime.examples.download_f1_rw_drs_stl

### ansys.meshing.prime.examples.download_f1_rw_drs_stl(destination=None, force=False)

Download STL file for the generic f1 rear wing example.

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
>>>     f1_rw_drs = prime_examples.download_f1_rw_drs_stl()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.read_pmdat(pcb, params=prime.FileReadParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->
