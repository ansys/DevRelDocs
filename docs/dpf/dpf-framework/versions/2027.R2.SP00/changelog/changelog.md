# Changelog

Changes since the last released version for DPF 27.2.pre0 (as of 2026-10-05).

This changelog is organized by category, with sections for different types of updates (new features, bug fixes, changes, performance improvements).

The following table shows which components have updates in each category.

| Component | 
|-----------|


## Operator changes

### New operators

#### compression

- [quantization](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/quantization.md):
  > Scales a field to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[ q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\( 2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

- [quantization_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/quantization_fc.md):
  > Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\(2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

- [zstd_compress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/zstd_compress.md):
  > Compresses the data of a field with ZSTD compression algorithm.

- [zstd_compress_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/zstd_compress_fc.md):
  > Compresses a fields container with ZSTD compression algorithm.

- [zstd_decompress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/zstd_decompress.md):
  > Decompresses a field compressed with ZSTD compression algorithm.

- [zstd_decompress_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/zstd_decompress_fc.md):
  > Decompresses a fields container compressed with ZSTD compression algorithm.


#### info

- [markdown_latex_example](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/info/markdown_latex_example.md):
  > This operator showcases the use of Markdown and LaTeX in operator and pin descriptions:
  > #### Headings
  > ##### h2
  > ###### h3
  > 
  > #### Text
  > This should result in a paragraph
  > it's that simple.
  > 
  > 
  > *italic*, **bold**
  > 
  > #### Lists
  > * an *unordered list*
  >   * with **some hierarchy**
  >     1. and an ordered
  >     2. mixed
  >     * list
  >     * directly
  >   * inside
  > 
  > #### Code
  > ##### Code block
  > ```c
  > std::string a = 'test';
  > ```
  > ```js
  > var a = 'test';
  > ```
  > ```python
  > a: str = 'test'
  > ```
  > ##### Inline code
  > And well `inline code` should also work.
  > 
  > #### Quotes
  > 
  > > A Quote
  > >
  > > With *some text* **blocks inside**
  > >
  > > * even a list
  > > * should be
  > > * possible
  > 
  > ##### Links
  > Links such as [link](https://docs.pyansys.com/).
  > 
  > ##### Images
  > ![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)
  > 
  > 
  > ##### Separations
  > 
  > ---
  > 
  > ##### Checklists
  > 
  > - [ ] how
  > - [ ] about
  >   - [ ] a
  >   - [x] nice
  > - [x] check
  > - [ ] list
  > 
  > ##### Tables
  > 
  > | Left header | middle header | last header |
  > |-------------|---------------|-------------|
  > | cell 1      | cell **2**    | cell 3      |
  > | cell 4      | cell 5        | cell 6      |
  > 
  > 
  > ##### LaTeX
  > 
  > An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.
  > 
  > An inline equation \\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\) using LaTeX parenthesis delimiters.
  > 
  > An equation on its own using dollar delimiters:
  > $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$
  > 
  > An equation on its own using square bracket delimiters:
  > \\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\]
  > 


#### mapping

- [create_sc_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/create_sc_mapping_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sc_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/sc_mapping.md):
  > Apply System Coupling to map data from an input mesh to a target mesh.

- [sysc_point_cloud_wf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/sysc_point_cloud_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sysc_shape_function_wf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/sysc_shape_function_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.


#### math

- [linearized_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/linearized_stress.md):
  > get linearized stress

- [matrix_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/matrix_product.md):
  > 
  > Computes the product of two matrix or matrix-vector fields:
  > 
  > | Pin 0 | Pin 1 | Operation | Result |
  > |---|---|---|---|
  > | matrix field | matrix field | [matrix product](https://en.wikipedia.org/wiki/Matrix_multiplication) | matrix field |
  > | matrix field | vector field | matrix-vector product | vector field |
  > 
  > Raises an error if neither input is a matrix (second-order tensor) field,
  > or if an input is neither a matrix nor a vector.
  > For general inner products - including dot products and scaling - use the
  > `generalized_inner_product` operator instead.
  > If either input is empty, a dimensionless zero scalar field is returned.
  > 

- [matrix_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/matrix_product_fc.md):
  > 
  > Computes the product of two matrix or matrix-vector fields:
  > 
  > | Pin 0 | Pin 1 | Operation | Result |
  > |---|---|---|---|
  > | matrix field | matrix field | [matrix product](https://en.wikipedia.org/wiki/Matrix_multiplication) | matrix field |
  > | matrix field | vector field | matrix-vector product | vector field |
  > 
  > Raises an error if neither input is a matrix (second-order tensor) field,
  > or if an input is neither a matrix nor a vector.
  > For general inner products - including dot products and scaling - use the
  > `generalized_inner_product` operator instead.
  > If either input is empty, a dimensionless zero scalar field is returned.
  > 

- [mechanical_min_max_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/mechanical_min_max_over_time.md):
  > 
  > Dispatch operator that selects and runs a minimum/maximum operator over time or frequency, based on the integer selector on pin 5.
  > 
  > Selector values on pin 5:
  > 
  > - `0`: `min_max_by_time` - per-step, per-component minimum and maximum, aggregating every entity of each field (elemental-nodal values collapse into the reduction).
  > - `1`: `max_over_time_by_entity` - per-entity, per-component maximum across all time or frequency steps.
  > - `2`: `time_of_max_by_entity` - time or frequency at which each per-entity, per-component maximum occurs.
  > - `7`: `min_over_time_by_entity` - per-entity, per-component minimum across all time or frequency steps.
  > - `8`: `time_of_min_by_entity` - time or frequency at which each per-entity, per-component minimum occurs.
  > 
  > Selectors 1, 2, 7 and 8 keep the entity axis: the underlying operator (`min_max_over_time_by_entity`) returns one value per entity, per component and per shell layer when available. Selector 0 (`min_max_by_time`) reduces across entities instead.
  > 
  > Output pin 0 holds the primary result of the selected operator.
  > Output pin 1 is optional and populated only when the selected operator produces two outputs (currently only selector `0`).
  > 


#### mesh

- [edge_decimation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/edge_decimation.md):
  > Takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold. Branch nodes and sharp corners are preserved.

- [mesh_set_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_set_attribute.md):
  > Uses the MeshedRegion APIs to modify it.


#### result

- [acoustic_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/acoustic_energy_density.md):
  > Read/compute AED by calling the readers defined by the datasources.

- [acoustic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/acoustic_pressure.md):
  > Read/compute AcousticPressure by calling the readers defined by the datasources.

- [average_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/average_velocity.md):
  > Read/compute average velocity by calling the readers defined by the datasources.

- [contact_element_heat_flow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_element_heat_flow.md):
  > Read/compute contact element heat flow by calling the readers defined by the datasources.

- [convection_heat_flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/convection_heat_flow_rate.md):
  > Read/compute convection heat flow rate by calling the readers defined by the datasources.

- [creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain.md):
  > Read/compute element nodal component creep strains by calling the readers defined by the datasources.
  > - The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
  > - Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:
  > 
  > | Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
  > |---------------------|---------------------|---------------|-----------------|
  > | No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
  > | No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
  > | No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
  > | No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
  > | Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
  > | Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
  > - The available 'elshape' values are:
  > 
  > | elshape | Related elements |
  > |---------|------------------|
  > | 1       | Shell (generic)  |
  > | 2       | Solid            |
  > | 3       | Beam             |
  > | 4       | Skin             |
  > | 5       | Contact          |
  > | 6       | Load             |
  > | 7       | Point            |
  > | 8       | Shell with 1 result across thickness (membrane) |
  > | 9       | Shell with 2 results across thickness (top/bottom) |
  > | 10      | Shell with 3 results across thickness (top/bottom/mid) |
  > | 11      | Gasket          |
  > | 12      | Joint |
  > | 13      | Pretension      |
  > | 14      | Layered      |
  > | 15      | ThickShell      |
  > | 16      | Target      |
  > | 17      | Plane      |
  > | 18      | Pipe      |
  > 

- [creep_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_X.md):
  > Read/compute element nodal component creep strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_XY.md):
  > Read/compute element nodal component creep strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_XZ.md):
  > Read/compute element nodal component creep strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_Y.md):
  > Read/compute element nodal component creep strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_YZ.md):
  > Read/compute element nodal component creep strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_Z.md):
  > Read/compute element nodal component creep strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_eqv.md):
  > Read/compute element nodal equivalent component creep strains by calling the readers defined by the datasources.
  > - The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
  > - Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:
  > 
  > | Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
  > |---------------------|---------------------|---------------|-----------------|
  > | No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
  > | No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
  > | No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
  > | No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
  > | Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
  > | Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
  > - The available 'elshape' values are:
  > 
  > | elshape | Related elements |
  > |---------|------------------|
  > | 1       | Shell (generic)  |
  > | 2       | Solid            |
  > | 3       | Beam             |
  > | 4       | Skin             |
  > | 5       | Contact          |
  > | 6       | Load             |
  > | 7       | Point            |
  > | 8       | Shell with 1 result across thickness (membrane) |
  > | 9       | Shell with 2 results across thickness (top/bottom) |
  > | 10      | Shell with 3 results across thickness (top/bottom/mid) |
  > | 11      | Gasket          |
  > | 12      | Joint |
  > | 13      | Pretension      |
  > | 14      | Layered      |
  > | 15      | ThickShell      |
  > | 16      | Target      |
  > | 17      | Plane      |
  > | 18      | Pipe      |
  > 

