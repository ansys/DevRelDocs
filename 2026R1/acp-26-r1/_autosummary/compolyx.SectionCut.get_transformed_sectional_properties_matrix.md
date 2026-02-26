# get_transformed_sectional_properties_matrix

<a id="compolyx.SectionCut.get_transformed_sectional_properties_matrix"></a>

#### SectionCut.get_transformed_sectional_properties_matrix(properties, position, axes_type, matrix_type, matrix_format)

Transform the global mass or stiffness matrix to the given point and rotate it by the given angle, for a specific format.

### Parameters:
  - properties: All sectional properties of the equivalent beam properties calculation.
  - position: The point to which the matrix is transformed. Valid options: “origin”, “center of gravity”, “shear center”, and “elastic center”.
  - axes_type: Output the matrix in this axes system. Valid options: “global”, “elastic axes”, and “principal inertia axes”.
  - matrix_type: The type of the matrix. Valid options: “mass_matrix” and “stiffness_matrix”.
  - matrix_format: The format of the transformed matrix. Valid options: “default” or “ansys” (Ansys Preintegrated Composite Beam).
### Returns:
  The transformed matrix (6,6).
### Usage:
  ```pycon
  >>> result = section_cut.compute_equivalent_beam_properties(check_status=True)
  >>> transformed_stiffness_matrix = section_cut.get_transformed_sectional_properties_matrix(
          properties=result.properties,
          position="elastic center",
          axes_type="elastic axes",
          matrix_format="ansys",
          matrix_type="stiffness_matrix"
      )
  >>> transformed_mass_matrix = section_cut.get_transformed_sectional_properties_matrix(
          properties=result.properties,
          point="center of gravity",
          axes_type="principal inertia axes",
          format="default",
          matrix_type="mass_matrix"
      )
  ```
