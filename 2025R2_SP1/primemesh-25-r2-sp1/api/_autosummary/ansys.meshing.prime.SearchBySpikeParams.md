# SearchBySpikeParams

<a id="ansys.meshing.prime.SearchBySpikeParams"></a>

### *class* ansys.meshing.prime.SearchBySpikeParams(model=None, spike_angle=None, json_data=None, \*\*kwargs)

Parameters to control spike detection.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchBySpikeParams` object with default parameters.

  **spike_angle: float, optional**
  : Threshold angle for spike detection.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchBySpikeParams` object with provided parameters.

### Examples

```pycon
>>> search_by_spike_params = prime.SearchBySpikeParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`SearchBySpikeParams.print_default`](ansys.meshing.prime.SearchBySpikeParams.print_default.md#ansys.meshing.prime.SearchBySpikeParams.print_default)()        | Print the default values of `SearchBySpikeParams` object.   |
| [`SearchBySpikeParams.set_default`](ansys.meshing.prime.SearchBySpikeParams.set_default.md#ansys.meshing.prime.SearchBySpikeParams.set_default)([spike_angle]) | Set the default values of the `SearchBySpikeParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| [`SearchBySpikeParams.spike_angle`](ansys.meshing.prime.SearchBySpikeParams.spike_angle.md#ansys.meshing.prime.SearchBySpikeParams.spike_angle)   | Threshold angle for spike detection.   |
<!-- vale on -->