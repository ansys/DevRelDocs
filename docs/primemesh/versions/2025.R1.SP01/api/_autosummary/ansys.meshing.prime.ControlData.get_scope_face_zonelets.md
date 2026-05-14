# get_scope_face_zonelets

<a id="ansys.meshing.prime.ControlData.get_scope_face_zonelets"></a>

#### ControlData.get_scope_face_zonelets(scope, params)

Get the face zonelet ids for the given scope.

* **Parameters:**

  **scope**
  : Scope definition to evaluate entities.

  **params**
  : Parameters to scope zonelets.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of face zonelets.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> face_zonelets = model.control_data.get_scope_face_zonelets(
>>>                 prime.ScopeDefinition(model = model,
>>>                 entity_type = prime.ScopeEntity.FACEZONELETS,
>>>                 part_expression = "*"),
>>>                 prime.ScopeZoneletParams(model =model))
```

<!-- !! processed by numpydoc !! -->
