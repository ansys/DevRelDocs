# download_file

#### DownloadManager.download_file(filename, \*directory, destination=None, force=False)

Download an example file from the PyPrimeMesh repository.

* **Parameters:**

  **filename**
  : Name of the example file to download.

  **destination**
  : Path to download the example file to. The default
    is `None`, in which case the default path for app data
    is used.

  **force**
  : Whether to always download the example file. The default is
    `False`, in which case if the example file is cached, it
    is reused.

  **directory**
  : Path under the PyAnsys Github examples repository.

* **Returns:**


  [`tuple`](https://docs.python.org/3.11/library/stdtypes.html#tuple)[[`str`](https://docs.python.org/3.11/library/stdtypes.html#str), [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)]
  : Tuple containing the filepath to use and the local filepath of the downloaded
    directory. The two are different in case of containers.

* **Return type:**

  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)

<!-- !! processed by numpydoc !! -->
