# get_scope_parts

<a id="ansys.meshing.prime.ControlData.get_scope_parts"></a>

#### ControlData.get_scope_parts(scope)

Get the part ids for the given scope.

* **Parameters:**

  **scope**
  : Scope definition to evaluate the part ids.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of parts.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> part_ids = model.control_data.get_scope_parts(
>>>                 prime.ScopeDefinition(model = model,
>>>                 part_expression = "*"),
>>>                 prime.ScopeZoneletParams(model =model))
```

<!-- !! processed by numpydoc !! -->
