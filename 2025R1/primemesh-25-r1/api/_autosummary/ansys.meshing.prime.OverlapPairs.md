# OverlapPairs

<a id="ansys.meshing.prime.OverlapPairs"></a>

### *class* ansys.meshing.prime.OverlapPairs(model=None, zone_id0=None, zone_id1=None, json_data=None, \*\*kwargs)

Provides ids of a pair of overlapping face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `OverlapPairs` object with default parameters.

  **zone_id0: int, optional**
  : Id of one overlapping face zonelet.

  **zone_id1: int, optional**
  : Id of other overlapping face zonelet.

  **json_data: dict, optional**
  : JSON dictionary to create a `OverlapPairs` object with provided parameters.

### Examples

```pycon
>>> overlap_pairs = prime.OverlapPairs(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`OverlapPairs.print_default`](ansys.meshing.prime.OverlapPairs.print_default.md#ansys.meshing.prime.OverlapPairs.print_default)()               | Print the default values of `OverlapPairs` object.   |
| [`OverlapPairs.set_default`](ansys.meshing.prime.OverlapPairs.set_default.md#ansys.meshing.prime.OverlapPairs.set_default)([zone_id0, zone_id1]) | Set the default values of the `OverlapPairs` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| [`OverlapPairs.zone_id0`](ansys.meshing.prime.OverlapPairs.zone_id0.md#ansys.meshing.prime.OverlapPairs.zone_id0)   | Id of one overlapping face zonelet.   |
| [`OverlapPairs.zone_id1`](ansys.meshing.prime.OverlapPairs.zone_id1.md#ansys.meshing.prime.OverlapPairs.zone_id1)   | Id of other overlapping face zonelet. |
<!-- vale on -->