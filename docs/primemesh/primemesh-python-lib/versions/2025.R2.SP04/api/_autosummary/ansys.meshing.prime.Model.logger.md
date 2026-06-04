# ansys.meshing.prime.Model.logger

<a id="ansys.meshing.prime.Model.logger"></a>

#### *property* Model.logger *: PrimeLogger*

Get PyPrimeMesh’s logger instance.

PyPrimeMesh’s logger instance can be used to save the logs to a file,
redirect the logs to the given stream, control the verbosity
of messages printed by PyPrimeMesh and more.

* **Returns:**

  `PrimeLogger`
  : PyPrimeMesh’s logger instance.

### Examples

Save logs to a file.

```pycon
>>> model.logger.add_file_handler(logs_dir=r"./tmp")
```

<!-- !! processed by numpydoc !! -->
