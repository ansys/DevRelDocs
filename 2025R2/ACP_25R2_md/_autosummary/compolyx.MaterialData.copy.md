# copy

<a id="compolyx.MaterialData.copy"></a>

#### MaterialData.copy(source, on_duplicate_name='keep_both')

Copy a list of material data source. Keeps track of all dependencies.

* **Parameters:**
  - source: A list of source of copy.
  - on_duplicate_name: Action to take if source.name is already contained in self.fabrics.
    - keep_both: Create a new instance with the same name (different ID).
    - overwrite: Replace first instance with equal name in self with source.
    - keep_existing: Ignore copy action, returns first existing instance in self with equal name.
