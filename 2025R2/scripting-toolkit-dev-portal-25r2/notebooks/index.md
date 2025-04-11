<a id="example-notebooks"></a>

# Example notebooks

The MI Scripting Toolkit documentation includes example notebooks that cover key features of the Python interface. These are
available as HTML reference documents, Jupyter Notebook files, and Python scripts.

To install additional third-party dependencies required to run these notebooks, see [pip extras](../getting_started/pip.md#pip-extras) and
[Additional conda dependencies](../getting_started/conda.md#conda-extras).

<a id="pygranta-dependencies"></a>

## PyGranta dependencies

The following notebooks also depend on additional PyGranta packages:

* [RecordLists and MI Scripting Toolkit](../samples/streamlined/18_Record_Lists_Interoperability.md) requires `ansys-grantami-recordlists`.
* [JobQueue and MI Scripting Toolkit](../samples/streamlined/19_Job_Queue_Interoperability.md)  requires `ansys-grantami-jobqueue`.

Minor versions of these packages are typically compatible with a single version of Granta MI only,
so they are not provided as part of the `[notebooks]` extra described above. To easily identify the
correct package version for your version of Granta MI, the [PyGranta](https://pypi.org/project/pygranta/) meta-package can be used. For
example, installing `pygranta` v2024.2 will also install versions of `ansys-grantami-recordlists`
and `ansys-grantami-jobqueue` that are compatible with Granta MI 2024 R2.

The [Package versions](https://grantami.docs.pyansys.com/version/dev/package_versions.html)
section of the PyGranta documentation describes which versions of packages are installed with each version of the
metapackage.

<a id="database-compatibility"></a>

## Database compatibility

These notebooks have been tested against the latest version of the MI Training database at the time of release.
Every effort has been made to ensure the notebooks will execute without exceptions, even if they are run multiple times
in succession by multiple users.

However, it is possible that changes made as a result of other training activities could result in these notebooks
exhibiting unexpected behavior. If this happens, please try restoring a fresh copy of the MI Training database.
