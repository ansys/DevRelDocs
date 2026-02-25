# get_sectional_stiffness_behavior

<a id="compolyx.SectionCut.get_sectional_stiffness_behavior"></a>

#### *static* SectionCut.get_sectional_stiffness_behavior(stiffness_matrix, matrix_format)

Returns the sectional stiffness values for a given matrix.

These are EA, GJ, GAx, GAy, EIx, and EIy. Use get_transformed_sectional_properties_matrix to
transform the stiffness matrix into the desired coordinate system and format.

### Parameters:

- stiffness_matrix: The sectional stiffness matrix.
- matrix_format: The format of the transformed matrix. Valid options: “default” and “ansys”.

### Usage:

```pycon
>>> results = section_cut.compute_equivalent_beam_properties()
>>> my_matrix = section_cut.get_transformed_sectional_properties_matrix(properties=results.properties, position='origin', axes_type='global', matrix_type='stiffness_matrix', matrix_format='ansys')
>>> principal_stiffness_values = section_cut.get_sectional_stiffness_behavior(my_matrix, "ansys")
```
