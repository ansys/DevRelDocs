# set_working_directory

<a id="ansys.meshing.prime.Model.set_working_directory"></a>

#### Model.set_working_directory(path)

Set working directory.

Set the working directory to be considered for file i/o when the file paths are relative.

* **Parameters:**

  **path**
  : Path to the directory.

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> client = prime.launch_prime()
>>> model = client.model
>>> zones = model.set_working_directory("C:/input_files")
```

<!-- !! processed by numpydoc !! -->
