# clt_query

<a id="compolyx.SamplingPoint.clt_query"></a>

## SamplingPoint.clt_query(query='layup', offset_is_middle=True, consider_coupling_effect=True)

Returns the properties of the classical laminate theory:

### Parameters
  - query: Query parameter (see below).
  - offset_is_middle: Whether to offset the reference surface to the mid-plane of the laminate. This has an influence on the laminate stiffness calculations.
  - consider_coupling_effect: Whether to consider the coupling effect or not (B-Matrix). It’s only of relevance for the laminate engineering constants.
### Options
  - layup: Returns the layup of the laminate (modeling, production, and analysis plies). This is the default.
  - laminate_properties: Young’s, flexural, and shear moduli of the laminate.
  - polar_properties: E1, E2, and G12 depending on the laminate orientation.
  - text_labels: Returns a list with the material names, angles, and thicknesses.
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD).
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD).
  - laminate_forces: Returns a dict with the laminate forces Nx, Ny, Nxy, Mx, My, Mxy, Qx, and Qy. Offset is middle is always true for this evaluation.

Usage:
: ```pycon
  >>> se.clt_query(query='polar_properties')
  ```
