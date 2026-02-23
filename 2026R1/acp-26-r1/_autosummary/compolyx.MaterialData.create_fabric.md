# create_fabric

<a id="compolyx.MaterialData.create_fabric"></a>

#### MaterialData.create_fabric(name, id=None, material=None, thickness=0.0, area_price=0.0, ignore_for_postprocessing=False, drop_off_material_handling='Global', cut_off_material_handling='Computed', drop_off_material=None, cut_off_material=None, draping_material_model='woven', draping_ud_coefficient=0.0)

Create a new fabric.

* **Parameters:**
  - name: Name for the fabric.
  - material: Material of the fabric.
  - thickness: Thickness of the fabric.
  - area_price: Area price of the fabric.
  - ignore_for_postprocessing: Flag if this material is postprocessed.
  - drop_off_material_handling: Type defining how drop-off material is used in drop-off areas of the fabric.
  - cut_off_material_handling: Defines how cut‑off material is used in cut‑off areas of the fabric.
  - drop_off_material: Material to use for ‘Custom’ drop-off material handling.
  - cut_off_material: Material to use for ‘Custom’ cut-off material handling.
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’.
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model.
* **Returns:**
  The created fabric.
* **Examples:**
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> fabric_1 = material_data.create_fabric(name='Fabric.1', material=material_data.materials['Material.1'], thickness=0.2)
  ```
