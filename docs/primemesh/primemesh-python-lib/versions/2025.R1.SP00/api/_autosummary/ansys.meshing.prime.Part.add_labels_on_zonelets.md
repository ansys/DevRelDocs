# add_labels_on_zonelets

<a id="ansys.meshing.prime.Part.add_labels_on_zonelets"></a>

#### Part.add_labels_on_zonelets(labels, zonelets)

Add the given labels on the provided zonelets.

* **Parameters:**

  **labels**
  : Labels to be added on zonelets.

  **zonelets**
  : Ids of zonelets.

* **Returns:**

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)
  : Returns the AddLabelResults.

* **Return type:**

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.add_labels_on_zonelets(labels, zonelets)
```

<!-- !! processed by numpydoc !! -->

