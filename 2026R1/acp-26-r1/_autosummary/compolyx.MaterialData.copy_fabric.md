# copy_fabric

<a id="compolyx.MaterialData.copy_fabric"></a>

#### MaterialData.copy_fabric(source, on_duplicate_name='keep_both', memo=None)

Copy a fabric

* **Parameters:**
  - source: Source object to copy.
  - on_duplicate_name: Action to take if source.name is already contained in self.fabrics.
    - keep_both: Create a new instance with the same name (different ID).
    - overwrite: Replace first instance with equal name in self with source.
    - keep_existing: Ignore copy action. Returns first existing instance in self with equal name.
  - memo: A dict to collect copied items (for internal dependency tracking when copying stackups or sublaminates).
* **Returns:**
  New Instance of fabric.
