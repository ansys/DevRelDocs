# ansys.meshing.prime.Model.python_logger

#### *property* Model.python_logger

Get PyPrimeMesh’s logger instance.

PyPrimeMesh’s logger instance can be used to control the verbosity
of messages printed by PyPrimeMesh.

* **Returns:**
  [`logging.Logger`](https://docs.python.org/3.11/library/logging.html#logging.Logger)
  : PyPrimeMesh’s logger instance.

### Examples

Set log level to debug.

```pycon
>>> model.python_logger.setLevel(logging.DEBUG)
```

<!-- !! processed by numpydoc !! -->
