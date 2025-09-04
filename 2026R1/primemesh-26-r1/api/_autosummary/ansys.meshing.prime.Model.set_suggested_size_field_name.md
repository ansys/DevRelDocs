# set_suggested_size_field_name

<a id="ansys.meshing.prime.Model.set_suggested_size_field_name"></a>

#### Model.set_suggested_size_field_name(size_field_id, name)

Sets the suggested name of size field with the given id.

* **Parameters:**

  **size_field_id**
  : Size field id.

  **name**
  : Name of the size field.

* **Return type:**

  [`SetNameResults`](ansys.meshing.prime.SetNameResults.md#ansys.meshing.prime.SetNameResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> model = client.model
>>> model.set_suggested_size_field_name(size_field_id, name)
```

<!-- !! processed by numpydoc !! -->
