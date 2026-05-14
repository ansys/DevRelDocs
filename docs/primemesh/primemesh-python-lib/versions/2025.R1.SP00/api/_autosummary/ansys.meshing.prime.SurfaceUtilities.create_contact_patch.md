# create_contact_patch

<a id="ansys.meshing.prime.SurfaceUtilities.create_contact_patch"></a>

#### SurfaceUtilities.create_contact_patch(source_zonelets, target_zonelets, params)

Create a contact patch by offsetting the target zonelets.

* **Parameters:**

  **source_zonelets**
  : IDS for the source face zonelets.

  **target_zonelets**
  : IDs for the target face zonelets.

  **params**
  : Parameters for controlling the contact patch creation.

* **Returns:**

  [`CreateContactPatchResults`](ansys.meshing.prime.CreateContactPatchResults.md#ansys.meshing.prime.CreateContactPatchResults)
  : Results from creating the contact patch.

* **Return type:**

  [`CreateContactPatchResults`](ansys.meshing.prime.CreateContactPatchResults.md#ansys.meshing.prime.CreateContactPatchResults)

### Examples

```pycon
>>> result = surf_utils.create_contact_patch(zonelets, params)
```

<!-- !! processed by numpydoc !! -->
