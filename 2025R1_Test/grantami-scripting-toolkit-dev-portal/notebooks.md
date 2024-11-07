<a id="example-notebooks"></a>

# Example Notebooks

The MI Scripting Toolkit documentation includes example notebooks that cover key features of the Python interface. These
are available as HTML reference documents, Jupyter Notebook files, and python scripts below:

* [Streamlined API Example Notebooks](stream_example.md)
* [Data Analytics Example Notebooks](data_analytics.md)
* [Foundation API Example Notebooks](foundation_example.md)

<a id="package-dependencies"></a>

## Package Dependencies

<a id="third-party-dependencies"></a>

### Third-party Dependencies

These notebooks depend on third-party Python packages in addition to the MI Scripting Toolkit. The list
below defines the requirements for running the notebooks:

- docx2pdf (>=0.1.8,<0.2.0)
- jupyterlab (>=4.0.0,<5.0.0)
- matplotlib (>=3.6.0,<4.0.0)
- numpy (>=2.0.0,<3.0.0)
- pandas (>=2.1,<3.0)
- python-docx (>=1.1.0,<2.0.0)
- python-pptx (>=1.0.0,<2.0.0)
- scipy (>=1.11.0,<2.0.0)
- seaborn (>=0.13,<0.14)
- tqdm[notebook] (>=4.0,<5.0)

Alternatively, if using pip, these can be installed automatically using the `[notebooks]` extra as follows:

```default
pip install GRANTA_MIScriptingToolkit[notebooks] --find-links=./path/to/whl/files
```

If you encounter dependency errors when installing the `[notebooks]` extra, you may need to first upgrade `pip`:

```default
python -m pip install --upgrade pip
```

<a id="pygranta-dependencies"></a>

### PyGranta Dependencies

The following notebooks also depend on additional PyGranta packages:

> * [RecordLists and MI Scripting Toolkit](samples/streamlined/22_Record_Lists_Interoperability.md) requires `ansys-grantami-recordlists`.
> * [JobQueue and MI Scripting Toolkit](samples/streamlined/23_Job_Queue_Interoperability.md)  requires `ansys-grantami-jobqueue`.

Minor versions of these packages are typically compatible with a single version of Granta MI only,
so they are not provided as part of the `[notebooks]` extra described above. To easily identify the
correct package version for your version of Granta MI, the [PyGranta](https://pypi.org/project/pygranta/) meta-package can be used. For
example, installing `pygranta` v2024.2 will also install versions of `ansys-grantami-recordlists`
and `ansys-grantami-jobqueue` that are compatible with Granta MI 2024 R2.

The [Package versions](https://grantami.docs.pyansys.com/version/dev/package_versions.html)
section of the PyGranta documentation describes which versions of packages are installed with each version of the
metapackage.

<a id="database-compatibility"></a>

## Database Compatibility

These notebooks have been tested against the latest version of the MI Training database at the time of release.
Every effort has been made to ensure the notebooks will execute without exceptions, even if they are run multiple times
in succession by multiple users.

However, it is possible that changes made as a result of other training activities could result in these notebooks
exhibiting unexpected behavior. If this happens, please try restoring a fresh copy of the MI Training database.
