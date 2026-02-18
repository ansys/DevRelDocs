# ComponentChildrenResults

<a id="ansys.meshing.prime.ComponentChildrenResults"></a>

### *class* ansys.meshing.prime.ComponentChildrenResults(model=None, component_ids=None, component_names=None, body_ids=None, body_names=None, json_data=None, \*\*kwargs)

Results associated with querying child components.

* **Parameters:**

  **model: Model**
  : Model to create a `ComponentChildrenResults` object with default parameters.

  **component_ids: Iterable[int], optional**
  : Ids of components that are queried.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **component_names: List[str], optional**
  : Names of components that are queried.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **body_ids: Iterable[int], optional**
  : Ids of bodies that are queried.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **body_names: List[str], optional**
  : Names of bodies that are queried.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ComponentChildrenResults` object with provided parameters.

### Examples

```pycon
>>> component_children_results = prime.ComponentChildrenResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ComponentChildrenResults.print_default`](ansys.meshing.prime.ComponentChildrenResults.print_default.md#ansys.meshing.prime.ComponentChildrenResults.print_default)()   | Print the default values of `ComponentChildrenResults` object.   |
| [`ComponentChildrenResults.set_default`](ansys.meshing.prime.ComponentChildrenResults.set_default.md#ansys.meshing.prime.ComponentChildrenResults.set_default)([...])    | Set the default values of the `ComponentChildrenResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| [`ComponentChildrenResults.body_ids`](ansys.meshing.prime.ComponentChildrenResults.body_ids.md#ansys.meshing.prime.ComponentChildrenResults.body_ids)                      | Ids of bodies that are queried.       |
| [`ComponentChildrenResults.body_names`](ansys.meshing.prime.ComponentChildrenResults.body_names.md#ansys.meshing.prime.ComponentChildrenResults.body_names)                | Names of bodies that are queried.     |
| [`ComponentChildrenResults.component_ids`](ansys.meshing.prime.ComponentChildrenResults.component_ids.md#ansys.meshing.prime.ComponentChildrenResults.component_ids)       | Ids of components that are queried.   |
| [`ComponentChildrenResults.component_names`](ansys.meshing.prime.ComponentChildrenResults.component_names.md#ansys.meshing.prime.ComponentChildrenResults.component_names) | Names of components that are queried. |
<!-- vale on -->