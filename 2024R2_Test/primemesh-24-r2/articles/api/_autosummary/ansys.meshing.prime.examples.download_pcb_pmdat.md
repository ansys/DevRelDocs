# ansys.meshing.prime.examples.download_pcb_pmdat

<a id="ansys.meshing.prime.examples.download_pcb_pmdat"></a>

### ansys.meshing.prime.examples.download_pcb_pmdat(destination=None, force=False)

Download the PMDAT file for the PCB example.

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
>>>     pcb = prime_examples.download_pcb_pmdat()
>>>     with prime.FileIO(model) as io:
>>>         _ = io.read_pmdat(pcb, params=prime.FileReadParams(model))
>>>     print(model)
```

<!-- !! processed by numpydoc !! -->
