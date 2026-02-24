# create_plot

<a id="compolyx.SubLaminate.create_plot"></a>

#### SubLaminate.create_plot(query={'layup': ['mp', 'pp', 'ap'], 'polar_properties': ['E1', 'G12']}, core_scale_factor=None)

Generates 2D plots with the results of interest.

* **Parameters:**
  - query: Query parameters.
  - core_scale_factor: Scale core thickness by this value.
* **Options:**
  - layup: [‘mp’, ‘pp’, ‘ap’] modeling ply, production plies and analysis plies.
  - polar_properties: [‘E1’,’E2’,’G12’] Polar plot of laminate stiffesses.
  - text_plot: [‘materials’,’thicknesses’,’angles’] Text plot shown in the layup plot.
* **Example:**
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials']}
  ```
