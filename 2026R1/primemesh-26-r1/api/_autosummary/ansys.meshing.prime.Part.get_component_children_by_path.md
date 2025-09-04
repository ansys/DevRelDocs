# get_component_children_by_path

<a id="ansys.meshing.prime.Part.get_component_children_by_path"></a>

#### Part.get_component_children_by_path(path, params)

Gets the child components for a component using the given parameters.

* **Parameters:**

  **path**
  : Path to component for which child components are queried.

  **params**
  : Parameters to get child component.

* **Returns:**

  [`ComponentChildrenResults`](ansys.meshing.prime.ComponentChildrenResults.md#ansys.meshing.prime.ComponentChildrenResults)
  : Returns the ComponentChildrenResults structure.

* **Return type:**

  [`ComponentChildrenResults`](ansys.meshing.prime.ComponentChildrenResults.md#ansys.meshing.prime.ComponentChildrenResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = part.get_component_children_by_path(path, params)
```

<!-- !! processed by numpydoc !! -->