- [creep_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_intensity.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_max_shear.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_principal_1.md):
  > Read/compute element nodal component creep strains 1st principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_principal_2.md):
  > Read/compute element nodal component creep strains 2nd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_principal_3.md):
  > Read/compute element nodal component creep strains 3rd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [element_nodal_heat](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/element_nodal_heat.md):
  > Read/compute element nodal heat by calling the readers defined by the datasources.
  > - The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
  > - Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:
  > 
  > | Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
  > |---------------------|---------------------|---------------|-----------------|
  > | No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
  > | No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
  > | No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
  > | No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
  > | Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
  > | Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
  > - The available 'elshape' values are:
  > 
  > | elshape | Related elements |
  > |---------|------------------|
  > | 1       | Shell (generic)  |
  > | 2       | Solid            |
  > | 3       | Beam             |
  > | 4       | Skin             |
  > | 5       | Contact          |
  > | 6       | Load             |
  > | 7       | Point            |
  > | 8       | Shell with 1 result across thickness (membrane) |
  > | 9       | Shell with 2 results across thickness (top/bottom) |
  > | 10      | Shell with 3 results across thickness (top/bottom/mid) |
  > | 11      | Gasket          |
  > | 12      | Joint |
  > | 13      | Pretension      |
  > | 14      | Layered      |
  > | 15      | ThickShell      |
  > | 16      | Target      |
  > | 17      | Plane      |
  > | 18      | Pipe      |
  > element_nodal_heat fields contain STATIC and DAMPING forces stored as components (when available). STATIC: component 0. DAMPING: component 1.

- [element_nodal_moments](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/element_nodal_moments.md):
  > Read/compute element nodal moments by calling the readers defined by the datasources.
  > - The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
  > - Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:
  > 
  > | Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
  > |---------------------|---------------------|---------------|-----------------|
  > | No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
  > | No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
  > | No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
  > | No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
  > | Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
  > | Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
  > - The available 'elshape' values are:
  > 
  > | elshape | Related elements |
  > |---------|------------------|
  > | 1       | Shell (generic)  |
  > | 2       | Solid            |
  > | 3       | Beam             |
  > | 4       | Skin             |
  > | 5       | Contact          |
  > | 6       | Load             |
  > | 7       | Point            |
  > | 8       | Shell with 1 result across thickness (membrane) |
  > | 9       | Shell with 2 results across thickness (top/bottom) |
  > | 10      | Shell with 3 results across thickness (top/bottom/mid) |
  > | 11      | Gasket          |
  > | 12      | Joint |
  > | 13      | Pretension      |
  > | 14      | Layered      |
  > | 15      | ThickShell      |
  > | 16      | Target      |
  > | 17      | Plane      |
  > | 18      | Pipe      |
  > element_nodal_moments fields contain STATIC, DAMPING and INERTIA forces stored as components (when available). STATIC: components 0 -> 2. DAMPING: components 3 -> 5. INERTIA components 6 -> 8

- [emissivity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/emissivity.md):
  > Read/compute emissivity by calling the readers defined by the datasources.

- [emitted_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/emitted_radiation_heat_flux.md):
  > Read/compute emitted radiation heat flux by calling the readers defined by the datasources.

- [enclosure_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/enclosure_number.md):
  > Read/compute enclosure number by calling the readers defined by the datasources.

- [film_coefficient](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/film_coefficient.md):
  > Read/compute film coefficient by calling the readers defined by the datasources.

- [flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/flow_rate.md):
  > Read/compute flow rate by calling the readers defined by the datasources.

- [fluid_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/fluid_velocity.md):
  > Read/compute FV by calling the readers defined by the datasources.

- [gasket_total_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_total_closure.md):
  > computes the gasket total closure (sum of gasket thermal closure and gasket inelastic closure).

- [gasket_total_closure_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_total_closure_X.md):
  > Read/compute elemental gasket total closure XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [gasket_total_closure_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_total_closure_XY.md):
  > Read/compute elemental gasket total closure XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [gasket_total_closure_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_total_closure_XZ.md):
  > Read/compute elemental gasket total closure XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [global_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/global_to_nodal.md):
  > Rotate results from global coordinate system to local coordinate system.

- [heat_conductivity_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/heat_conductivity_rate.md):
  > Read/compute heat conductivity rate by calling the readers defined by the datasources.

- [heat_transport_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/heat_transport_rate.md):
  > Read/compute heat transport rate by calling the readers defined by the datasources.

- [incident_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/incident_radiation_heat_flux.md):
  > Read/compute incident radiation heat flux by calling the readers defined by the datasources.

- [input_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/input_sound_power.md):
  > Read/compute PINC by calling the readers defined by the datasources.

- [layer_orientation_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/layer_orientation_provider.md):
  > Read the layer orientations.

- [modal_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/modal_acceleration.md):
  > Read/compute modal acceleration by calling the readers defined by the datasources.

- [modal_coordinate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/modal_coordinate.md):
  > Read/compute modal coordinate by calling the readers defined by the datasources.

- [modal_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/modal_velocity.md):
  > Read/compute modal velocity by calling the readers defined by the datasources.

- [net_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/net_radiation_heat_flux.md):
  > Read/compute net radiation heat flux by calling the readers defined by the datasources.

- [nodal_rotation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotation.md):
  > Read/compute nodal rotation by calling the readers defined by the datasources.

- [nodal_rotation_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotation_X.md):
  > Read/compute nodal rotation X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotation_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotation_Y.md):
  > Read/compute nodal rotation Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotation_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotation_Z.md):
  > Read/compute nodal rotation Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_acceleration.md):
  > Read/compute nodal rotational acceleration by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_acceleration_X.md):
  > Read/compute nodal rotational acceleration X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_acceleration_Y.md):
  > Read/compute nodal rotational acceleration Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_acceleration_Z.md):
  > Read/compute nodal rotational acceleration Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_velocity.md):
  > Read/compute nodal rotational velocity by calling the readers defined by the datasources.

