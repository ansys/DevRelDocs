# reorder_extrusion_guides

<a id="compolyx.SolidModel.reorder_extrusion_guides"></a>

#### SolidModel.reorder_extrusion_guides(source, target, option='after')

Reorders the extrusion guides.

### Parameters:
  - source: Extrusion guide to be reordered.
  - target: Place to put the source.
  - option: Can be ‘after’ or ‘before’. Defines if the source is put before or after the target.
### Usage:
  ```pycon
  >>> sm.reorder_extrusion_guides(source = sm.extrusion_guides['wall'], target=sm.extrusion_guides['leading_edge'], option='after')
  ```
