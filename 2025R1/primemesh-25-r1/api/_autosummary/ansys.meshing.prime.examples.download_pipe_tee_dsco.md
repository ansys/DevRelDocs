# download_pipe_tee_dsco

<a id="ansys.meshing.prime.examples.download_pipe_tee_dsco"></a>

### ansys.meshing.prime.examples.download_pipe_tee_dsco(destination=None, force=False)

Download the DSCO file for the pipe tee example.

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
>>>     pipe_tee = prime_examples.download_pipe_tee_dsco()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.import_cad(pipe_tee, params=prime.ImportCADParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->
