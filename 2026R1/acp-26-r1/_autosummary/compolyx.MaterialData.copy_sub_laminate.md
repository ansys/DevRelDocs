# copy_sub_laminate

<a id="compolyx.MaterialData.copy_sub_laminate"></a>

#### MaterialData.copy_sub_laminate(source, on_duplicate_name='keep_both', memo=None)

Copy a sublaminate.

### Parameters:
  - source: Source object to copy.
  - on_duplicate_name: Action to take if source.name is already contained in self.sub_laminates.
    - keep_both: Create a new instance with the same name (different ID).
    - overwrite: Replace first instance with equal name in self with source.
    - keep_existing: Ignore copy action. Returns first existing instance in self with equal name.
  - memo: A dict to collect copied items.
### Returns:
  New instance of sublaminate.
