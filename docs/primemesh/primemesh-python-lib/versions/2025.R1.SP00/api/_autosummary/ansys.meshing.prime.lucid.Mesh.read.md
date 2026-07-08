# read

<a id="ansys.meshing.prime.lucid.Mesh.read"></a>

#### Mesh.read(file_name, append=False, cad_reader_route=None)

Read or import files of different formats based on file extensions.

This method supports reading and importing these file formats:

* Reading PyPrimeMesh’s native PMDAT files
* Importing various types of CAD files
* Importing Fluent Meshing’s MSH files
* Importing Fluent’s CAS files
* Importing MAPDL’s CDB files

* **Parameters:**
  **file_name**
  : Path to the file to read or import.

  **append**
  : Whether to append to the file. The default is `False`, in which case
    : the file is overwritten.

  **cad_reader_route**
  : Route of the CAD reader. The default is `None`.

<!-- !! processed by numpydoc !! -->

