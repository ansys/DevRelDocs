# remove_labels_from_topo_entities

<a id="ansys.meshing.prime.Part.remove_labels_from_topo_entities"></a>

#### Part.remove_labels_from_topo_entities(labels, topo_entities)

Remove the given labels from the provided topoentities.

* **Parameters:**

  **labels**
  : Labels to be removed from topoentities.

  **topo_entities**
  : Ids of topoentities.

* **Returns:**

  [`RemoveLabelResults`](ansys.meshing.prime.RemoveLabelResults.md#ansys.meshing.prime.RemoveLabelResults)
  : Returns the RemoveLabelResults.

* **Return type:**

  [`RemoveLabelResults`](ansys.meshing.prime.RemoveLabelResults.md#ansys.meshing.prime.RemoveLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.remove_labels_from_topo_entities(labels, topo_entities)
```

<!-- !! processed by numpydoc !! -->
