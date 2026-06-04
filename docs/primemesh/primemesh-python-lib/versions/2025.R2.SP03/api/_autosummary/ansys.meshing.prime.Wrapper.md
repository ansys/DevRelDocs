# Wrapper

<a id="ansys.meshing.prime.Wrapper"></a>

### *class* ansys.meshing.prime.Wrapper(model)

Provides operations for generating a surface mesh using wrapper technology.

* **Parameters:**

  **model**
  : Server model to create Wrapper object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [`Wrapper.close_gaps`](ansys.meshing.prime.Wrapper.close_gaps.md#ansys.meshing.prime.Wrapper.close_gaps)(scope, params)                  | Close gaps.                                                                                                                    |
| [`Wrapper.connect`](ansys.meshing.prime.Wrapper.connect.md#ansys.meshing.prime.Wrapper.connect)(wrapper_part, target_labels, ...)        | Perform a label-controlled connection.                                                                                         |
| [`Wrapper.improve_quality`](ansys.meshing.prime.Wrapper.improve_quality.md#ansys.meshing.prime.Wrapper.improve_quality)(part_id, params) | Improve the surface quality and resolve connectivity issues like intersections, multi, free, spikes, point contacts and so on. |
| [`Wrapper.patch_flow_regions`](ansys.meshing.prime.Wrapper.patch_flow_regions.md#ansys.meshing.prime.Wrapper.patch_flow_regions)(...)    | Patch flow regions.                                                                                                            |
| [`Wrapper.wrap`](ansys.meshing.prime.Wrapper.wrap.md#ansys.meshing.prime.Wrapper.wrap)(wrapper_control_id, params)                       | Perform wrapping with specified controls and given parameters.                                                                 |
<!-- vale on -->