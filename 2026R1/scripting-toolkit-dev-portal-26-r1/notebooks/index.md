# Example notebooks

<a id="example-notebooks"></a>

The MI Scripting Toolkit documentation includes example notebooks that cover key features of the Python interface. These are
available as HTML reference documents, Jupyter Notebook files, and Python scripts.

To install additional third-party dependencies required to run these notebooks, see [pip extras](./../getting_started/pip.md#pip-extras) and
[Additional conda dependencies](./../getting_started/conda.md#conda-extras).

<a id="pygranta-dependencies"></a>

## PyGranta dependencies

The following notebooks also depend on additional PyGranta packages:

* [RecordLists and MI Scripting Toolkit](./../samples/streamlined/18_Record_Lists_Interoperability.md) requires `ansys-grantami-recordlists`.
* [JobQueue and MI Scripting Toolkit](./../samples/streamlined/19_Job_Queue_Interoperability.md)  requires `ansys-grantami-jobqueue`.

PyGranta packages are not included in the `[notebooks]` extra. Use the [PyGranta and Granta MI compatibility](https://grantami.docs.pyansys.com/version/stable/package_versions.html) section of the PyGranta documentation to identify a version of a PyGranta package compatible with
your version of Granta MI.

<a id="database-compatibility"></a>

## Database compatibility

These notebooks have been tested against the latest version of the MI Training database at the time of release.
Every effort has been made to ensure the notebooks will execute without exceptions, even if they are run multiple times
in succession by multiple users.

However, it is possible that changes made as a result of other training activities could result in these notebooks
exhibiting unexpected behavior. If this happens, please try restoring a fresh copy of the MI Training database.