- [nodal_rotational_velocity_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_velocity_X.md):
  > Read/compute nodal rotational velocity X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_velocity_Y.md):
  > Read/compute nodal rotational velocity Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_rotational_velocity_Z.md):
  > Read/compute nodal rotational velocity Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [node_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/node_orientations.md):
  > Read/compute node euler angles by calling the readers defined by the datasources.

- [node_orientations_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/node_orientations_X.md):
  > Read/compute node euler angles X component of the vector (1st component) by calling the readers defined by the datasources.

- [node_orientations_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/node_orientations_Y.md):
  > Read/compute node euler angles Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [node_orientations_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/node_orientations_Z.md):
  > Read/compute node euler angles Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nusselt_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nusselt_number.md):
  > Read/compute nusselt number by calling the readers defined by the datasources.

- [output_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/output_sound_power.md):
  > Read/compute POUT by calling the readers defined by the datasources.

- [prandtl_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/prandtl_number.md):
  > Read/compute prandtl number by calling the readers defined by the datasources.

- [radiation_area](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/radiation_area.md):
  > Read/compute radiation area by calling the readers defined by the datasources.

- [radiation_heat_flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/radiation_heat_flow_rate.md):
  > Read/compute radiation heat flow rate by calling the readers defined by the datasources.

- [raw_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/raw_acceleration.md):
  > Read/compute A vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [raw_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/raw_velocity.md):
  > Read/compute V vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [reaction_heat](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reaction_heat.md):
  > Read/compute nodal reaction heat by calling the readers defined by the datasources.

- [reaction_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reaction_moment.md):
  > Read/compute nodal reaction moments by calling the readers defined by the datasources.

- [reaction_moment_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reaction_moment_X.md):
  > Read/compute nodal reaction moments X component of the vector (1st component) by calling the readers defined by the datasources.

- [reaction_moment_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reaction_moment_Y.md):
  > Read/compute nodal reaction moments Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [reaction_moment_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reaction_moment_Z.md):
  > Read/compute nodal reaction moments Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [reflected_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reflected_radiation_heat_flux.md):
  > Read/compute reflected radiation heat flux by calling the readers defined by the datasources.

- [reynolds_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/reynolds_number.md):
  > Read/compute reynolds number by calling the readers defined by the datasources.

- [squared_l2norm_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/squared_l2norm_pressure.md):
  > Read/compute Square of the L2 norm of pressure over element volume by calling the readers defined by the datasources.

- [total_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_X.md):
  > Read/compute element nodal component total strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_XY.md):
  > Read/compute element nodal component total strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_XZ.md):
  > Read/compute element nodal component total strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_Y.md):
  > Read/compute element nodal component total strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_YZ.md):
  > Read/compute element nodal component total strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_Z.md):
  > Read/compute element nodal component total strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_eqv.md):
  > Read/compute element nodal equivalent total strain by calling the readers defined by the datasources.
  > - The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
  > - Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:
  > 
  > | Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
  > |---------------------|---------------------|---------------|-----------------|
  > | No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
  > | No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
  > | No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
  > | No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
  > | Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
  > | Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
  > | Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
  > - The available 'elshape' values are:
  > 
  > | elshape | Related elements |
  > |---------|------------------|
  > | 1       | Shell (generic)  |
  > | 2       | Solid            |
  > | 3       | Beam             |
  > | 4       | Skin             |
  > | 5       | Contact          |
  > | 6       | Load             |
  > | 7       | Point            |
  > | 8       | Shell with 1 result across thickness (membrane) |
  > | 9       | Shell with 2 results across thickness (top/bottom) |
  > | 10      | Shell with 3 results across thickness (top/bottom/mid) |
  > | 11      | Gasket          |
  > | 12      | Joint |
  > | 13      | Pretension      |
  > | 14      | Layered      |
  > | 15      | ThickShell      |
  > | 16      | Target      |
  > | 17      | Plane      |
  > | 18      | Pipe      |
  > 
  > 
  > Total strain is computed as the sum of the available strain contributions: elastic strain (`EPEL`), plastic strain (`EPPL`), creep strain (`EPCR`), thermal strain (`ETH`) 

- [total_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_intensity.md):
  > Reads/computes element nodal component total strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [total_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_max_shear.md):
  > Reads/computes element nodal component total strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [total_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_principal_1.md):
  > Read/compute element nodal component total strains 1st principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [total_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_principal_2.md):
  > Read/compute element nodal component total strains 2nd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [total_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain_principal_3.md):
  > Read/compute element nodal component total strains 3rd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [view_factor_sum](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/view_factor_sum.md):
  > Read/compute view factor sum by calling the readers defined by the datasources.


#### scoping

- [adapt_with_scopings_container_pfc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/adapt_with_scopings_container_pfc.md):
  > Rescopes/splits a property fields container to correspond to a scopings container. Each property field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped property fields.

- [change_pfc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/change_pfc.md):
  > DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a property fields container to correspond to a scopings container.

- [extend_midside_nodal_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/extend_midside_nodal_scoping.md):
  > Extends the input nodal scoping with the neighbor corner nodes of every midside node in the input. For each midside node in the scoping, the two corner nodes that bound it on the element edge are added to the output scoping. 


#### utility

- [concatenate_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/concatenate_fields.md):
  > Concatenates fields into a unique one by incrementing the number of components.
  > 
  > Example:
  > - Field1 components: { UX, UY, UZ }
  > - Field2 components: { RX, RY, RZ }
  > - Output field : { UX, UY, UZ, RX, RY, RZ }

- [concatenate_fields_containers](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/concatenate_fields_containers.md):
  > Concatenates fields containers into a unique one by concatenating each of their fields.
  > 
  > Example:
  > - Fields Container 1:
  > 	- Field1 with components: { UX, UY, UZ }
  > 	- Field2 with components: { VX, VY, VZ }
  > - Fields Container 2:
  > 	- Field1 with components: { RX, RY, RZ }
  > 	- Field2 with components: { AX, AY, AZ }
  > - Output Fields Container:
  > 	- Field1 with components: { UX, UY, UZ, RX, RY, RZ }
  > 	- Field2 with components: { VX, VY, VZ, AX, AY, AZ }

- [csharp_generator](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/csharp_generator.md):
  > 
  > Generates a C# wrapper file (.cs) containing a class for each public operator
  > found in a loaded plugin DLL.
  > The DLL is loaded using the given `load_symbol` and `library_key`.
  > All non-private operators discovered in the plugin are written to the single
  > file at `output_path`.
  > 
  > > **Note:** Operators whose exposure property is set to `private` are silently
  > > excluded from the generated output.
  > 
  > Inputs & outputs of each operator are represented as typed `LinkableInput<T>`
  > and `LinkableOutput<T>` properties on the generated class.
  > 

- [customtypefield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/customtypefield_get_attribute.md):
  > Gets a property from an input field / fields container. A CustomTypeField in pin 0 and a property name (string) in pin 1 are expected as inputs.

- [cyclic_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/cyclic_support_get_attribute.md):
  > A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

- [get_active_operators](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/get_active_operators.md):
  > Get all active operators in the evaluation chain of a workflow's output pins. Returns a GenericDataContainer with keys 'opName_opId' and int values corresponding to E_OperatorState.

- [get_operators](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/get_operators.md):
  > Getter on operators inside a workflow.

- [operator_changelog](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/operator_changelog.md):
  > Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

