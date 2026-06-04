# clt_query

<a id="compolyx.SubLaminate.clt_query"></a>

#### SubLaminate.clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory.

* **Parameters:**
  - query: Result type.
* **Options:**
  - layup: Return the layup of the laminate.
  - laminate_properties: Young’s, flexural, and shear moduli of the laminate.
  - polar_properties: E1, E2, and G12 depending on the laminate orientation.
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD).
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD).
* **Example:**
  ```pycon
  >>> sub.clt_query(query='layup')
  ```
