<!-- vale off -->

<a id="splitparams"></a>

# SplitParams

<a id="ansys.meshing.prime.SplitParams"></a>

### *class* ansys.meshing.prime.SplitParams(model=None, split_ratio=None, json_data=None, \*\*kwargs)

Parameters to split face elements at longest edge.

* **Parameters:**
  **model: Model**
  : Model to create a `SplitParams` object with default parameters.

  **split_ratio: float, optional**
  : Minimum ratio of split edge length to original edge length.

  **json_data: dict, optional**
  : JSON dictionary to create a `SplitParams` object with provided parameters.

### Examples

```pycon
>>> split_params = prime.SplitParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| [`SplitParams.print_default`](ansys.meshing.prime.SplitParams.print_default.md#ansys.meshing.prime.SplitParams.print_default)()        | Print the default values of `SplitParams` object.   |
|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`SplitParams.set_default`](ansys.meshing.prime.SplitParams.set_default.md#ansys.meshing.prime.SplitParams.set_default)([split_ratio]) | Set the default values of the `SplitParams` object. |

### Attributes

| [`SplitParams.split_ratio`](ansys.meshing.prime.SplitParams.split_ratio.md#ansys.meshing.prime.SplitParams.split_ratio)   | Minimum ratio of split edge length to original edge length.   |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
<!-- vale on -->
