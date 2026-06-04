# copy_stackup

<a id="compolyx.MaterialData.copy_stackup"></a>

## MaterialData.copy_stackup(source, on_duplicate_name='keep_both', memo=None)

Copy a stackup.

### Parameters
  - source: Source object to copy.
  - on_duplicate_name: Action to take if source.name is already contained in self.stackups.
    - keep_both: Create a new instance with the same name (different ID).
    - overwrite: Replace first instance with equal name in self with source.
    - keep_existing: Ignore copy action, returns first existing instance in self with equal name.
  - memo: A dict to collect copied items.
### Returns
  New instance of stackup.
