# refine_at_contacts

<a id="ansys.meshing.prime.SurfaceUtilities.refine_at_contacts"></a>

#### SurfaceUtilities.refine_at_contacts(part_ids, params)

Refine face elements in contact with other parts.

* **Parameters:**

  **part_ids**
  : Input part ids.

  **params**
  : Parameters to refine at contacts.

* **Returns:**

  [`RefineAtContactsResults`](ansys.meshing.prime.RefineAtContactsResults.md#ansys.meshing.prime.RefineAtContactsResults)
  : Returns the RefineAtContactsResults.

* **Return type:**

  [`RefineAtContactsResults`](ansys.meshing.prime.RefineAtContactsResults.md#ansys.meshing.prime.RefineAtContactsResults)

### Examples

```pycon
>>> params = prime.RefineAtContactsParams(model = model)
>>> result = surf_utils.refine_at_contacts(part_ids, params)
```

<!-- !! processed by numpydoc !! -->