- [propertyfield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/propertyfield_get_attribute.md):
  > Gets a property from an input field / fields container. A PropertyField in pin 0 and a property name (string) in pin 1 are expected as inputs.

- [transpose_fields_container](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/transpose_fields_container.md):
  > Transposes a fields container so that the fields' scoping becomes the container's scoping and a chosen label (default: time) becomes the fields' scoping.
  > 
  > Input layout (example with time label, 2 body labels, 3 nodes):
  >   FC labels: [time, body]
  >   Field 0: {time:1, body:1} -> scoping {n1, n2, n3}, data [...]
  >   Field 1: {time:1, body:2} -> scoping {n4, n5}, data [...]
  >   Field 2: {time:2, body:1} -> scoping {n1, n2, n3}, data [...]
  >   Field 3: {time:2, body:2} -> scoping {n4, n5}, data [...]
  > 
  > Output layout (transposed on time):
  >   FC labels: [Nodal, body]
  >   Field 0: {Nodal:n1, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  >   Field 1: {Nodal:n2, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  >   Field 1: {Nodal:n3, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  >   Field 2: {Nodal:n4, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]
  >   Field 3: {Nodal:n5, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]
  >   ...
  > 
  > Each output field gathers one entity's data across all values of the transposed label from the input fields that share the same non-transposed labels. All input fields sharing a labelspace where only the transposed label changes must have the same scoping and location.



### Changed operators

#### averaging

- [elemental_difference](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix data corruption on centroid elements with through_layers enabled.

  > 0.0.3: Fix crash on elements with fewer than two corner nodes.

  > 0.0.4: Fix shell layer metadata when computing elemental difference from nodal input.


- [elemental_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_fraction_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_mean](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_mean.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_mean_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_mean_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_nodal_to_nodal.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_nodal_to_nodal_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Block ScopingsContainer input.

  > 0.0.3: Expose map scoping input and auxiliary scoping outputs in the specification.


- [elemental_nodal_to_nodal_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_nodal_to_nodal_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix right input pin for mesh scoping and meshed region.

  > 0.0.3: Connect a scoping only if non empty.

  > 0.0.4: Document mesh and label-specific scoping input behavior.

  > 0.0.5: Reduce serialized per-field setup during parallel execution.

  > 0.0.6: Resolve mesh support independently for each field.

  > 0.1.0: Add in the specification the meshed region input.


- [elemental_nodal_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_nodal_to_nodal_fc.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.

  > 0.0.5: Fix exception type preservation during parallel execution.

  > 0.0.6: Fix exception short-circuit data race during parallel execution.


- [elemental_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_to_elemental_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_to_elemental_nodal_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [elemental_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix division by zero in face-based FVM averaging.


- [elemental_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/elemental_to_nodal_fc.md)

  > 0.0.1: Fixed shell management issue.

  > 0.0.2: Internal refactoring to use Scoping Iterators.

  > 0.0.3: Fix exception type preservation during parallel execution.

  > 0.0.4: Fix exception short-circuit data race during parallel execution.


- [extend_to_mid_nodes_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/extend_to_mid_nodes_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [force_summation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/force_summation.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.2.0: Add support for excluding or not contact elements.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N.m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Internal refactoring to remove usage of deprecated pin 200 of ENF

  > 2.0.0: Addition of support for cyclic expansion with associated input pins.


- [force_summation_psd](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/force_summation_psd.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.1.1: Contact elements are now excluded from the summation.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N*m.


- [gauss_to_node_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/gauss_to_node_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [nodal_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_fraction_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.


- [nodal_to_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_to_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_to_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [nodal_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_to_elemental_nodal.md)

  > 0.0.1: Fixed issue with resize output field.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/nodal_to_elemental_nodal_fc.md)

  > 0.0.1: Fixed issue with resize output fields.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix exception type preservation during parallel execution.

  > 0.1.3: Fix exception short-circuit data race during parallel execution.


- [to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/averaging/to_nodal_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### compression

- [apply_svd](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/apply_svd.md)

  > 0.1.0: The pin 1 can now be passed as a double.


- [kmeans_clustering](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/compression/kmeans_clustering.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### filter

- [abc_weightings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/abc_weightings.md)

  > 0.0.1: Fixed bug in frequency calculation with multiple rpms in the support.


- [field_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_band_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_band_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_high_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_low_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_low_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_signed_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/field_signed_high_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [scoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/scoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/scoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/scoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/scoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timefreq_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timefreq_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timefreq_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timefreq_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timescoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timescoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timescoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/filter/timescoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### geo

- [cartesian_to_spherical](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/cartesian_to_spherical.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [cartesian_to_spherical_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/cartesian_to_spherical_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [element_nodal_contribution](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/element_nodal_contribution.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [elements_facets_surfaces_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/elements_facets_surfaces_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elements_volume](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/elements_volume.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.

  > 0.0.3: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [elements_volumes_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/elements_volumes_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [faces_area](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/faces_area.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [gauss_to_node](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/gauss_to_node.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [integrate_over_elements](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/integrate_over_elements.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [normals](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/normals.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [normals_provider_nl](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/normals_provider_nl.md)

  > 0.0.1: Bug fixed for input mesh type containing solid elements.

  > 1.0.0: Fixed reference coordinate-system on which normals are calculated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [rotate_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/rotate_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/rotate_in_cylindrical_cs.md)

  > 1.0.0: Fix bug for the rotation of strain fields with a cylindrical system whose axis is rotated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/rotate_in_cylindrical_cs_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/spherical_to_cartesian.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/spherical_to_cartesian_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [to_polar_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/geo/to_polar_coordinates.md)

  > 0.0.1: Fix exception type preservation during parallel execution.



#### invariant

- [eigen_values_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/eigen_values_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [invariants](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/invariants.md)

  > 0.1.0: Add input and output pins to control the principal stress output.


- [invariants_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/invariants_fc.md)

  > 0.1.0: Add input and output pins to control the principal stress output.

  > 0.1.1: Fix exception type preservation during parallel execution.


- [segalman_von_mises_eqv_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/segalman_von_mises_eqv_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [von_mises_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/von_mises_eqv.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix optional Poisson ratio input declaration.


- [von_mises_eqv_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/invariant/von_mises_eqv_fc.md)

  > 0.0.1: Fix optional Poisson ratio input declaration.



#### logic

- [ascending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/ascending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [ascending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/ascending_sort_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [component_transformer_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/component_transformer_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [descending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/descending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [descending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/descending_sort_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [elementary_data_selector](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/elementary_data_selector.md)

  > 0.1.0: fix of crash when input field data pointer is empty, the operator will output an empty field in this case moving forward.

  > 0.2.0: fix of crash when input field had no data pointer, the operator will output an empty field in this case moving forward.

  > 0.2.1: Internal refactoring to use Scoping Iterators.


- [identical_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/identical_meshes.md)

  > 0.0.1: Support comparing the node to element connectivity.


- [identical_property_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/identical_property_fields.md)

  > 0.0.1: Add the order_independent input pin.


- [solid_shell_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/logic/solid_shell_fields.md)

  > 0.0.1: Input Fields Containers can contain empty fields.



#### mapping

- [find_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/find_reduced_coordinates.md)

  > 0.1.0: Fix bug with interpolation points at corner nodes.

  > 0.1.1: Update the operator and pin descriptions.

  > 0.1.2: Internal refactoring to use Scoping Iterators.

  > 0.1.3: Fix tolerance problem with distorted elements.

  > 0.1.4: Support beam and point elements.

  > 0.1.5: Support Surface elements.


- [on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/on_coordinates.md)

  > 0.1.0: Performance improvement.

  > 0.2.0: Fix bug with interpolation points at corner nodes.

  > 0.3.0: Fix bug with missing results and use_quadratic_elements pin.

  > 0.3.1: Update the operator and pin descriptions.

  > 0.3.2: Fix tolerance problem with distorted 2D elements.

  > 0.4.0: Preserve explicit coordinate labels and ignore implicit labels in mapping output.

  > 0.4.1: Support beam and point elements.

  > 0.4.2: Support Surface elements.

  > 0.4.3: Fix element search for distorted 3D elements.


- [on_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/on_reduced_coordinates.md)

  > 0.0.1: Update the operator and pin descriptions.

  > 0.0.2: Internal refactoring to use Scoping Iterators.

  > 0.0.3: Support beam and point elements.

  > 0.0.4: Support Surface elements.

  > 0.0.5: Fix element search for distorted 3D elements.


- [prepare_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/prepare_mapping_workflow.md)

  > 0.0.1: Update the operator and pin descriptions.


- [scoping_on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/scoping_on_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [solid_to_skin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/solid_to_skin.md)

  > 0.1.0: Improving performance for Nodal locations.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.

  > 0.2.1: Removing unnedeed output hidden pin.

  > 0.2.2: Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements.

  > 0.2.3: Improve the operator and pin descriptions.

  > 0.2.4: Internal refactoring to use Scoping Iterators.

  > 0.2.5: Fix null pointer access when input field has no mesh support.

  > 0.2.6: Fix bounds checking on reusable index maps for skin element mapping.

  > 0.2.7: Fix stack buffer overflow for skin data with many nodes or components.

  > 0.2.8: Fix data copy offset for skin elements with mid-side nodes.

  > 0.2.9: Fix condition check on skin element properties lookup.

  > 0.2.10: Fix heap corruption in the Nodal fast-path when invoked in parallel by solid_to_skin_fc: clone the field returned by Rescope when it aliases the input field, so concurrent SetSupport calls no longer mutate a shared CField.

  > 0.2.11: Fix const-safe access to the shared properties map under parallel execution (use at() instead of operator[]).

  > 0.2.12: Fix shell-layer inference state leaking between mapped elements.

  > 0.2.13: Add support for line elements.

  > 0.2.14: Performance improvement for Elemental and ElementalNodal fields.

  > 0.2.15: Add support for surface elements.


- [solid_to_skin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mapping/solid_to_skin_fc.md)

  > 0.1.0: Improving performance for Nodal locations. Added parallelization.

  > 0.1.1: Bug fixed for empty fields container.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.

  > 0.2.1: Fixed issue with different scopings in the input field.

  > 0.2.2: Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements.

  > 0.2.3: Fixed issue with fields container with mixed location.

  > 0.2.4: Improve pin 0, pin 1, pin 2, and output pin 0 descriptions to match the solid_to_skin operator.

  > 0.2.5: Fix exception type preservation during parallel execution.

  > 0.2.6: Fix null pointer access when input field has no mesh support.

  > 0.2.7: Fix data race on exception short-circuit flag in the parallel OMP loop by using std::atomic<bool>.

  > 0.2.8: Fix const-safe access to the shared properties map under parallel execution (use at() instead of operator[]).

  > 0.2.9: Fix shell-layer inference state leaking between mapped elements.

  > 0.2.10: Performance improvement for Elemental and ElementalNodal fields containers.

  > 0.2.11: Add support for surface elements.



#### math

- [absolute_value_by_component](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/absolute_value_by_component.md)

  > 0.0.1: Improve operator description with formula and Wikipedia link. Improve output pin description.


- [absolute_value_by_component_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/absolute_value_by_component_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [accumulate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulate.md)

  > 0.0.1: Improve operator description with weighted sum formula. Improve pin 2 and output pin descriptions.


- [accumulate_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulate_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [accumulate_level_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulate_level_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_min_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulate_min_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulate_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulation_per_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/accumulation_per_scoping.md)

  > 0.0.1: Rewrite the operator description to clarify entity-wise summation per field and label-agnostic behaviour, document input pins 0, 3, 4 and 5, document the two output pins, and mark the streams and data sources pins as optional.

  > 1.0.0: Remove input datasources and streams. The user is responsible for scoping expansion for cyclic models if needed.


- [add](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/add.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and inplace option. Improve output pin description. Add entity-wise addition synonym.


- [add_constant_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/add_constant_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [add_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/add_fc.md)

  > 0.0.1: Improve operator description. Improve output pin description. Add entity-wise addition synonym.


- [amplitude](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/amplitude.md)

  > 0.0.1: Improve operator description. Add output pin description. Add Wikipedia link.


- [amplitude_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/amplitude_fc.md)

  > 0.0.1: Improve operator description with amplitude formula, fallback behaviour and Wikipedia link. Add input and output pin descriptions.


- [average_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/average_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [centroid](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/centroid.md)

  > 0.0.1: Improve operator description with interpolation formula, convexity criterion and Wikipedia link. Improve pin 2 and output pin descriptions.


- [centroid_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/centroid_fc.md)

  > 0.0.1: Improve operator description with interpolation formula, exact-match behaviour and Wikipedia link. Improve pin descriptions.


- [component_wise_divide](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/component_wise_divide.md)

  > 0.0.1: Improve operator description with formula and zero-denominator behaviour. Add output pin description. Add Wikipedia link.


- [component_wise_divide_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/component_wise_divide_fc.md)

  > 0.0.1: Improve operator description. Add output pin description. Add Wikipedia link.


- [component_wise_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/component_wise_product_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [compute_residual_and_error](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/compute_residual_and_error.md)

  > 0.1.0: Support generic labels (not only time) in the input FieldsContainer

  > 0.1.1: Fixed the size of output scaling factors for the absolute normalization

  > 1.0.0: Output pins 0 and 1 come out as fields containers instead of fields for normalization type 3
Upgraded documentation


- [conjugate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/conjugate.md)

  > 0.0.1: Improve operator description with conjugate formula and Wikipedia link. Add input and output pin descriptions.


- [correlation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/correlation.md)

  > 0.0.1: Rewrite description with LaTeX weighted inner product formula, mark pins 2 and 3 optional, correct the absoluteValue pin description.


- [cos](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cos.md)

  > 0.0.1: Improve operator description to document unit constraints and formula. Improve input and output pin descriptions. Add Wikipedia link.


- [cos_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cos_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [cplx_derive](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cplx_derive.md)

  > 0.0.1: Improve operator description with frequency-domain derivation formula and Wikipedia link. Add input and output pin descriptions.

  > 0.0.2: Improve operator performance through internal refactoring.


- [cplx_divide](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cplx_divide.md)

  > 0.0.1: Improve operator description with complex division formula, zero-denominator error and Wikipedia link. Improve pin and output pin descriptions.


- [cplx_dot](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cplx_dot.md)

  > 0.0.1: Improve operator description with Hermitian inner product formula and Wikipedia link.


- [cplx_multiply](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/cplx_multiply.md)

  > 0.0.1: Improve operator description with complex multiplication formula and Wikipedia link. Add output pin description.


- [entity_extractor](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/entity_extractor.md)

  > 0.0.1: Correct description to clarify index-based (not ID-based) extraction, document all pins, and declare the previously undocumented output pin 1.


- [exponential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/exponential.md)

  > 0.1.0: Add permissive config option to bypass unit check.


- [exponential_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/exponential_fc.md)

  > 0.1.0: Add input pin 1 which allows to apply the exponential to the time/freq support of the input FC. Also add permissive config option to bypass unit check.


- [generalized_inner_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/generalized_inner_product.md)

  > 0.0.1: Improve operator description with Wikipedia links and dispatch table. Add missing optional input pin 2 (mesh) for elemental-nodal/nodal dot product. Improve output pin description.


- [generalized_inner_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/generalized_inner_product_fc.md)

  > 0.0.1: Improve operator description with Wikipedia links and dispatch table. Add missing optional input pin 2 (mesh) for elemental-nodal/nodal dot product. Improve output pin description.


- [img_part](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/img_part.md)

  > 0.0.1: Improve operator description. Add input and output pin descriptions.


- [invert_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/invert_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [kronecker_prod](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/kronecker_prod.md)

  > 0.0.1: Improve operator description with Kronecker product formula and Wikipedia link. Add output pin description.


- [linear_combination](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/linear_combination.md)

  > 0.0.1: Improve operator description with LaTeX formula and Wikipedia link. Improve pin 0, 3, 4 and output pin descriptions.


- [ln](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/ln.md)

  > 0.0.1: Improve operator description with formula and dimensionless constraint. Improve input and output pin descriptions. Add Wikipedia link.

  > 0.1.0: Add permissive config option to bypass unit check.


- [ln_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/ln_fc.md)

  > 0.1.0: Add input pin 1 which allows to apply the natural log to the time/freq support of the input FC. Also add permissive config option to bypass unit check.


- [mac](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/mac.md)

  > 0.0.1: Rewrite description with MAC formula and LaTeX notation, mark pin 2 optional, document all pins, and fix typo in original description.


- [make_one_on_comp](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/make_one_on_comp.md)

  > 0.0.1: Rewrite description to clarify index-based (not ID-based) selection and standard-basis-vector semantics, document all pins.


- [minus](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/minus.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and temperature-difference unit. Improve output pin description. Add entity-wise subtraction synonym.


- [minus_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/minus_fc.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and temperature-difference unit. Improve output pin description. Add entity-wise subtraction synonym.


- [modal_damping_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/modal_damping_ratio.md)

  > 0.0.1: Rewrite description to use LaTeX Rayleigh damping formula and identify each input coefficient.

  > 0.1.0: Input pin 0 now accepts a field or a time/freq support.


- [modal_participation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/modal_participation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [modulus](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/modulus.md)

  > 0.0.1: Improve operator description with complex modulus formula and Wikipedia link. Add input and output pin descriptions.


- [norm](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/norm.md)

  > 0.0.1: Improve operator description with $L_p$ norm formula and Wikipedia link. Improve pin 1 and output pin descriptions.


- [norm_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/norm_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution. Fix operator description accuracy: now documents $L_p$ norm (not just $L_2$). Improve pin 1 and output pin descriptions. Add Wikipedia link.


- [outer_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/outer_product.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [phase](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/phase.md)

  > 0.0.1: Improve operator description with atan2 formula and Wikipedia link. Add output pin description.


- [phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/phase_fc.md)

  > 0.0.1: Improve operator description with atan2 formula, zero-field fallback and Wikipedia link. Add input and output pin descriptions.


- [polar_to_cplx](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/polar_to_cplx.md)

  > 0.0.1: Improve operator description with polar-to-rectangular conversion formulas and Wikipedia link. Add input and output pin descriptions.


- [pow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/pow.md)

  > 0.1.0: Pin added to chose the value to set for division by zero for negative exponents


- [pow_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/pow_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [real_part](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/real_part.md)

  > 0.0.1: Improve operator description. Add input and output pin descriptions.


- [scale](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/scale.md)

  > 0.0.1: Fixed a segmentation fault. Improve operator description with scalar and vector scale formulas. Fix 'scaler' typo. Add Hadamard product synonym for field-valued scale factor.


- [scale_by_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/scale_by_field.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_by_field_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/scale_by_field_fc.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/scale_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution. Improve operator description with supported scale-factor types. Fix 'scaler' typo. Add Hadamard product synonym for field-valued scale factor.


- [sin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sin.md)

  > 0.0.1: Improve operator description to document unit constraints and formula. Add input and output pin descriptions. Add Wikipedia link.


- [sin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sin_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sqr](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sqr.md)

  > 0.0.1: Improve operator description with formula and output unit. Improve output pin description. Add Wikipedia link.


- [sqr_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sqr_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sqrt](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sqrt.md)

  > 0.0.1: Improve operator description with formula, non-negativity constraint, and output unit. Improve input and output pin descriptions. Add Wikipedia link.


- [sqrt_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sqrt_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sweeping_phase](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sweeping_phase.md)

  > 0.0.1: Improve operator description with projection formula and Wikipedia link. Improve pin 2, 4 and output pin descriptions.


- [sweeping_phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/sweeping_phase_fc.md)

  > 0.0.1: Improve operator description with projection formula and Wikipedia link. Improve pin 2, 4 and output pin descriptions.


- [time_freq_interpolation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/time_freq_interpolation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators. Improve operator description with interpolation formula and Wikipedia link. Add missing output pin 1 (TimeFreqSupport). Improve pin descriptions.

  > 0.1.0: Add new input pin 5 which allows to interpolate in log-log scale


- [unit_convert](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/unit_convert.md)

  > 0.0.1: Improve operator description to document conversion formula, mesh handling, and permissive behaviour. Improve output pin description.


- [unit_convert_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/math/unit_convert_fc.md)

  > 0.0.1: Improve operator description to document conversion formula and permissive behaviour. Add input pin description. Improve output pin description.



#### mesh

- [acmo_mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/acmo_mesh_provider.md)

  > 0.0.1: Improved error reporting: errors now include structured context and a remediation suggestion.


- [change_cs](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/change_cs.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [combine_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/combine_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [exclude_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/exclude_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [from_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/from_scoping.md)

  > 0.1.0: Improvement in the performance.

  > 0.1.1: Fixed bug when the scoping of a property field and its mesh are different.

  > 0.1.2: Fixed bug when some of the ids of the desired new scoping is not present in the property field or in the mesh.

  > 0.1.3: Fixed undefined behavior with custom property fields.

  > 0.2.0: Improvement in the performance for cases with non shared scoping between property fields and mesh.

  > 0.2.1: Minor improvements in performance.

  > 0.3.0: From premium to entry.

  > 0.3.1: Internal refactoring to use Scoping Iterators.

  > 0.3.2: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.

  > 0.4.0: Named selections associated to the mesh are rescoped on the selection and associated to the new mesh.


- [from_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/from_scopings.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity.

  > 0.1.0: Improvement in the performance for cases with non shared scoping between property fields and mesh.

  > 0.1.1: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [make_plane_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/make_plane_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [make_sphere_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/make_sphere_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_extraction](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_extraction.md)

  > 1.0.0: Property fields associated to the mesh are rescoped on the selection and associated to the new mesh.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 2.0.0: Internal refactoring to use transpose and mesh::by_scoping operator.


- [mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.

  > 0.1.1: Increased memory efficiency.

  > 0.1.2: Performance improvements for distributed data sources cases.


- [mesh_to_graphics](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_to_graphics.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_to_graphics_edges](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_to_graphics_edges.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Added support for Surface3, Surface4, Surface6, and Surface8 elements.


- [mesh_to_pyvista](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_to_pyvista.md)

  > 0.0.1: Fix node ordering for face connectivity of fluid cell faces marked as reversed.

  > 0.0.2: Fix connectivity construction to handle higher order beam and line elements.

  > 0.0.3: Improve performance of mesh conversions for all types of meshes.

  > 1.0.0: Add new mesh scoping input pin to allow exporting a subset of the original mesh. Add new as_modified_connectivity input pin to allow exporting connectivity in a VTK 9 compatible format without node count headers and with offsets to it. 


- [meshes_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/meshes_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.

  > 0.1.1: Increased memory efficiency.

  > 0.1.2: Performance improvements for distributed data sources cases.


- [points_from_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/points_from_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [skin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/skin.md)

  > 0.0.1: Fixing issue related to shared pointers of property fields and mesh.

  > 0.0.2: Internal change to share pointers of property fields and mesh.

  > 0.0.3: Added support for Edge2, Edge3 and Beam4 elements.

  > 1.0.0: Added support for elements with dropped nodes, as its faces may have been incorrectly added to the output skin mesh before.

  > 1.0.1: Added support for Surface3, Surface4, Surface6, and Surface8 elements.


- [split_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/split_fields.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [split_mesh](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/split_mesh.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity

  > 0.1.0: Improvement in the performance by implementing scoping_build_index_tables operator.


- [wireframe](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/mesh/wireframe.md)

  > 0.1.0: Addition of optional element_restriction pin.

  > 0.1.1: Operator now supports shell and beam elements.

  > 0.1.2: Internal refactoring to use Scoping Iterators.



#### metadata

- [boundary_condition_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/boundary_condition_provider.md)

  > 0.0.1: Improved documentation and exceptions handling.


- [cyclic_mesh_expansion](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/cyclic_mesh_expansion.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [element_types_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/element_types_provider.md)

  > 0.1.0: Added the possibility to output a PropertyField.


- [integrate_over_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/integrate_over_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Allow to make integration even if the time freq support contains several steps (for example multiple RPM), only if the provided scoping correspond to frequencies of a unique RPM.


- [is_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/is_cyclic.md)

  > 1.0.0: If the operator is not implemented and permissive mode is activated, returns an empty string.


- [mesh_selection_manager_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/mesh_selection_manager_provider.md)

  > 0.1.0: Support h5dpf files both for single and distributed datasources.


- [streams_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/streams_provider.md)

  > 0.1.0: Add the permissive configuration.


- [time_freq_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/metadata/time_freq_support_get_attribute.md)

  > 0.1.0: Add new supported property name 'step_id_from_harmonic_index' returning an int.

  > 0.1.1: Internal refactoring to use Scoping Iterators.



#### min_max

- [max_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/max_over_time_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [min_max](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_by_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_by_time.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_fc.md)

  > 0.0.1: Ignore empty fields to calculate maximum & minimum values. A zero value will be output if the field is empty.


- [min_max_fc_inc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_fc_inc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_max_inc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_inc.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_over_label_fc.md)

  > 0.0.1: Input fields with no data are now excluded from the output instead of producing zero-valued entries.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_max_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_max_over_time_by_entity.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/min_over_time_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [time_of_max_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/time_of_max_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [time_of_min_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/min_max/time_of_min_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.



#### result

- [accu_eqv_creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/accu_eqv_creep_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [accu_eqv_plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/accu_eqv_plastic_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [artificial_hourglass_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/artificial_hourglass_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [beam_axial_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_axial_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_axial_stress.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_axial_total_strain.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_s_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_s_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_t_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_t_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_torsional_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/beam_torsional_moment.md)

  > 0.1.0: MAPDL results supported.


- [co_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/co_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_fluid_penetration_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_fluid_penetration_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_friction_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_friction_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_gap_distance](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_gap_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_penetration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_penetration.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_sliding_distance](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_sliding_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_status](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_status.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_surface_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_surface_heat_flux.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_total_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/contact_total_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [coordinate_system](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/coordinate_system.md)

  > 0.0.1: Output pin 0 documentation update.


- [creep_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/creep_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [displacement](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/displacement.md)

  > 1.0.0: Modal coordinates from RFRQ, RDSP and DSUB files can't be extracted through displacement operator anymore, user can use modal_coordinate operator instead.


- [elastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [electric_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/electric_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/electric_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/electric_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_centroids](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/element_centroids.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_nodal_forces](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/element_nodal_forces.md)

  > 0.1.0: split_force_components pin deprecated. To obtain rotation and temperature dofs please use the dedicated operator (element_nodal_moments, element_nodal_heat)Use the component selector to retrieve a specific derivative order. Components 0, 1 and 2 for stiffness. Components 3, 4 and 5 for damping. Components 6, 7 and 8 for inertia.


- [element_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/element_orientations.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_heat_generation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elemental_heat_generation.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_volume](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/elemental_volume.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [equivalent_mass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/equivalent_mass.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [eqv_stress_parameter](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/eqv_stress_parameter.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [euler_load_buckling](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/euler_load_buckling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [gasket_inelastic_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_inelastic_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_thermal_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/gasket_thermal_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/heat_flux.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [hydrostatic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/hydrostatic_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [incremental_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/incremental_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [kinetic_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/kinetic_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.

  > 2.0.0: In the case of a Modal analysis computation of cyclic expanded kinetic and strain energies from Element Nodal Forces and DOFs, rotation contributions were not accounted for.


- [magnetic_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/magnetic_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/magnetic_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_scalar_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/magnetic_scalar_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [magnetic_vector_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/magnetic_vector_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [material_property_of_element](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/material_property_of_element.md)

  > 0.1.0: Added operator documentation and explicit pin contracts.


- [members_in_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/members_in_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_compression_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/members_in_compression_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_linear_compression_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/members_in_linear_compression_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [migrate_to_h5dpf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/migrate_to_h5dpf.md)

  > 0.1.0: Results that don't contain any field are now skipped from the export

  > 0.2.0: Add migrated_file_streams output pin to allow reuse of the migrated file in incremental migration

  > 0.3.0: Change on the export_floats behavior, if no value is provided, model data and nodal results are exported as double precision and elemental results as single precision

  > 0.4.0: Improved error messages to write the root cause


- [nmisc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nmisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.

  > 2.0.0: averaging is blocked.


- [nodal_to_global](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/nodal_to_global.md)

  > 0.1.0: Addition of optional inverse_rotation pin.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [num_surface_status_changes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/num_surface_status_changes.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/plastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [poynting_vector_surface](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/poynting_vector_surface.md)

  > 0.0.1: Fix bug in memory allocation for some local variables participating in interpolation at integration points.


- [pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_displacement](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/raw_displacement.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_reaction_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/raw_reaction_force.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [recombine_harmonic_indeces_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

  > 0.1.0: Addition of is_constant pin


- [result_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/result_provider.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were only performed if the requested result was a 3D vector or a symmetrical 3x3 matrix.

  > 1.0.1: Fix error for stress-like results.


- [smisc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/smisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.

  > 2.0.0: averaging is blocked.


- [spectrum_data](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/spectrum_data.md)

  > 0.1.0: Now supports reading of mode coefficients and damping ratios from .mode file.


- [state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stiffness_matrix_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stiffness_matrix_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.

  > 2.0.0: In the case of a Modal analysis computation of cyclic expanded kinetic and strain energies from Element Nodal Forces and DOFs, rotation contributions were not accounted for.


- [stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_ratio.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stress_von_mises](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/stress_von_mises.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [structural_temperature](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/structural_temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [swelling_strains](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/swelling_strains.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature_grad](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/temperature_grad.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_dissipation_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_dissipation_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thermal_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strains_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thermal_strains_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thickness](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/thickness.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [torque](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/torque.md)

  > 0.1.0: Fields container supported on pin 1. Pin 1 name changed.

  > 1.0.0: The torque unit is now kept from the input units and not converted to N*m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/total_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [transient_rayleigh_integration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/result/transient_rayleigh_integration.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### scoping

- [adapt_with_scopings_container](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/adapt_with_scopings_container.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix issue when input FieldsContainer and ScopingsContainer don't share labels.

  > 0.0.3: Add check on scoping of field to rescope and input scoping locations.

  > 0.0.4: Performance improvement.


- [compute_element_centroids](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/compute_element_centroids.md)

  > 0.1.0: Added arithmetic_average centroid algorithm and explicit pin-combination validation/documentation.

  > 0.1.1: Support Surface elements.


- [intersect](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/intersect.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Performance improvement when scop1 is included in scop2. The operator will return scop1 without any transformation.

  > 0.0.3: Improve membership-check performance.


- [on_property](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/on_property.md)

  > 1.0.0: Remove pin "inclusive"

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Allow the operator use for h5dpf files.


- [reduce_sampling](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/reduce_sampling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [rescope](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/rescope.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [rescope_custom_type_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/rescope_custom_type_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [rescope_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/rescope_fc.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.

  > 0.1.5: Enable parallelism.


- [rescope_property_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/rescope_property_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [scoping_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/scoping_get_attribute.md)

  > 0.1.0: Add new supported property name 'maximum_id' returning an int.


- [transpose](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/scoping/transpose.md)

  > 0.1.0: Improvement of performance

  > 0.1.1: Error with license

  > 0.2.0: Added extend_midside_nodes input pin

  > 0.2.1: Internal refactoring to use Scoping Iterators.



#### serialization

- [csv_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/csv_to_field.md)

  > 1.0.0: Fixed issue while reading csv with multiple fields and common time id between fields.


- [deserializer](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/deserializer.md)

  > 1.0.0: The stream_type input is made optional.


- [export_symbolic_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/export_symbolic_workflow.md)

  > 0.1.0: Changed the default name of input pin 1 to 'workflow_path', the previous name 'path' is kept as an alias.


- [field_to_csv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/field_to_csv.md)

  > 1.0.0: Fixed issue while writing csv with multiple fields and common time id between fields.


- [hdf5dpf_custom_read](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/hdf5dpf_custom_read.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [hdf5dpf_generate_result_file](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/hdf5dpf_generate_result_file.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix use of odd and even in pin description

  > 0.0.3: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [import_symbolic_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/import_symbolic_workflow.md)

  > 0.1.0: Added support for importing symbolic workflows directly from strings.

  > 0.2.0: Changed the default name of input pin 0 to 'workflow_path', the previous name 'string_or_path' is kept as an alias.


- [serialize_to_hdf5](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/serialize_to_hdf5.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [serializer](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/serializer.md)

  > 1.0.0: Changed default value of stream_type input pin from ASCII to binary.


- [workflow_to_pydpf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/serialization/workflow_to_pydpf.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### utility

- [compute_time_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/compute_time_scoping.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/extract_scoping.md)

  > 0.0.1: Error with license


- [extract_sub_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/extract_sub_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_mc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/extract_sub_mc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_sc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/extract_sub_sc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/extract_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.1.0: Addition of an optional input pin to select frequencies from a unique step/RPM.


- [fc_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/fc_get_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' that returns a string and 'field_names' that returns a StringField.

  > 0.2.0: Add new supported property name 'num_fields' that returns an integer.


- [field_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/field_get_attribute.md)

  > 0.1.0: Add new supported property name 'datasize' that returns an integer.

  > 0.2.0: Add new supported property name 'data' that returns a vector of the field's data's type (double for field, int for property field, string for string field, char for custom type field).


- [for_each](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/for_each.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [forward](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/forward.md)

  > 1.0.0: Add ellipsis property to pins.


- [html_doc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/html_doc.md)

  > 0.1.0: Show operator version and changelog.

  > 0.1.1: Fix support for dollar LaTeX delimiters in MathJax.


- [ints_to_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/ints_to_scoping.md)

  > 0.1.0: Add input pin 2 to specify an upper bound to create a scoping for a given range (taking single input in pin 0 as the lower bound).


- [make_for_each_range](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/make_for_each_range.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_materials](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/merge_materials.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/merge_meshes.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Support merging the node to element connectivity.

  > 0.0.3: Fix merging empty meshes.

  > 0.0.4: Performance improvements.


- [merge_meshes_containers](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/merge_meshes_containers.md)

  > 0.0.1: Skip merge for identical meshes based on hash comparison.


- [merge_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/merge_scopings.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_time_freq_supports](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/merge_time_freq_supports.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [producer_consumer_for_each](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/producer_consumer_for_each.md)

  > 0.1.0: Addition of events to monitor the status of the operator.

  > 0.2.0: Moving event of progress bar at the beggining of the loop and changing input stream.


- [scalars_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/scalars_to_field.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [set_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/set_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' and 'field_names'.

  > 0.2.0: Add new supported property name 'unit' that sets a unit on each field.


- [strain_from_voigt_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r2/operator-specifications/utility/strain_from_voigt_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.




### Deleted operators

#### add_rigid_body_motion

#### add_rigid_body_motion_fc

#### cms_dst_table_provider

#### cms_matrices_provider

#### cms_subfile_info_provider

#### compute_invariant_terms_motion

#### compute_invariant_terms_rbd

#### compute_stress

#### compute_stress_1

#### compute_stress_2

#### compute_stress_3

#### compute_stress_von_mises

#### compute_stress_X

#### compute_stress_XY

#### compute_stress_XZ

#### compute_stress_Y

#### compute_stress_YZ

#### compute_stress_Z

#### compute_total_strain

#### compute_total_strain_1

#### compute_total_strain_2

#### compute_total_strain_3

#### compute_total_strain_X

#### compute_total_strain_XY

#### compute_total_strain_XZ

#### compute_total_strain_Y

#### compute_total_strain_YZ

#### compute_total_strain_Z

#### convertnum_bcs_to_nod

#### convertnum_nod_to_bcs

#### convertnum_op

#### eigen_vectors

#### eigen_vectors_fc

#### elastic_strain_rotation_by_euler_nodes

#### enf_rotation_by_euler_nodes

#### expansion_psd

#### fft

#### fft_approx

#### fft_eval

#### fft_gradient_eval

#### fft_multi_harmonic_minmax

#### gasket_deformation

#### gasket_deformation_X

#### gasket_deformation_XY

#### gasket_deformation_XZ

#### mapdl.global_to_nodal

#### mapdl.pres_to_field

#### mapdl.prns_to_field

#### mapdl.run

#### mapdl_material_properties

#### mapdl_section

#### mapdl_split_on_facet_indices

#### mapdl_split_to_acmo_facet_indices

#### matrix_inverse

#### mechanical::min_max_over_time

#### modal_superposition

#### nodal_moment

#### plastic_strain_rotation_by_euler_nodes

#### prep_sampling_fft

#### pretension

#### qr_solve

#### read_cms_rbd_file

#### remove_rigid_body_motion

#### remove_rigid_body_motion_fc

#### rigid_transformation_provider

#### rom_data_provider

#### stress_rotation_by_euler_nodes

#### svd

#### time_derivation

#### time_integration

#### total_mass

#### transform_invariant_terms_rbd

#### window_bartlett

#### window_bartlett_fc

#### window_blackman

#### window_blackman_fc

#### window_hamming

#### window_hamming_fc

#### window_hanning

#### window_hanning_fc

#### window_triangular

#### window_triangular_fc

#### window_welch

#### window_welch_fc

#### write_cms_rbd_file

#### write_motion_dfmf_file
