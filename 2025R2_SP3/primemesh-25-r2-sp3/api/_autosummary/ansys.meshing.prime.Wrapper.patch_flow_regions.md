# patch_flow_regions

<a id="ansys.meshing.prime.Wrapper.patch_flow_regions"></a>

#### Wrapper.patch_flow_regions(live_material_point, params)

Patch flow regions.

Patch flow regions create patching surfaces for regions identified
by dead regions from wrapper patch holes parameters.

* **Parameters:**

  **live_material_point**
  : Name of live material point.

  **params**
  : Parameters to define patch flow regions operation.

* **Returns:**

  [`WrapperPatchFlowRegionsResult`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult)
  : Returns the WrapperPatchFlowRegionsResult.

* **Return type:**

  [`WrapperPatchFlowRegionsResult`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = wrapper.PatchFlowRegions(live_material_point, params)
```

<!-- !! processed by numpydoc !! -->
