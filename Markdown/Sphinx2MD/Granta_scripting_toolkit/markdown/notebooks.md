# Example Notebooks

The Scripting Toolkit documentation includes example notebooks that cover key features of the Python interface. These
are available as HTML reference documents, Jupyter Notebook files, and python scripts below:

* [Streamlined API Example Notebooks](stream_example.md)
* [Data Analytics Example Notebooks](data_analytics.md)
* [Foundation API Example Notebooks](foundation_example.md)

## Package Dependencies

These notebooks depend on Python packages in addition to the MI Scripting Toolkit. The list below defines the
requirements for running the notebooks, with version ranges if applicable:

> - pandas <=1.2.2, >=1.5.0
> - scipy
> - matplotlib
> - numpy
> - seaborn
> - packaging
> - ansys-grantami-recordlists

Alternatively, if using pip, these can be installed automatically using the `[notebooks]` extra as follows:

```default
pip install granta_miscriptingtoolkit-3.3.65-py3-none-any.whl[notebooks]
```

If you encounter dependency errors when installing the `[notebooks]` extra, you may need to first upgrade `pip`:

```default
python -m pip install --upgrade pip
```

## Database Compatibility

These notebooks have been tested against the latest version of the MI Training database at the time of release.
Every effort has been made to ensure the notebooks will execute without exceptions, even if they are run multiple times
in succession by multiple users.

However, it is possible that changes made as a result of other training activities could result in these notebooks
exhibiting unexpected behavior. If this happens, please try restoring a fresh copy of the MI Training database.
