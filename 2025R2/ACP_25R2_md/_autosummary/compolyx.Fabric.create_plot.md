# create_plot

<a id="compolyx.Fabric.create_plot"></a>

#### Fabric.create_plot(query={'polar_properties': ['E1', 'G12']})

Generates 2D plots with the results of interest.

* **Parameters:**
  - query: Query arguments.
* **Options:**
  - layup: [‘pp’] Production plies.
  - polar_properties: [‘E1’,’E2’,’G12’] Polar plot of laminate stiffess.
  - text_plot: [`materials`, `angles`, `thicknesses`].
* **Examples:**
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials', 'angles', 'thicknesses']}
  ```
