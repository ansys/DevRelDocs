# set_default

<a id="ansys.meshing.prime.MergeZoneletsParams.set_default"></a>

#### *static* MergeZoneletsParams.set_default(merge_small_zonelets_with_neighbors=None, element_count_limit=None)

Set the default values of the `MergeZoneletsParams` object.

* **Parameters:**

  **merge_small_zonelets_with_neighbors: bool, optional**
  : Merge zonelets with element count smaller than the given element count limit to neighboring zonelets sharing manifold face edges. Notes: Works better if zonelets are separated by region.

  **element_count_limit: int, optional**
  : Element count limit to identify small zonelets.

<!-- !! processed by numpydoc !! -->
