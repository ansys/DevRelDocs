# create_plot

<a id="compolyx.Stackup.create_plot"></a>

#### Stackup.create_plot(query={'layup': ['pp', 'ap'], 'polar_properties': ['E1', 'G12']}, core_scale_factor=None)

Generates 2D plots with the results of interest.

### Parameters:
  - query: Query parameters.
  - core_scale_factor: Scale core thickness by this value.
### Options:
  - layup: [‘pp’, ‘ap’] production ply and analysis plies.
  - polar_properties: [‘E1’,’E2’,’G12’] Polar plot of laminate stiffesses.
  - text_plot: [‘materials’,’angles’,’thicknesses’] Property to show as label in the layup plot.
### Examples:
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials']}
  ```
