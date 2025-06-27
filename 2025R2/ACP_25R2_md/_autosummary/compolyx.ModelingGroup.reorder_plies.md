# reorder_plies

<a id="compolyx.ModelingGroup.reorder_plies"></a>

#### ModelingGroup.reorder_plies(source, target, option='after', reverse: bool = False)

Reorder the ply group. Take source plies and insert before/after target ply. If the ModelingGroup itself is
specified as a target, then the modeling plies retain their original global ply number.

* **Parameters:**
  - source: List of plies to insert at new position.
  - target: Position to insert plies. Available options are modeling group and sequence entity.
  - option: Where to insert: `after` (default), `before`, `end` (for SequenceEntity targets), or `keep` (for
     ModelingGroup targets).
      - `after`: Paste right after the target.
      - `before`: Paste right before the target.
      - `end`: Paste at the end of the ModelingGroup containing target.
      - `keep`: Keep the previous global_ply_nr (only works for move, and when target is a ModelingGroup).
  - reverse: If True, reverse the order of imported plies.
