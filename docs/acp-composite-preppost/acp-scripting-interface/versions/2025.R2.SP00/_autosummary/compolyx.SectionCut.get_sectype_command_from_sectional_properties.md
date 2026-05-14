# get_sectype_command_from_sectional_properties

<a id="compolyx.SectionCut.get_sectype_command_from_sectional_properties"></a>

#### SectionCut.get_sectype_command_from_sectional_properties(properties, stiffness_matrix_position, stiffness_matrix_axes_type, mass_matrix_position, mass_matrix_axes_type, sectype_id)

Convert the equivalent stiffness and mass matrix into an Ansys sectype command.

The output (string) can be embedded into an Ansys input file to define a preintegrated
composite beam section. It can also be used in the Mechanical application via a command snippet.

* **Parameters:**

- properties: All sectional properties of the equivalent beam properties calculation.
- stiffness_matrix_position: The point to which the stiffness matrix is transformed. Valid options: “origin”, “center of gravity”, “shear center”, and “elastic center”.
- stiffness_matrix_axes_type: Output the matrix in this axes system: can be “global”, “elastic axes”, and “principal inertia axes”.
- mass_matrix_position: The point to which the mass matrix is transformed. Valid options: “origin”, “center of gravity”, “shear center”, and “elastic center”.
- mass_matrix_axes_type: Output the matrix in this axes system: can be “global”, “elastic axes”, and “principal inertia axes”.
- sectype_id: Defines the index of the section.

* **Usage:**
  ```pycon
  >>> result = section_cut.compute_equivalent_beam_properties(check_status=True)
  >>> command = section_cut.get_sectype_command_from_sectional_properties(
          properties=result.properties,
          stiffness_matrix_position="elastic center",
          stiffness_matrix_axes_type="elastic axes",
          mass_matrix_position="center of gravity",
          mass_matrix_axes_type="principal inertia axes",
          sectype_id=1,
      )
  ```
