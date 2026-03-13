# create_stackup

<a id="compolyx.MaterialData.create_stackup"></a>

## MaterialData.create_stackup(name, id=None, fabrics=None, area_price=0.0, symmetry='No Symmetry', layup_sequence='Top-Down', drop_off_material_handling='Global', cut_off_material_handling='Computed', drop_off_material=None, cut_off_material=None, draping_material_model='woven', draping_ud_coefficient=0.0)

Create a new stackup.

### Parameters
  - name: Name for the stackup.
  - fabrics: Fabrics of the stackup.
  - area_price: Area price of the stackup.
  - symmetry: Symmetry of the stackup. Available options: ‘No Symmetry’, ‘Even Symmetry’, and ‘Odd Symmetry’.
  - layup_sequence: Layup sequence of the stackup. Available options: ‘Top-Down’ and ‘Bottom-Up’.
  - drop_off_material_handling: Type defining how drop-off material is used in drop-off areas of the stackup.
  - cut_off_material_handling: Defines how cut‑off material is used in cut‑off areas of the stackup.
  - drop_off_material: Material to use for ‘Custom’ drop-off material handling.
  - cut_off_material: Material to use for ‘Custom’ cut-off material handling.
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’.
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model.
### Returns
  The created stackup.
### Examples
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> stackup_1 = material_data.create_stackup(name='Stackup.1', fabrics=(material_data.fabrics['Fabric.1'],), draping1=0.3, draping2=0.7)
  ```
