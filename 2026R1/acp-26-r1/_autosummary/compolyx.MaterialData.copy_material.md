# copy_material

<a id="compolyx.MaterialData.copy_material"></a>

#### MaterialData.copy_material(source, on_duplicate_name='keep_both', memo=None)

Copy a material

* **Parameters:**
  - source: Source object to copy.
  - on_duplicate_name: Action to take if source.name is already contained in self.materials.
    - keep_both: Create a new instance with the same name (different ID).
    - overwrite: Replace first instance with equal name in self with source.
    - keep_existing: Ignore copy action. Returns first existing instance in self with equal name.
  - memo: A dict to collect copied items (for internal dependency tracking when copying stackups or sublaminates).
* **Returns:**
  New instance of material.
