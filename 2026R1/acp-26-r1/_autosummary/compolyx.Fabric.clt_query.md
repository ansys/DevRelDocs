# clt_query

<a id="compolyx.Fabric.clt_query"></a>

## Fabric.clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory:

### Parameters
  - query: Result type.
### Options
  - laminate_properties: Young’s, flexural, and shear moduli of the laminate.
  - polar_properties: E1, E2, and G12 depending on the laminate orientation.
### Example
  ```pycon
  >>> fab.clt_query(query='polar_properties')
  ```
