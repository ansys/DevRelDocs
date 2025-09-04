# get_face_zonelets_of_component_body_name_pattern

<a id="ansys.meshing.prime.Part.get_face_zonelets_of_component_body_name_pattern"></a>

#### Part.get_face_zonelets_of_component_body_name_pattern(component_body_name_pattern, type, name_pattern_params)

Gets face zonelet ids belonging to components or bodies with name matching the given name pattern.

* **Parameters:**

  **component_body_name_pattern**
  : Name pattern to be matched with component or body names.

  **type**
  : Type of query used to match component or body name pattern.

  **name_pattern_params**
  : Name pattern parameters used to match component or body name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns face zonelet ids of labels with name matching the name pattern. Returns an empty list for a topology part.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> face_zonelets = part.get_face_zonelets_of_component_body_pattern("/body*", type, name_pattern_params)
```

<!-- !! processed by numpydoc !! -->
