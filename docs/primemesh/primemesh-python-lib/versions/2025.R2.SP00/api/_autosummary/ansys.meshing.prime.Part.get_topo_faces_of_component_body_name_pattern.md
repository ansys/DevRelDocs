# get_topo_faces_of_component_body_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_faces_of_component_body_name_pattern"></a>

#### Part.get_topo_faces_of_component_body_name_pattern(component_body_name_pattern, type, name_pattern_params)

Gets topoface ids of component or bodies with name matching the given name pattern.

* **Parameters:**

  **component_body_name_pattern**
  : Name pattern to be matched with component or body name.

  **type**
  : Type of query used to match component or body name pattern.

  **name_pattern_params**
  : Name pattern parameters used to match component or body name pattern.


* **Returns:**
  

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the ids of topofaces.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> topo_faces = part.get_topo_faces_of_component_body_name_pattern(
>>>                   component_body_name_pattern = "body*",
>>>                   type = BodyQueryType_All,
>>>                   params = prime.NamePatternParams(model=model))
```

<!-- !! processed by numpydoc !! -->
