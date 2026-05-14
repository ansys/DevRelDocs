# download_test_examples

<a id="ansys.meshing.prime.examples.download_test_examples"></a>

### ansys.meshing.prime.examples.download_test_examples(destination=None, force=False)

Download the example files necessary for unit testing.

* **Parameters:**

  **destination**
  : Path to download the test example files to. The default
    is `None`, in which case the default path for app data
    is used.

  **force**
  : Whether to always download the test example files. The default is
    `False`, in which case if the test example files are cached, they
    are reused.

* **Returns:**
  

  `List`[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str)]
  : Local paths to the downloaded test example files.

* **Return type:**

  [`Union`](https://docs.python.org/3.11/library/typing.html#typing.Union)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str), [`PathLike`](https://docs.python.org/3.11/library/os.html#os.PathLike)]

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> import ansys.meshing.prime.examples as prime_examples
>>> with prime.launch_prime() as session:
>>>     model = session.model
>>>     examples = prime_examples.unit_test_examples.download_test_examples()
```

<!-- !! processed by numpydoc !! -->
