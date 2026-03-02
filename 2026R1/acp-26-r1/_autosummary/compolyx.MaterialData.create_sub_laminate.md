# create_sub_laminate

<a id="compolyx.MaterialData.create_sub_laminate"></a>

## MaterialData.create_sub_laminate(name, id=None, fabrics=None, symmetry='No Symmetry', layup_sequence='Top-Down')

Create a new sublaminate.

### Parameters
  - name: Name for the sublaminate.
  - fabrics: Fabrics of the sublaminate.
  - symmetry: Symmetry of the sublaminate. Available options: ‘No Symmetry’, ‘Even Symmetry’, and ‘Odd Symmetry’.
  - layup_sequence: Layup sequence of the sublaminate. Available options: ‘Top-Down’ and ‘Bottom-Up’.
### Returns
  The created sublaminate.
### Examples
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> sublaminate_1 = material_data.create_sub_laminate(name='SubLaminate.1', fabrics=(material_data.fabrics['Fabric.1'],material_data.stackups['Stackup.1']))
  ```
