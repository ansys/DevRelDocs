# add_labels_on_topo_entities

<a id="ansys.meshing.prime.Part.add_labels_on_topo_entities"></a>

#### Part.add_labels_on_topo_entities(labels, topo_entities)

Add the given labels on the provided topoentities.

* **Parameters:**

  **labels**
  : Labels to be added on topoentities.

  **topo_entities**
  : Ids of topoentities.

* **Returns:**

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)
  : Returns the AddLabelResults.

* **Return type:**

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.add_labels_on_topo_entities(labels, topo_entities)
```

<!-- !! processed by numpydoc !! -->

