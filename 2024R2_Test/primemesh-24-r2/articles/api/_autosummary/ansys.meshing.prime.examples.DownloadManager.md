# DownloadManager

<a id="ansys.meshing.prime.examples.DownloadManager"></a>

### *class* ansys.meshing.prime.examples.DownloadManager(\*args, \*\*kwargs)

Manages downloads of example files.

Local paths are saved in this class so that a global cleanup
of example files can be performed when the client is closed.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DownloadManager.add_file`](ansys.meshing.prime.examples.DownloadManager.add_file.md#ansys.meshing.prime.examples.DownloadManager.add_file)(file_path)                            | Add the path for a downloaded example file to a list.     |
| [`DownloadManager.clear_download_cache`](ansys.meshing.prime.examples.DownloadManager.clear_download_cache.md#ansys.meshing.prime.examples.DownloadManager.clear_download_cache)() | Remove downloaded example files from the local path.      |
| [`DownloadManager.download_file`](ansys.meshing.prime.examples.DownloadManager.download_file.md#ansys.meshing.prime.examples.DownloadManager.download_file)(filename, ...)         | Download an example file from the PyPrimeMesh repository. |
<!-- vale on -->