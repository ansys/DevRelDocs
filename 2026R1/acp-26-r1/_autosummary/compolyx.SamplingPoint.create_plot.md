# create_plot

<a id="compolyx.SamplingPoint.create_plot"></a>

#### SamplingPoint.create_plot(query={'layup': ['mp'], 'polar_properties': ['E1', 'G12']}, offset_is_middle=True, consider_coupling_effect=True)

Generates 2D plots with the results of interest.

* **Parameters:**
  - query: Query parameter.
  - offset_is_middle: Whether to offset the reference surface to the mid-plane of the laminate. This has an influence on the laminate stiffness calculations.
  - consider_coupling_effect: Whether to consider the coupling effect (B-Matrix). It is only of relevance for the laminate engineering constants.
* **Options:**
  - layup: [‘mp’, ‘pp’, ‘ap’] Modeling plies, production plies, and analysis plies.
  - polar_properties: [‘E1’,’E2’,’G12’] Polar plot of laminate stiffesses.
  - strains: [‘e1’, ‘e2’, ‘e3’, ‘e12’, ‘e13’, ‘e23’, ‘eI’, ‘eII’, ‘eIII’] Strain definition name and component.
  - stresses: [‘s1’, ‘s2’, ‘s3’, ‘s12’, ‘s13’, ‘s23’, ‘sI’, ‘sII’, ‘sIII’] Stress definition name and component.
  - failures: [‘FailureCriteria.1_irf’, ‘FailureCriteria.1_rf’, ‘FailureCriteria.1_mos’, ‘FailureCriteria.1_fm’] Name of FC and value.
  - text_labels: [‘material’, ‘angle’, ‘thickness’]
* **Usage:**
  ```pycon
  >>> se.create_plot(query={layup:['mp'], failure:['FailureCriteria.1_irf']}
  >>> se.graph_plot.x_values
  >>> se.graph_plot.layer_thicknesses
  ```
