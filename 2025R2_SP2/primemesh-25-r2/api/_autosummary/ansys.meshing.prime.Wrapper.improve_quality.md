# improve_quality

<a id="ansys.meshing.prime.Wrapper.improve_quality"></a>

#### Wrapper.improve_quality(part_id, params)

Improve the surface quality and resolve connectivity issues like intersections, multi, free, spikes, point contacts and so on.

* **Parameters:**

  **part_id**
  : Id of the part.

  **params**
  : Wrapper improve quality parameters.

* **Returns:**

  [`WrapperImproveResult`](ansys.meshing.prime.WrapperImproveResult.md#ansys.meshing.prime.WrapperImproveResult)
  : Return the Wrapper improve result.

* **Return type:**

  [`WrapperImproveResult`](ansys.meshing.prime.WrapperImproveResult.md#ansys.meshing.prime.WrapperImproveResult)

### Examples

```pycon
>>> result = wrapper.improve_quality(part_id, params)
```

<!-- !! processed by numpydoc !! -->
