# clt_query

<a id="compolyx.Stackup.clt_query"></a>

## Stackup.clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory.

### Parameters
  - query: Query parameters.
### Options
  - layup: Return the layup.
  - laminate_properties: Young’s, flexural, and shear moduli of the laminate.
  - polar_properties: E1, E2, and G12 depending on the laminate orientation.
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD).
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD).
### Example
  ```pycon
  >>> stackup.clt_query(query='laminate_properties')
  ```
