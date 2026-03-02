# write_boundaries

<a id="compolyx.AnalysisPly.write_boundaries"></a>

## AnalysisPly.write_boundaries(filename, format=None, offset_type='no_offset', with_direction_arrows=False, arrow_length=None, arrow_type='standard_arrow')

Writes boundaries in IGES/STEP format.

### Parameters
  - filename: Output file.
  - format: ‘iges’, ‘step’, None (automatic format recognition).
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.
  - with_direction_arrows: The element directions should be written to.
  - arrow_length: Length of the direction arrows (default is average element edge size).
  - arrow_type: Type to be used as arrows (‘standard_arrow’ (default), ‘no_arrow’, ‘half_arrow’).
