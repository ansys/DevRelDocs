# remove_labels_from_zonelets

<a id="ansys.meshing.prime.Part.remove_labels_from_zonelets"></a>

#### Part.remove_labels_from_zonelets(labels, zonelets)

Remove the given labels from the provided zonelets.

* **Parameters:**

  **labels**
  : Labels to be removed from zonelets.

  **zonelets**
  : Ids of zonelets.

* **Returns:**

  [`RemoveLabelResults`](ansys.meshing.prime.RemoveLabelResults.md#ansys.meshing.prime.RemoveLabelResults)
  : Returns the RemoveLabelResults.

* **Return type:**

  [`RemoveLabelResults`](ansys.meshing.prime.RemoveLabelResults.md#ansys.meshing.prime.RemoveLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.remove_labels_from_zonelets(labels, zonelets)
```

<!-- !! processed by numpydoc !! -->
