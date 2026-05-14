# set_default

<a id="ansys.meshing.prime.CreateBOIParams.set_default"></a>

#### *static* CreateBOIParams.set_default(boi_type=None, perform_initial_wrap=None, wrap_size=None, flow_dir=None, side_scale=None, wake_scale=None, wake_levels=None, suggested_part_name=None, suggested_label_prefix=None, number_of_threads=None)

Set the default values of the `CreateBOIParams` object.

* **Parameters:**

  **boi_type: BOIType, optional**
  : Type of BOI offsetting.

  **perform_initial_wrap: bool, optional**
  : Perform an initial wrap to create a BOI if BOI type is OFFSETSURFACE.

  **wrap_size: float, optional**
  : Set wrap size greater than the largest gap size in the input when performing_initial_wrap is true.

  **flow_dir: FlowDirection, optional**
  : Assigns the offset direction of inflation.

  **side_scale: float, optional**
  : BOI side scaling factor.

  **wake_scale: float, optional**
  : BOI flow direction scaling factor.

  **wake_levels: int, optional**
  : BOI levels.

  **suggested_part_name: str, optional**
  : Suggested part name for created BOI surfaces.

  **suggested_label_prefix: str, optional**
  : Suggested label name for created BOI surfaces.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

<!-- !! processed by numpydoc !! -->
