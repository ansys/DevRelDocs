# ansys.meshing.prime.Model.python_logger

<a id="ansys.meshing.prime.Model.python_logger"></a>

#### *property* Model.python_logger

Get python standard logger from PyPrimeMesh’s logger instance.

PyPrimeMesh’s python standard logger instance can be used to control
the verbosity of messages printed by PyPrimeMesh and more.

* **Returns:**

  [`logging.Logger`](https://docs.python.org/3.11/library/logging.html#logging.Logger)
  : PyPrimeMesh’s python standard logger instance.

### Examples

Set log level to debug.

```pycon
>>> model.python_logger.setLevel(logging.DEBUG)
```

<!-- !! processed by numpydoc !! -->
