# set_global_sizing_params

<a id="ansys.meshing.prime.Model.set_global_sizing_params"></a>

#### Model.set_global_sizing_params(params)

Set global sizing parameters.

* **Parameters:**

  **params**
  : Global sizing parameters for initializing surfer parameters and
    various size control parameters.

### Examples

```pycon
>>> model = client.model
>>> model.set_global_sizing_params(GlobalSizingParams(model=model,
...                                          min=0.1,
...                                          max=1.0,
...                                          growth_rate=1.2))
```

<!-- !! processed by numpydoc !! -->



