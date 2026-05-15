# reorder_modeling_groups

<a id="compolyx.Model.reorder_modeling_groups"></a>

## Model.reorder_modeling_groups(source=[], target=None, option='after')

Reorders the modeling groups by placing source before or after the target.

### Parameters
  - source: List of modeling groups to insert at the new position.
  - target: A modeling group which defines the position to insert the source.
  - option: Whether to insert the source before or after the target.
### Usage
  ```pycon
  >>> model.reorder_modeling_groups(source=[modelmodeling_groups['DECK']], target=modelmodeling_groups['HULL'], option='before')
  ```
