# Changelog

Changes for DPF 2027 R1 (2027.R1.SP00).

Updates are grouped by component and category: Features, Fixes, Changes, and Performance.

The following table shows the number of entries for each component and category.

| Component | Changes | Features | Fixes | Performance |
|-----------|----------|----------|----------|----------|
| abaqus |  |  | [1 item](#Fixes_abaqus) |  |
| cff |  |  | [1 item](#Fixes_cff) |  |
| compression |  | [4 items](#Features_compression) | [1 item](#Fixes_compression) |  |
| csharp |  | [8 items](#Features_csharp) | [4 items](#Fixes_csharp) |  |
| documentation |  |  | [1 item](#Fixes_documentation) |  |
| femutils | [1 item](#Changes_femutils) | [13 items](#Features_femutils) | [26 items](#Fixes_femutils) | [5 items](#Performance_femutils) |
| framework | [1 item](#Changes_framework) | [26 items](#Features_framework) | [49 items](#Fixes_framework) | [8 items](#Performance_framework) |
| grpc |  | [5 items](#Features_grpc) | [10 items](#Fixes_grpc) |  |
| hdf5 | [2 items](#Changes_hdf5) | [23 items](#Features_hdf5) | [26 items](#Fixes_hdf5) | [6 items](#Performance_hdf5) |
| hgp |  | [16 items](#Features_hgp) | [13 items](#Fixes_hgp) |  |
| livepost |  | [1 item](#Features_livepost) |  |  |
| lsdyna |  | [6 items](#Features_lsdyna) |  |  |
| mapdl | [3 items](#Changes_mapdl) | [23 items](#Features_mapdl) | [80 items](#Fixes_mapdl) | [7 items](#Performance_mapdl) |
| math |  | [5 items](#Features_math) | [3 items](#Fixes_math) | [1 item](#Performance_math) |
| mechanical |  | [2 items](#Features_mechanical) | [7 items](#Fixes_mechanical) |  |
| mesh |  | [6 items](#Features_mesh) | [5 items](#Fixes_mesh) |  |
| multiphysicsmapper |  | [3 items](#Features_multiphysicsmapper) | [3 items](#Fixes_multiphysicsmapper) |  |
| native | [2 items](#Changes_native) | [31 items](#Features_native) | [47 items](#Fixes_native) | [10 items](#Performance_native) |
| prime |  | [1 item](#Features_prime) | [2 items](#Fixes_prime) |  |
| pythonplugin |  |  | [2 items](#Fixes_pythonplugin) |  |
| rbd |  | [1 item](#Features_rbd) |  |  |
| vtk |  | [2 items](#Features_vtk) | [3 items](#Fixes_vtk) | [1 item](#Performance_vtk) |

## abaqus

### <a id="Fixes_abaqus"></a> Fixes

- Fix int connection to time_scoping pin for cyclic models:
  >
  >
  > If an integer different to 1 is connected to the time_scoping input pin for cyclic models, the results that will be read are the ones from time=1 either way. This is now fixed.
  >
  >
  >
  >

## cff

### <a id="Fixes_cff"></a> Fixes

- Adapt to Fluent 3D left-hand convention in face-nodes-connectivity:
  >
  >
  > The face to nodes connectivity is written in Fluent result files following a left-hand convention, which is the opposite to the expected behavior. The reader is adapted to reflect this change.
  >
  >
  >
  >

## compression

### <a id="Features_compression"></a> Features

- Accept double inputs on apply_svd pin 1:
  > The apply_svd operator now accepts a double on input pin 1 and rounds it to the truncation value.

- Add generic operators to compress fields and fields containers:
  > Create operators to compress and decompress data of fields and fields containers.
  >
  >
  >
  >

- Quantization operator enhancements:
  > - Added parallelization in _quantization_fc_
  >
  > - The loss of precision was at maximum half of the threshold, therefore computations has been changed to be just at the threshold in the worst case.
  >
  >
  >
  >

- Read and set fields-container names through attribute APIs:
  > Fields-container attribute APIs now support base_name and field_names for reading or setting the container's base name and individual field names.

### <a id="Fixes_compression"></a> Fixes

- Prevent from reading shell results without section.:
  > Shell result requests with multiple layer positions now raise an error when no shell section is associated.

## csharp

### <a id="Features_csharp"></a> Features

- Set ResultInfo main titles through client APIs:
  > HGP, C#, and gRPC clients can now assign a main title to ResultInfo metadata.

- Expose int and double vector inputs/outputs in managed client:
  >
  >
  > The .NET client now provides typed accessors for integer and double vector data. Operators and workflows can return `vector<int>` and `vector<double>` outputs through `GetOutputAsIntCollection` and `GetOutputAsDoubleCollection`, and a workflow input can be connected from a list of doubles. This matches the accessors already available for unsigned integer vectors and for scalar values.
  >
  >
  >
  >

- Add Operator.GetVersion():
  > Add a new `GetVersion` method to the `Operator` class in the DPF C# client API to request the version of the operator.
  >
  >
  >
  >

- Expose StringField to the C# client API:
  > Expose the StringField type to the DPF C# client API.
  >
  >
  >
  >

- Expose GenericDataContainer in the C# API:
  > C# users can now create and access GenericDataContainer objects through the DPF managed client API.

- Expose Any values through C# operators and workflows:
  > C# users can now wrap supported values in Any objects and connect or retrieve them through operators and workflows.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Add operator Changelog support to C#:
  > Support operator changelogs in the C# client API. Add the Changelog class.
  >
  >
  >
  >

### <a id="Fixes_csharp"></a> Fixes

- Expose the MultiPhysicsMapper plugin in C#:
  > The Windows plugin package now includes a generated C# wrapper for MultiPhysicsMapper, letting C# users access the plugin.

- Support workflow streams container inputs:
  >
  >
  > C# Workflow support for connecting StreamsContainer values to typed workflow inputs.
  >
  >
  >
  >

- Connect generic IronPython objects as operator inputs:
  > IronPython callers can connect dynamically typed values to operator inputs even when the input is not typed as `Any`. DPF still rejects values that do not match a supported input type.


- Add support for Surface3, Surface4, Surface6, and Surface8 eltypes in skin operator:
  >
  >
  > Add support for Surface3, Surface4, Surface6, and Surface8 element types in several operators: `meshed_skin_sector`, `mesh_to_graphics_edges`, `elements_volume`, `element_nodal_contribution`, and `integrate_over_elements`.
  >
  >
  >
  >

  >
  >

## documentation

### <a id="Fixes_documentation"></a> Fixes

- Fix inline dollar LaTex delimiters support in html_doc:
  > Fixes support for inline dollar LaTeX delimiters in operator "html_doc".
  >
  > Updates the "markdown_latex_example" operator description to correctly use bracket LaTeX delimiters.
  >
  > It also updates the "markdown_latex_example" operator and pin description rules concerning headings (minimum heading level 3 in operator description and no headings in pin descriptions) for a correct rendering in the Developer Portal DPF Framework documentation.
  >
  >
  >
  >

## femutils

### <a id="Changes_femutils"></a> Changes

- Clarify centroid algorithm and measure support with validation and tests:
  >
  >
  >
  >
  > This change improves the element centroid computation experience by clearly documenting supported input combinations, rejecting unsupported combinations with an explicit error, and expanding test coverage for centroid and measure outputs.
  >
  > It helps users understand which settings are valid and provides more predictable behavior when invalid combinations are requested.
  >
  >
  >
  >

### <a id="Features_femutils"></a> Features

- Accept field and time-frequency support inputs in modal_damping_ratio:
  > The modal_damping_ratio operator now accepts natural frequencies from a field or time-frequency support on input pin 0.

- Add total strain operator:
  >
  >
  >

- Typed exceptions in mesh::by_scoping and mesh::from_scopings:
  >
  >
  > `mesh::by_scoping` and `mesh::from_scopings` operators now throw structured, typed exceptions instead of generic errors. Each failure includes a human-readable description of what went wrong and an actionable suggestion to help users fix the issue.
  >
  >
  >
  >

- Use the definition from input stress field:
  > Vector principal stress results now retain the unit definition from the input stress field, so output units match the source field.

- Make from_scoping available at the entry licensing tier:
  > The from_scoping operator now uses the entry licensing tier instead of requiring the premium tier.

- Add beta support of thermal surface load elements SURF151 and SURF152:
  > Add beta support of thermal surface load elements SURF151 and SURF152
  >
  >
  >
  >

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Control rotations with Euler angles and inverse rotation:
  > Rotation operators now accept arbitrary Euler angles and an optional inverse_rotation input, allowing the requested rotation direction to be controlled.

- Add total strain operator:
  > DPF provides EL total-strain tensor and EL_EQV equivalent total-strain results. When the source lacks total strain directly, DPF assembles it from available elastic, plastic, creep, and thermal strain results.

- Extract mesh to rescope property fields & mesh to be read on nodal results from RST.:
  > Nodal result read from RST files now have an associated mesh support
  >
  > The mesh extraction operator now forward the input mesh property fields
  >
  >
  >
  >

- Optionally extend nodal_to_elemental_nodal results to midside nodes:
  > The nodal_to_elemental_nodal operator now accepts extend_to_mid_nodes; enabling it includes midside nodes, while the default remains corner nodes only.

### <a id="Fixes_femutils"></a> Fixes

- Adapt elemental_nodal_to_nodal to properly handle midside nodes:
  >
  >
  > The `elemental_nodal_to_nodal` averaging operators required to have all corner nodes corresponding to a midside node contained in the input nodal scoping if the result wanted to be obtained at that given midside node. This requirement is no longer present.
  >
  >
  >
  >

- Fix cyclic expansion for Nodal Integrated quantities:
  > Cyclic expansion now includes contributions from adjacent sectors for shared nodes and from center nodes within the selected bounds when computing nodal integrated quantities.

- Fix averaging operation of fields with data on Mid shell layer:
  > Fields with data on exclusively the Mid shell layer were incorrectly averaged. This is now fixed.

- Improving behavior of find_reduced_coordinates operator:
  > Improve element selection at boundaries using distance-based ranking of candidate elements, both for `find_reduced_coordinates` and `mapping` operator.
  >
  >

- Correct the nodal-scoping input specification:
  > The ElementalNodal_To_NodalElemental operator now describes its optional input as a nodal scoping filter and lists only the supported scoping type, so users no longer see a map input as valid.

- Preserve mapping labels for single coordinate field:
  >
  >
  > Mapping results preserve coordinate-region labels when evaluated at one coordinate field, matching behavior for multiple coordinate fields.
  >
  >
  >
  >

- ElementalNodal_to_NodalElemental operator failed to scope to the nodal scoping:
  > Fix missmatch between documentation and actual input situation of the ElementalNodal_to_NodalElemental (and fc) operators.
  >
  >
  >
  >

- Mark Poisson ratio optional in von_mises_eqv operators:
  > The von_mises_eqv and von_mises_eqv_fc specifications now mark Poisson ratio optional while preserving behavior when the input is omitted.

- Wrong shell results on skin with elemental averaging:
  >
  >
  > Mixed solid and shell meshes now retain correct shell-layer information when results are mapped to a skin, preventing incorrect downstream shell values during elemental conversion.
  >
  >
  >
  >

- Add support for missing element types in solid_to_skin:
  >
  >
  > All surface elements (and also point elements) are now supported in `solid_to_skin` operators.
  >
  >
  >
  >

- Support line elements in solid_to_skin:
  >
  >
  > Line elements (Line2, Line3, Edge2, Edge3) are now supported in `solid_to_skin` operators.
  >
  >
  >
  >

- Prevent intermittent parallel solid_to_skin_fc crashes:
  > The solid_to_skin_fc operator avoids intermittent crashes when results for multiple time steps or load cases are processed in parallel.

- Improve performance of Cyclic expansion of meshes and results:
  >
  >
  > Fix performance bottlenecks for large model in cyclic operators `cyclic_expansion_meshes` and `cyclic_expansion_field`.
  >
  >
  >
  >

- Fix issue in force_summation with total forces and no damping:
  > When damping results are absent, requesting total forces with force_summation now returns force and moment values instead of failing.

- Fixing memory overhead with ElementalNodal to Nodal results:
  > Improved memory management of the `elemental_nodal_To_nodal_fc` operator.
  >
  >

- Handle semiparabolic elements during elemental-nodal averaging:
  > The elemental_nodal_to_nodal operator now skips missing-node entries in semiparabolic elements, preventing invalid indexing during averaging.

- Fix structural-temperature extraction across multiple time steps:
  > Structural-temperature extraction no longer fails intermittently when processing multiple time steps in transient analyses.

- Support Surface element types  in the mapping and centroids operators:
  >
  >
  > Support Surface element types (Surface3, Surface4, Surface6 and Surface8 and its extensions with extra nodes) in "mapping", "find_reduced_coordinates", "on_reduced_coordinates", and "compute_element_centroids" operators.
  >
  >
  >
  >

- Fixing issues distorted elements in find_reduced_coordinates and mapping operators and numerical problems:
  > Fixing issue with distorted elements in `find_reduced_coordinates` and `mapping` operators and numerical problems.
  >
  >

- Reduce topology-optimization result-processing overhead:
  > Topology-optimization result processing now avoids unnecessary cyclic-scoping intersections, reducing repeated work when selecting requested results.

- Recognize additional mesh element shapes:
  > Mesh reads now classify joint, target, plane, and pipe elements using their correct shapes instead of returning unknown.

- Record ElementalMass for rth:
  > Make ElementalMass a source operator
  >
  > Make MaterialPropertyOfElement a source operator
  >
  >
  >
  >

- Include combined skin and plane elements in shape-based scoping:
  > Shape-based mesh scoping now includes elements carrying both skin and plane properties, preserving the expected selection.

- Rescope named selections during mesh extraction:
  > Mesh extraction and scoping now rescope named selections onto the output mesh instead of retaining selections from the source mesh.

- Add support for Surface3, Surface4, Surface6, and Surface8 eltypes in skin operator:
  >
  >
  > Add support for Surface3, Surface4, Surface6, and Surface8 element types in several operators: `meshed_skin_sector`, `mesh_to_graphics_edges`, `elements_volume`, `element_nodal_contribution`, and `integrate_over_elements`.
  >
  >
  >
  >

- Preserve input scoping support during rescoping:
  > Rescoping now validates source and destination locations without modifying the support attached to the input scoping.

### <a id="Performance_femutils"></a> Performance

- Improve performance for mesh operations:
  > Improvement in the performance for `split_mesh`, `meshes::by_scopings` and `mesh::by_scoping` operators for cases with non-shared scoping between property fields and mesh.
  >
  >

- Improve nodal_extend_to_mid_nodes processing:
  > The nodal_extend_to_mid_nodes operator now uses more efficient midside-node tracking to reduce repeated lookup work.

- Improve performance of solid_to_skin for Elemental and ElementalNodal fields:
  >
  >
  > Improve performance of solid_to_skin for Elemental and ElementalNodal fields containers.
  >
  >
  >
  >

- Improve performance of Rescope operators:
  >
  >
  > Performance improvements in the `Rescope`, `Rescope_pf`, `Rescope_ctf`, `rescope_fc` and `solid_to_skin_fc` operators.
  >
  >
  >
  >

- Perf improvement of mesh_to_pyvista:
  > Performance improvement of mesh_to_pyvista operator, up to a margin of 60%, was achieved especially when dealing with conversion between Dpf Meshed Regions and various VTK-native mesh formats.
  >
  >
  >
  >

## framework

### <a id="Changes_framework"></a> Changes

- Improve search tolerance for 3D elements in mapping and find_reduced_coordinates operators:
  >
  >
  > Improve search tolerance for 3D elements in `mapping` and `find_reduced_coordinates` operators, so elements that are far away from distorted elements are not wrongly identified as inside.
  >
  >
  >
  >

### <a id="Features_framework"></a> Features

- Set ResultInfo main titles through client APIs:
  > HGP, C#, and gRPC clients can now assign a main title to ResultInfo metadata.

- Support uint64 type:
  > Add framework and client support for uint64 and vector<uint64> as data type.
  >
  >
  >
  >

- Use the definition from input stress field:
  > Vector principal stress results now retain the unit definition from the input stress field, so output units match the source field.

- Add thermal-compliance homogeneity and units:
  > Thermal compliance is now available as a field homogeneity, with corresponding unit definitions exposed through the framework and HGP APIs.

- Expose StringField data offsets through HGP and gRPC:
  > The HGP StringField::dataPointer() API now returns entity start offsets in the flat data array, including for fields accessed through gRPC.

- Field MetaData as hashable objects:
  > Field definitions are now stored once when the same definition is used in multiple fields. Same goes for field headers.
  >
  >

- Add random-access operations to scoping iterators:
  > Scoping iterators now support arithmetic, indexing, comparisons, and distance calculations for use with standard C++ algorithms.

- Attach ply support according to field homogeneity:
  > MAPDL result fields now retain ply support when shell-position or layer counts vary, while homogeneous fields omit unnecessary support metadata.

- Add misc reaction results:
  > Addition of operators to read Radiation heat flow rate, convection heat flow rate and contact element heat flow
  >
  >
  >
  >

- Add beta support of structural surface load elements SURF153 and SURF154:
  > Addition of beta support for SURF153 & SURF154, these elements will now appear in the mesh and elemental results when applicable.
  >
  >
  >
  >

- Add beta support of thermal surface load elements SURF151 and SURF152:
  > Add beta support of thermal surface load elements SURF151 and SURF152
  >
  >
  >
  >

- Read complete result sets and select multi-RPM steps:
  > New readers collect all state variables, elemental nodal forces, or reactions into a fields container. Time-frequency extraction and integration also accept step selection for multi-RPM data.

- Read radiation-area results for SURF251 and SURF252:
  > The radiation_area operator reads elemental radiation-area results for SURF251 and SURF252 elements.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Enable cyclic expansion for composite datasources.:
  > Enable cyclic expansion for composite datasources.
  >
  > Enable cyclic expansion for plastic, thermal, accumulated equivalent plastic strain and elemental orientations. Accumulated equivalent plastic strain and Element Orientations will only account for harmonic 0 for expansion.
  >
  >
  >
  >

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Set DPF versioning to ansys calendar like versioning:
  >
  >
  > Set DPF versioning to Ansys calendar like versioning and add full version endpoints.
  >
  >
  >
  >

- Add total strain operator:
  > DPF provides EL total-strain tensor and EL_EQV equivalent total-strain results. When the source lacks total strain directly, DPF assembles it from available elastic, plastic, creep, and thermal strain results.

- Memory improvements for distributed data sources cases for results:
  > Memory efficiency improved for reading results for large distributed cases.
  >
  >

- Retrieve field counts and data sizes through attribute APIs:
  > The fc_get_attribute operator accepts num_fields to return the field count. Field attribute operators accept datasize to return the size of their data arrays.

- Read composite meshes incrementally by default:
  > Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during mesh loading.

- Add a dedicated matrix_product operator:
  > Adds a dedicated matrix_product operator as a helper to the generalized_inner_product for ease of use.
  >
  >
  >
  >

- Added "generic_data_container::get_attribute" and "generic_data_container::set_attribute":
  > Added the following APIs for Generic Data Container
  >
  > - "generic_data_container::get_attribute": returns a given attribute of the generic data container in input
  >
  > - "generic_data_container::set_attribute": creates a new generic data container or modifies the one in input
  >
  >
  >
  >

- Extract mesh to rescope property fields & mesh to be read on nodal results from RST.:
  > Nodal result read from RST files now have an associated mesh support
  >
  > The mesh extraction operator now forward the input mesh property fields
  >
  >
  >
  >

- Optionally extend nodal_to_elemental_nodal results to midside nodes:
  > The nodal_to_elemental_nodal operator now accepts extend_to_mid_nodes; enabling it includes midside nodes, while the default remains corner nodes only.

### <a id="Fixes_framework"></a> Fixes

- TestInput throws if upstream operator does not have output:
  > testInput was throwing if two operators were connected and the output of op1 was not defined and plug as an input of op2. For this specific usecase, the method return false now.
  >
  >
  >
  >

- Improving behavior of find_reduced_coordinates operator:
  > Improve element selection at boundaries using distance-based ranking of candidate elements, both for `find_reduced_coordinates` and `mapping` operator.
  >
  >

- Add support for missing element types in solid_to_skin:
  >
  >
  > All surface elements (and also point elements) are now supported in `solid_to_skin` operators.
  >
  >
  >
  >

- Support line elements in solid_to_skin:
  >
  >
  > Line elements (Line2, Line3, Edge2, Edge3) are now supported in `solid_to_skin` operators.
  >
  >
  >
  >

- Prevent intermittent parallel solid_to_skin_fc crashes:
  > The solid_to_skin_fc operator avoids intermittent crashes when results for multiple time steps or load cases are processed in parallel.

- Improve performance of Cyclic expansion of meshes and results:
  >
  >
  > Fix performance bottlenecks for large model in cyclic operators `cyclic_expansion_meshes` and `cyclic_expansion_field`.
  >
  >
  >
  >

- Escape structured exception JSON:
  >
  >
  >
  >
  > DPF now preserves multiline exception messages as valid structured JSON so client applications receive readable root-cause errors.
  >
  >
  >
  >

- Upstream cache fallback:
  > This PR fixes upstream cache fallback when a downstream workflow step is not cached. The lookup now continues upstream after a cache miss, allowing raw results to be reused when averaging changes at cache level 2. Downstream cache hits retain priority.
  >
  >
  >
  >

- Graphviz workflow exports after cached-step reconnection:
  > The export now discovers operators on a workflow copy before serializing the graph. This includes cached operators that were connected during evaluation but were not originally registered in the workflow, preventing incorrect edges to unrelated operators.
  >
  >
  >
  >

- Support Surface element types  in the mapping and centroids operators:
  >
  >
  > Support Surface element types (Surface3, Surface4, Surface6 and Surface8 and its extensions with extra nodes) in "mapping", "find_reduced_coordinates", "on_reduced_coordinates", and "compute_element_centroids" operators.
  >
  >
  >
  >

- Mechanical crashes when evaluating Python result with operator self connection:
  >
  >
  >
  >
  > Prevents invalid workflow graphs by rejecting direct and indirect connections that cause an operator to depend on itself.
  >
  >
  >
  >

- Enforce configured workflow-cache memory limits:
  > Workflow-step caching now enforces its configured memory limit and releases data held by evicted steps.

- Fix frequency unit for SOLVER_UMKS UnitSystem:
  >
  >
  > The frequency unit for the SOLVER_UMKS UnitSystem was incorrectly set to `MHz`. It has been corrected to `Hz`.
  >
  >
  >
  >

- Config passed to internal operators:
  > Fix operator configuration not being correctly passed to operators instantiated by some "_fc" operators.
  >
  >
  >
  >

- Fixing issues distorted elements in find_reduced_coordinates and mapping operators and numerical problems:
  > Fixing issue with distorted elements in `find_reduced_coordinates` and `mapping` operators and numerical problems.
  >
  >

- Prevent crashes when mapping solid results to skin meshes in parallel post-processing:
  > Mapping solid results to skin meshes no longer crashes during parallel post-processing across multiple time steps or load cases.

- Handle ASCII serialization line endings across operating systems:
  > ASCII serialization now handles LF and CRLF line endings consistently across operating systems. The existing version-1 loading path is preserved.

- Report invalid event-logging verbosity levels:
  > Event logging now raises an error for invalid verbosity levels instead of silently ignoring the invalid setting.

- Fix Heat Generation unit:
  > Resolve incorrect Heat Generation unit, should be Power/Volume, not Power.
  >
  >
  >
  >

- Expose native Any conversions:
  >
  >
  >
  >
  > Expose Any conversions for supported DPF entities across native in-process and gRPC backends, including typed collections and double vectors.
  >
  >
  >
  >

- Inconsistent behaviors with remote operators:
  > Remote workflows can include operators from different servers, even when their local IDs match, and retrieve forwarded field and string outputs.

- Complete the work to fully support GenericSupport as Any:
  > Users can wrap generic and cyclic support objects in Any values and pass them through gRPC APIs.

- Preserve field supports when copying to remote servers:
  > HGP Field::deep_copy now preserves field supports when copying local fields to a remote server.

- Fix delegateRun error forwarding:
  > When a delegated operator throws, its caller now receives a DpfException containing the delegated error message.

- Reevaluate downstream operators after input changes:
  > When operator inputs change, connected downstream operators now reevaluate and return results for the new inputs.

- Fixing non thread-safe methods of the mesh:
  > Fixing non-thread-safe methods of the mesh by using atomic variables.
  >
  >
  >
  >

- Follow-up on units:
  > Imperial energy units now use `in*lbf` and `ft*lbf`, while moment units retain `lbf*in` and `lbf*ft`.

- Complete unit strings for existing Unit Systems:
  >
  >
  > Unit strings are improved to get physical unit strings for all Ansys-supported Unit Systems. For example, for velocity in CGS system, `cm/s` is rendered instead of `cm*Hz`.
  >
  >
  >
  >

- Improve parallelization in several operators:
  >
  >
  > Multithreading parallelization has been enhanced in several operators making use of OpenMP.
  >
  >
  >
  >

- Improve area and volume calculation functions:
  > Generic polygon area and centroid calculations no longer include contributions from degenerate triangles.

- Complete unit strings for existing unit systems:
  > Unit-system lookup now recognizes complete unit strings, and existing systems return expected symbols for derived quantities such as energy, moment, and velocity.

- Add property-container access and correct MAPDL filtering:
  > External operators can now read and return PropertyFieldsContainer values. MAPDL filtering preserves field definitions for empty elemental results and omits the Overall and Unknown labels from filtered outputs.

- Preserve ply metadata during filtering:
  >
  >
  > Filtering MAPDL results changes both the entity scoping and, for mixed shell or ply models, the set of layered metadata that describes those entities. Treating empty, homogeneous, and heterogeneous fields identically can either lose metadata needed by downstream layer-aware operations or attach metadata that no longer matches the filtered field. This change preserves field data and scoping for empty results, retains ply-layer support for genuinely heterogeneous elemental output, and avoids unnecessary support on homogeneous output where it would add cost without representing useful variation.
  >
  >
  >
  >

- Recognize additional mesh element shapes:
  > Mesh reads now classify joint, target, plane, and pipe elements using their correct shapes instead of returning unknown.

- Fix performance issues with mode chunking:
  > Fix performance issues for Modal superposition with mode chunking option enabled
  >
  >
  >
  >

- Support ElementalNodal input fields in mapdl::split_on_facet_indices and mapdl::split_to_acmo_facet_indices:
  >
  >
  > ElementalNodal Fields are now supported in `mapdl::split_on_facet_indices` and `mapdl::split_to_acmo_facet_indices` operators.
  >
  >
  >
  >

- Rescope named selections during mesh extraction:
  > Mesh extraction and scoping now rescope named selections onto the output mesh instead of retaining selections from the source mesh.

- Reduce memory footprint of skin extraction op:
  > - This PR reduces the memory footprint of the ExtractSectorMeshedSkin operator.
  >
  >

- Generate safe DPF client API loading:
  >
  >
  > Generated Python bindings now load the native client API safely when multiple DPF servers are created or Python cleanup runs during initialization. Repeated loads of the same library are harmless, failed loads restore state, and native cleanup waits until bindings are ready.
  >
  >
  >
  >

- Preserve structured error details for operator inputs and outputs:
  > Some operator input connections and output reads now preserve nested exception details in structured form.

- Install DpfEmpty.xml in the utilities directory:
  > The Windows DPF package now includes DpfEmpty.xml in its utilities directory after installation.

- Fix CScopingProviderProperty for HDF5:
  >
  >
  > Support of HDF5 for CScopingProviderProperty for the properties **mapdl_element_type** and **material**
  >
  >
  >
  >

- Default serialization to binary and make deserializer format optional:
  > The serializer operator now defaults stream_type to binary (1) instead of ASCII (0). The deserializer stream_type input is optional.

- Preserve input scoping support during rescoping:
  > Rescoping now validates source and destination locations without modifying the support attached to the input scoping.

- Skip empty input fields in min_max_over_label_fc:
  >
  >
  > The `min_max_over_label_fc` operator now correctly handles fields containers that contain
  >
  > empty fields (fields with no data, such as those produced by unconverged time steps).
  >
  > Previously, empty fields caused spurious zero-valued entries in the min/max output.
  >
  > The operator now excludes domain IDs whose fields are entirely empty from the output,
  >
  > so the output scoping only contains the domain IDs for which actual data was available.
  >
  >
  >
  >

- Fix int connection to time_scoping pin for cyclic models:
  >
  >
  > If an integer different to 1 is connected to the time_scoping input pin for cyclic models, the results that will be read are the ones from time=1 either way. This is now fixed.
  >
  >
  >
  >

- Support float-aware time-scoping comparisons:
  > The compute_time_scoping operator now accepts time_freq_precision for float-aware comparisons, while keeping double precision as the default.

- Make element-shape scoping consistent for mixed meshes:
  > Element-shape scoping now handles mixed solid, shell, and skin meshes consistently when shell and skin selections are merged or kept separate.

- Correct residual-and-error scaling outputs:
  > The compute_residual_and_error operator returns correctly sized scaling-factor outputs. Overall-max normalization consistently returns fields containers.

### <a id="Performance_framework"></a> Performance

- Improve nodal_extend_to_mid_nodes processing:
  > The nodal_extend_to_mid_nodes operator now uses more efficient midside-node tracking to reduce repeated lookup work.

- Performance increase of CScoping::indexById:
  >
  >
  > Performance of the Scoping API `indexById` is increased for non-sparse large scopings.
  >
  >
  >
  >

- Cache the scoping hash so it can be reused:
  > Scoping index-table construction does less repeated work when matching unchanged source and destination scopings.

- Improve performance of GenPassOperators cache:
  > When a request selects one subset of entities, cached mode shapes are reused instead of being read repeatedly.

- Speed-up hasEntity API:
  > Checking whether an ID belongs to a scoping now takes less lookup work, especially for large scopings.

- Improve performance of Rescope operators:
  >
  >
  > Performance improvements in the `Rescope`, `Rescope_pf`, `Rescope_ctf`, `rescope_fc` and `solid_to_skin_fc` operators.
  >
  >
  >
  >

- Performance improvements for distributed data sources cases for mesh:
  > Performance improvements for distributed data sources cases for the mesh and merge mesh operator.
  >
  >

- Reuse named-selection metadata during distributed mesh reads:
  > Distributed mesh reads now cache named selections across domains, avoiding repeated metadata preparation for the same mesh.

## grpc

### <a id="Features_grpc"></a> Features

- Set ResultInfo main titles through client APIs:
  > HGP, C#, and gRPC clients can now assign a main title to ResultInfo metadata.

- Expose StringField data offsets through HGP and gRPC:
  > The HGP StringField::dataPointer() API now returns entity start offsets in the flat data array, including for fields accessed through gRPC.

- Support remote object identity comparisons:
  >
  >
  >
  >
  > Remote object identity comparisons now work for objects returned through gRPC operators.
  >
  >
  >
  >

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Read and set fields-container names through attribute APIs:
  > Fields-container attribute APIs now support base_name and field_names for reading or setting the container's base name and individual field names.

### <a id="Fixes_grpc"></a> Fixes

- Improve ref handling across gRPC servers:
  > Remote operators can now resolve FlatBuffers references created by another server through each reference's associated channel.

- Mechanical crashes when evaluating Python result with operator self connection:
  >
  >
  >
  >
  > Prevents invalid workflow graphs by rejecting direct and indirect connections that cause an operator to depend on itself.
  >
  >
  >
  >

- Prevent segfault when GC collects DPFVector during capi load_api:
  > Fix a potential Segmentation Fault in Python 3.11 when a second local gRPC server is started after having used DPF array data due to the garbage collector firing while initializing the server.
  >
  >
  >
  >

- Expose native Any conversions:
  >
  >
  >
  >
  > Expose Any conversions for supported DPF entities across native in-process and gRPC backends, including typed collections and double vectors.
  >
  >
  >
  >

- Inconsistent behaviors with remote operators:
  > Remote workflows can include operators from different servers, even when their local IDs match, and retrieve forwarded field and string outputs.

- Complete the work to fully support GenericSupport as Any:
  > Users can wrap generic and cyclic support objects in Any values and pass them through gRPC APIs.

- Preserve field supports when copying to remote servers:
  > HGP Field::deep_copy now preserves field supports when copying local fields to a remote server.

- Use absolute paths in the linux server launcher script:
  > The Linux server launcher resolves its script location to an absolute path before deriving installation and library paths. This keeps those paths anchored to the launcher when it is started from another working directory.

- Complete unit strings for existing Unit Systems:
  >
  >
  > Unit strings are improved to get physical unit strings for all Ansys-supported Unit Systems. For example, for velocity in CGS system, `cm/s` is rendered instead of `cm*Hz`.
  >
  >
  >
  >

- Complete unit strings for existing unit systems:
  > Unit-system lookup now recognizes complete unit strings, and existing systems return expected symbols for derived quantities such as energy, moment, and velocity.

## hdf5

### <a id="Changes_hdf5"></a> Changes

- Surface structured errors with context in h5dpf custom and make_result_file operators:
  >
  >
  > The `hdf5::h5dpf::custom` and `hdf5::h5dpf::make_result_file` operators now throw structured, typed exceptions when I/O errors, unknown format versions, invalid compression settings, or missing inputs occur. Each error includes a clear description of what went wrong, an actionable suggestion, and machine-readable attributes (identifier, compression level, threshold, etc.) for programmatic handling and localization.
  >
  >
  >
  >

- 4GB size limit of chunks and fix 1MB default size of chunks for compressed files:
  > 4GB size limit of chunks and fix 1MB default size of chunks for compressed files.
  >
  >

### <a id="Features_hdf5"></a> Features

- Implement shell_position_provider operator for h5 files:
  > Implement shell_position_provider operator for h5 files
  >
  >

- Add a time-frequency-support-only H5DPF append mode:
  > Setting append_mode to 2 now appends only time-frequency support when writing H5DPF data.

- Add FilterMaterialsData operator for materials data processing and expose them in h5dpf:
  > Expose materials data in H5DPF as a generic data container
  >
  >
  >
  >

- Create links between DataTrees to enhance HDFView visualization:
  > Improvement of the representation of DataTrees on H5DPF file. Deduplication of DataTrees when possible.
  >
  >
  >
  >

- Expose coordinate systems data in hdf5:
  > Make coordinate systems data available in hdf5 file, either from a migrate from rst file or a live analysis from mapdl.
  >
  >

- Avoid retaining large objects in H5DPF read caches:
  > H5DPF reads reuse live mesh objects without keeping result fields and meshes alive solely through strong cache references. Lightweight metadata and support objects remain cached.

- Replace stored fields in H5DPF fields containers:
  > H5DPF output now supports replacing existing fields in a fields container, including cases where fields are added or removed.

- Field MetaData as hashable objects:
  > Field definitions are now stored once when the same definition is used in multiple fields. Same goes for field headers.
  >
  >

- Monitor HDF5 files for newly written time steps:
  > The optional live-monitoring mode detects HDF5 file changes and makes newly written time steps available to subsequent reads.

- Adding API operators to expose tryGetDataFromCache:
  > Exposing `Streams` APIs `splitStreams`, `getStreamByFileType` and `tryGetDataFromCache` in `Hgp` to wrap functionalities.
  >
  >

- Include additional MAPDL mesh properties by default:
  > Default MAPDL mesh reads now include apdl_real_id, apdl_esys_id, and mapdl_element_type_id alongside the existing standard mesh properties.

- Add misc reaction results:
  > Addition of operators to read Radiation heat flow rate, convection heat flow rate and contact element heat flow
  >
  >
  >
  >

- Read complete result sets and select multi-RPM steps:
  > New readers collect all state variables, elemental nodal forces, or reactions into a fields container. Time-frequency extraction and integration also accept step selection for multi-RPM data.

- Read radiation-area results for SURF251 and SURF252:
  > The radiation_area operator reads elemental radiation-area results for SURF251 and SURF252 elements.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Enable cyclic expansion for composite datasources.:
  > Enable cyclic expansion for composite datasources.
  >
  > Enable cyclic expansion for plastic, thermal, accumulated equivalent plastic strain and elemental orientations. Accumulated equivalent plastic strain and Element Orientations will only account for harmonic 0 for expansion.
  >
  >
  >
  >

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Add config option to handle warnings / errors in migrate:
  > - Added an option to throw when an exception occurs during the migration in _hdf5::h5dpf::migrate_file_
  >
  >
  >
  >

- Read composite meshes incrementally by default:
  > Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during mesh loading.

- Raise H5DPF migration errors through warn_as_error:
  > H5DPF migration can now raise an exception when warn_as_error is enabled instead of continuing with a warning.

- Add customisation inputs to the solver_to_h5dpf workflow:
  >
  >
  > The `solver_to_h5dpf` workflow now has multiple customization inputs for compression, filtering, result selection, ...
  >
  >
  >
  >

- Adaptation of dequantization to the new threshold in quantization operator:
  > Fix in the quantization workflow due to changes in _quantization_ and _quantization_fc_ operators.
  >
  >
  >
  >

### <a id="Fixes_hdf5"></a> Fixes

- Fix destruction order mutex order:
  > Reading distributed HDF5 sources now keeps the mutex locked until stream cleanup completes, preventing a potential multithreading issue.

- Expose ENL results through H5DPF and export without time-frequency support:
  > The H5DPF reader now exposes ENL results, and result-file export accepts data sources without time-frequency support.

- Correct H5DPF links for generic data containers:
  > H5DPF serialization now creates valid links for generic data containers and data trees using their stored object paths.

- Moving new mesh methods to v6:
  > HDF5 readers now use cached mesh reads and named selections for version 6 and later, while version 5 retains its previous uncached behavior.

- Handle unavailable shell-position results in permissive mode:
  > In permissive mode, shell-position requests return an empty container for missing or unsupported HDF5 results instead of raising an error.

- Reuse time-frequency support when appending H5DPF results:
  > Appending time steps to H5DPF now reuses the existing time-frequency support instead of creating duplicate support groups.

- Avoid reading support (mesh) when mesh is given in input when reading unscoped results:
  > Avoid reading support (mesh) when mesh is given in input when reading unscoped results
  >
  >

- Fix a deadlock when merging distributed H5DPF files into one.:
  >
  >
  > Fix a potential deadlock in the HDF5 operators when writing H5DPF files with other H5DPF files as data source.
  >
  >
  >
  >

- Fix unintended lock on file:
  > After creating a result file, users can open it from another process without the writer keeping the file locked.

- Clarify default H5DPF export precision:
  > By default, H5DPF migration exports nodal results, mesh coordinates, and time-frequency data in double precision. Elemental results remain single precision.

- Set header for scoped results via HDF5 file:
  > Fix h5dpf results not rotated to global when a mesh scoping is used
  >
  >

- Select the highest time-step ID by default:
  > HDF5 result requests without time scoping now select the highest time-step ID, even when stored labels are not sorted.

- Fix non composites operators failing when connected with a distributed datasource:
  >
  >
  > Fixed an error when connecting a distributed data source as input of non distributed H5DPF operators without going through a stream provider.
  >
  >
  >
  >

- Skip empty results:
  >
  >
  > When migrating files to H5DPF, results providing an empty fields container are now skipped.
  >
  >
  >
  >

- Append restarted MAPDL results to existing H5DPF support:
  > Results from a restarted MAPDL analysis can now be appended to an H5DPF file while extending the original time-frequency support.

- Fix missing fields during append operation:
  > fix missing fields on HdfView under references group when using append operation
  >
  >

- Rewrite Nodal Averaged Results reader:
  > Result information now reports nodal averaged results as available when they are the only results in a file.

- Add missing beam section properties and Fix CBeamProperties Operator:
  > Add missing beam section properties in **sections_data_provider** operator
  >
  > Add section mesh to **sections_data_provider** operator
  >
  > Fix **CBeamProperties** to work with HDF5 Files
  >
  >
  >
  >

- Fix migration errors for MSUP expansion:
  > MSUP migration now includes result data needed to compute reaction forces and elemental nodal forces. GenPass no longer defaults to SI units, and force results use the appropriate unit system.

- Record ElementalMass for rth:
  > Make ElementalMass a source operator
  >
  > Make MaterialPropertyOfElement a source operator
  >
  >
  >
  >

- Using mapdl::rth::EUL_NOD gives error "fields container over time or frequency expected in input":
  > This PR fixes two defects in MAPDL nodal Euler-angle:
  >
  > 1. EUL_NOD failed  when requesting Euler-angle nodal results at a fractional time value on non-adaptive models --> "fields container over time or frequency expected in input" because the returned result did not carry the time label required by downstream time interpolation. The result now always carries the time label, so reading Euler angles at any time value works.
  >
  > 2. Body label lost when restricting to a single body. Asking for nodal Euler angles on a single body or material returned results labelled with body id 0 instead of the requested id. Multi-body requests were unaffected. Single-body requests now preserve the requested body / material id on every returned result, identically to the multi-body case.
  >
  > **No user-visible behaviour changes for adaptive analyses, multi-body requests, or pure rotation workflows.**

- Rescope named selections during mesh extraction:
  > Mesh extraction and scoping now rescope named selections onto the output mesh instead of retaining selections from the source mesh.

- Correct odd and even input-pin documentation:
  > Operator pin descriptions now distinguish odd and even pin positions correctly, matching the expected input ordering.

- Handle unavailable input in rotation operators:
  > Rotation operators now handle a null fields-container input without crashing when upstream results are unavailable.

- Fix CScopingProviderProperty for HDF5:
  >
  >
  > Support of HDF5 for CScopingProviderProperty for the properties **mapdl_element_type** and **material**
  >
  >
  >
  >

- Preserve input scoping support during rescoping:
  > Rescoping now validates source and destination locations without modifying the support attached to the input scoping.

### <a id="Performance_hdf5"></a> Performance

- Reduce repeated hashing during H5DPF migration:
  > H5DPF migration now avoids repeatedly hashing the same stored objects when writing shared data.

- Enhance performance of reading scoped results by remapping a previously pre-processed result onto a new data layout:
  > Enhance performance of reading scoped results by remapping a previously pre-processed result onto a new data layout
  >
  >

- Improving performance of reading scoped results with multiple time steps:
  > Reading scoped results from HDF5 files across multiple time steps is faster, so these result sets load sooner.

- Reduce repeated H5DPF reads and decompression:
  > H5DPF scoped-result reads group nearby data slices, reducing repeated file reads and decompression work.

- Reuse scoping preparation in composite result reads:
  > Composite result reads reuse transposed operations and apply requested scoping before reading data, reducing repeated processing.

- Reuse named-selection metadata during distributed mesh reads:
  > Distributed mesh reads now cache named selections across domains, avoiding repeated metadata preparation for the same mesh.

## hgp

### <a id="Features_hgp"></a> Features

- Set ResultInfo main titles through client APIs:
  > HGP, C#, and gRPC clients can now assign a main title to ResultInfo metadata.

- Add thermal-compliance homogeneity and units:
  > Thermal compliance is now available as a field homogeneity, with corresponding unit definitions exposed through the framework and HGP APIs.

- Expose StringField data offsets through HGP and gRPC:
  > The HGP StringField::dataPointer() API now returns entity start offsets in the flat data array, including for fields accessed through gRPC.

- Exposure of Property Fields Container in HGP:
  > Exposure of Property Fields Container in HGP.
  >
  >

- Adding API operators to expose tryGetDataFromCache:
  > Exposing `Streams` APIs `splitStreams`, `getStreamByFileType` and `tryGetDataFromCache` in `Hgp` to wrap functionalities.
  >
  >

- Make the HgP DpfVector iterators random-access:
  >
  >
  > Transform the  `DpfVector` iterators in the HgP to be random-access.
  >
  >
  >
  >

- Improve debugger inspection of HGP fields and meshes:
  > HGP debugger visualizers now display field, scoping, and mesh values with readable IDs, coordinates, element types, and properties.

- Add span() getter to DpfVector:
  >
  >
  > - The HGP API now exposes direct std::span accessors when building the C++20 standard
  >
  >
  >
  >

- Include additional MAPDL mesh properties by default:
  > Default MAPDL mesh reads now include apdl_real_id, apdl_esys_id, and mapdl_element_type_id alongside the existing standard mesh properties.

- Add beta support of thermal surface load elements SURF151 and SURF152:
  > Add beta support of thermal surface load elements SURF151 and SURF152
  >
  >
  >
  >

- Read complete result sets and select multi-RPM steps:
  > New readers collect all state variables, elemental nodal forces, or reactions into a fields container. Time-frequency extraction and integration also accept step selection for multi-RPM data.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Create a new operator to compute modal loads for MSUP workflow:
  > Modal superposition workflows can compute modal loads from mode shapes and external load vectors, with optional scaling and interpolation to requested time or frequency points.

- Addition of an operator for Edge Decimation:
  > Addition of a new operator "edge_decimation" that takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold.
  >
  >
  >
  >

- Read and set fields-container names through attribute APIs:
  > Fields-container attribute APIs now support base_name and field_names for reading or setting the container's base name and individual field names.

### <a id="Fixes_hgp"></a> Fixes

- Handle semiparabolic elements during elemental-nodal averaging:
  > The elemental_nodal_to_nodal operator now skips missing-node entries in semiparabolic elements, preventing invalid indexing during averaging.

- Graphviz workflow exports after cached-step reconnection:
  > The export now discovers operators on a workflow copy before serializing the graph. This includes cached operators that were connected during evaluation but were not originally registered in the workflow, preventing incorrect edges to unrelated operators.
  >
  >
  >
  >

- Fix Heat Generation unit:
  > Resolve incorrect Heat Generation unit, should be Power/Volume, not Power.
  >
  >
  >
  >

- Expose native Any conversions:
  >
  >
  >
  >
  > Expose Any conversions for supported DPF entities across native in-process and gRPC backends, including typed collections and double vectors.
  >
  >
  >
  >

- Complete the work to fully support GenericSupport as Any:
  > Users can wrap generic and cyclic support objects in Any values and pass them through gRPC APIs.

- Preserve field supports when copying to remote servers:
  > HGP Field::deep_copy now preserves field supports when copying local fields to a remote server.

- Fix delegateRun error forwarding:
  > When a delegated operator throws, its caller now receives a DpfException containing the delegated error message.

- Correct the hex20 element descriptor short name:
  > The HGP element descriptor for hex20 now returns hex20 as its short name instead of the incorrect pyramid13.

- Add natvis support for some CustomTypeField variants:
  > When inspecting a CustomTypeField in the debugger, users can view values for supported integer, floating-point, and complex data types.

- Complete unit strings for existing Unit Systems:
  >
  >
  > Unit strings are improved to get physical unit strings for all Ansys-supported Unit Systems. For example, for velocity in CGS system, `cm/s` is rendered instead of `cm*Hz`.
  >
  >
  >
  >

- Complete unit strings for existing unit systems:
  > Unit-system lookup now recognizes complete unit strings, and existing systems return expected symbols for derived quantities such as energy, moment, and velocity.

- Add property-container access and correct MAPDL filtering:
  > External operators can now read and return PropertyFieldsContainer values. MAPDL filtering preserves field definitions for empty elemental results and omits the Overall and Unknown labels from filtered outputs.

- Preserve endpoints in sampled scopings:
  > Reduced scopings now retain their first and last IDs while the operator samples IDs between those endpoints.

## livepost

### <a id="Features_livepost"></a> Features

- Read composite meshes incrementally by default:
  > Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during mesh loading.

## lsdyna

### <a id="Features_lsdyna"></a> Features

- Support d3plot DEM results:
  >

- Add support for the binout ssstat branch:
  >

- Add mesh scoping input for nodout operators:
  >

- Support binout elout branch for stress:
  >

- Set result names for fields containers:
  >

- Propagate d3plot title:
  >

## mapdl

### <a id="Changes_mapdl"></a> Changes

- Replace generic throws with structured exceptions in split_on_facet_indices:
  >
  >
  > Errors from the `mapdl::split_on_facet_indices` and `mapdl::split_to_acmo_facet_indices` operators now surface as structured, named exception types. Each error carries the operator name, the failing input pin name, and an actionable suggestion, making CGNS pressure-mapping failures distinguishable from upstream mesh errors.
  >
  >
  >
  >

- Officially not supporting files older than 14.5:
  > MAPDL Operators officially not supporting files older than version 14.5.
  >
  >
  >
  >

- Add missing input pins to EUL_NOD and coords_and_euler_nodes operator specs:
  >
  >
  > Fixed incomplete operator specifications for the `mapdl::rst::EUL_NOD` (node orientations) and `mapdl::rst::coords_and_euler_nodes` (euler nodes) operators. Both operators were missing several input pins from their specification, including `time_scoping`, `mesh_scoping`, `fields_container`, and `read_cyclic`. As a result, the operator graph visualization (`to_graphviz()`) did not show the mesh scoping pin for these operators. The mesh pin type constraint was also extended to accept `MeshesContainer` in addition to `MeshedRegion`.
  >
  >
  >
  >

### <a id="Features_mapdl"></a> Features

- Add FilterMaterialsData operator for materials data processing and expose them in h5dpf:
  > Expose materials data in H5DPF as a generic data container
  >
  >
  >
  >

- Expose coordinate systems data in hdf5:
  > Make coordinate systems data available in hdf5 file, either from a migrate from rst file or a live analysis from mapdl.
  >
  >

- Add Tshape to Apdl Element Descriptors:
  > Elements TARGE170 have a Tshape characteristics that needs to be saved in order to properly get the shape of the element.
  >
  > This PR adds a `APDLTargetShapeDetails` struct under `APDLElementDetails` to manage the shapeid of elements.
  >
  >
  >
  >

- Attach ply support according to field homogeneity:
  > MAPDL result fields now retain ply support when shell-position or layer counts vary, while homogeneous fields omit unnecessary support metadata.

- Include additional MAPDL mesh properties by default:
  > Default MAPDL mesh reads now include apdl_real_id, apdl_esys_id, and mapdl_element_type_id alongside the existing standard mesh properties.

- Support Pipe Sections and PIPE288/289:
  > - support reading of results from pipe288, pipe289 elements
  >
  > - support of pipe sections
  >
  >
  >
  >

- Add misc reaction results:
  > Addition of operators to read Radiation heat flow rate, convection heat flow rate and contact element heat flow
  >
  >
  >
  >

- Add beta support of structural surface load elements SURF153 and SURF154:
  > Addition of beta support for SURF153 & SURF154, these elements will now appear in the mesh and elemental results when applicable.
  >
  >
  >
  >

- Read elemental results on adaptive meshes:
  > MAPDL elemental results now use the geometry and time-labelled scoping for each result set when reading adaptive meshes.

- Add beta support of thermal surface load elements SURF151 and SURF152:
  > Add beta support of thermal surface load elements SURF151 and SURF152
  >
  >
  >
  >

- Read complete result sets and select multi-RPM steps:
  > New readers collect all state variables, elemental nodal forces, or reactions into a fields container. Time-frequency extraction and integration also accept step selection for multi-RPM data.

- Read radiation-area results for SURF251 and SURF252:
  > The radiation_area operator reads elemental radiation-area results for SURF251 and SURF252 elements.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Enable cyclic expansion for composite datasources.:
  > Enable cyclic expansion for composite datasources.
  >
  > Enable cyclic expansion for plastic, thermal, accumulated equivalent plastic strain and elemental orientations. Accumulated equivalent plastic strain and Element Orientations will only account for harmonic 0 for expansion.
  >
  >
  >
  >

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Add operators to read modal coordinates from RST/MODE/H5DPF files.:
  > Creation of operators allowing to read CMS modal coordinates from result files .rst,  .mode & .h5.
  >
  >
  >
  >

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- CMS nodal results to be filtered:
  > CMS nodal results to be filtered. For example, if user request rotation results, they will only be provided on nodes of elements having the rotations degree of freedom.
  >
  >
  >
  >

- Make mapdl_section_properties license-free:
  > The mapdl_section_properties operator no longer requires a DPF license checkout to return section properties.

- Add total strain operator:
  > DPF provides EL total-strain tensor and EL_EQV equivalent total-strain results. When the source lacks total strain directly, DPF assembles it from available elastic, plastic, creep, and thermal strain results.

- Read composite meshes incrementally by default:
  > Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during mesh loading.

- Read and set fields-container names through attribute APIs:
  > Fields-container attribute APIs now support base_name and field_names for reading or setting the container's base name and individual field names.

- Extract mesh to rescope property fields & mesh to be read on nodal results from RST.:
  > Nodal result read from RST files now have an associated mesh support
  >
  > The mesh extraction operator now forward the input mesh property fields
  >
  >
  >
  >

### <a id="Fixes_mapdl"></a> Fixes

- Fix cyclic expansion for Nodal Integrated quantities:
  > Cyclic expansion now includes contributions from adjacent sectors for shared nodes and from center nodes within the selected bounds when computing nodal integrated quantities.

- Fix composite nodal cyclic request by scoping:
  > Composite nodal cyclic requests with load vectors now handle nodes without matching result entries without invalid accesses, allowing available results to be expanded correctly.

- Prevent intermittent parallel solid_to_skin_fc crashes:
  > The solid_to_skin_fc operator avoids intermittent crashes when results for multiple time steps or load cases are processed in parallel.

- Fix issue in force_summation with total forces and no damping:
  > When damping results are absent, requesting total forces with force_summation now returns force and moment values instead of failing.

- Handle semiparabolic elements during elemental-nodal averaging:
  > The elemental_nodal_to_nodal operator now skips missing-node entries in semiparabolic elements, preventing invalid indexing during averaging.

- Mechanical crashes when evaluating Python result with operator self connection:
  >
  >
  >
  >
  > Prevents invalid workflow graphs by rejecting direct and indirect connections that cause an operator to depend on itself.
  >
  >
  >
  >

- Fix Heat Generation unit:
  > Resolve incorrect Heat Generation unit, should be Power/Volume, not Power.
  >
  >
  >
  >

- Reevaluate downstream operators after input changes:
  > When operator inputs change, connected downstream operators now reevaluate and return results for the new inputs.

- Complete unit strings for existing Unit Systems:
  >
  >
  > Unit strings are improved to get physical unit strings for all Ansys-supported Unit Systems. For example, for velocity in CGS system, `cm/s` is rendered instead of `cm*Hz`.
  >
  >
  >
  >

- Complete unit strings for existing unit systems:
  > Unit-system lookup now recognizes complete unit strings, and existing systems return expected symbols for derived quantities such as energy, moment, and velocity.

- Return empty container when GCD property is not found:
  > When a requested model property is missing, the reader returns an empty container in permissive mode instead of throwing an error.

- Elements can have incorrect section type attached:
  > MAPDL result filtering now applies section-specific rules only when an element type supports that section, preventing unrelated section types from affecting stress results.

- Cyclic support of CMS superelements not supported:
  > Cyclic support now reports an explicit error when it encounters a CMS stage, which is not currently supported.

- Improve Composite operator batch-merging and add domain decomposition detection:
  > Composite MAPDL results now distinguish spatially partitioned data from frequency- or cyclic-decomposed streams when assembling meshes, avoiding spatial merging for shared meshes.

- Rewrite Nodal Averaged Results reader:
  > Result information now reports nodal averaged results as available when they are the only results in a file.

- Add missing beam section properties and Fix CBeamProperties Operator:
  > Add missing beam section properties in **sections_data_provider** operator
  >
  > Add section mesh to **sections_data_provider** operator
  >
  > Fix **CBeamProperties** to work with HDF5 Files
  >
  >
  >
  >

- Add property-container access and correct MAPDL filtering:
  > External operators can now read and return PropertyFieldsContainer values. MAPDL filtering preserves field definitions for empty elemental results and omits the Overall and Unknown labels from filtered outputs.

- Do not filter nodal results based on MESH200 & properly account for TSHAPE on rotation dofs:
  > MAPDL nodal filtering no longer discards results because a mesh contains MESH200 elements. For rotation results, target elements contribute only when their shape is PILO. If the supplied mesh lacks element-type or target-shape properties, the reader gets them from the result streams.

- Disable unsupported SOLID272 and SOLID273 descriptors:
  > MAPDL processing no longer uses the SOLID272 and SOLID273 element descriptors that caused the reported access violations.

- Fix migration errors for MSUP expansion:
  > MSUP migration now includes result data needed to compute reaction forces and elemental nodal forces. GenPass no longer defaults to SI units, and force results use the appropriate unit system.

- Filter EPEL_EQV for Beams:
  > Beam elemental results with any component count other than six are filtered out, so scalar equivalent-strain results such as EPEL_EQV return no beam entities.

- Restore performance of large MSUP evaluations:
  > Large modal superposition evaluations avoid unnecessary repeated work for composite results, reducing evaluation overhead.

- PRRSOL reading scientific format files:
  > The PRRSOL reader now parses reaction values written in scientific notation correctly, so extracted reaction results match reference values.

- Correction of export MAPDL Radiation results to H5DPF from MAPDL:
  > Radiation results from MAPDL are now included in H5DPF files created by result export.

- Validate RST result extraction:
  >
  >
  > MAPDL result extraction now preserves field-level ply support when adaptive result fields contain mixed shell and solid layouts, while keeping support metadata aligned with the entities stored in each field.
  >
  >
  >
  >

- Fix target shape of PLANE293 for keyopt(1) = 1:
  > Fix target shape of PLANE293 for keyopt(1) = 1
  >
  >
  >
  >

- Reduce topology-optimization result-processing overhead:
  > Topology-optimization result processing now avoids unnecessary cyclic-scoping intersections, reducing repeated work when selecting requested results.

- Preserve ply metadata during filtering:
  >
  >
  > Filtering MAPDL results changes both the entity scoping and, for mixed shell or ply models, the set of layered metadata that describes those entities. Treating empty, homogeneous, and heterogeneous fields identically can either lose metadata needed by downstream layer-aware operations or attach metadata that no longer matches the filtered field. This change preserves field data and scoping for empty results, retains ply-layer support for genuinely heterogeneous elemental output, and avoids unnecessary support on homogeneous output where it would add cost without representing useful variation.
  >
  >
  >
  >

- Fix throw when reading unexisting set for mapdl rst nodal results.:
  > Fix throw when reading unexisting set for mapdl rst nodal results.
  >
  >
  >
  >

- Filter result info for MSUP & CMS on expandable results:
  > MSUP and CMS expansion result information now includes only results that have available expansion operators.

- Do not filter reaction results:
  > Do not filter reaction results in MAPDL.
  >
  > Creation of `PRRS_Reader` operator to read output from PRRSOL command.
  >
  >
  >
  >

- Recognize additional mesh element shapes:
  > Mesh reads now classify joint, target, plane, and pipe elements using their correct shapes instead of returning unknown.

- Support reading of mode coefficients and modal damping in spectrum_data:
  > Fix reading of mode coefficients and modal damping ratios from .mode file in spectrum_data operator.
  >
  > Also, fix reading of participation factors for complex modes (from damped modal analysis).
  >
  >
  >
  >

- Filter temperature contributions from radiation elements:
  > MAPDL temperature results now exclude SURF251 and SURF252 radiation-element contributions while preserving filtering behavior for other result types.

- Filter unsupported TARGE170 ECT Results (fixed):
  > When reading MAPDL results, DPF excludes unsupported ECT results for TARGE169 and TARGE170 elements. It still returns ECT_FRES fluid-pressure results for those elements.

- Crash when trying to read results of an unconverged solution:
  > When trying to get a result for empty sets only, the operator returns a fields container with empty fields instead of crashing.
  >
  >
  >
  >

- Filter unsupported TARGE170 ECT Results':
  >  (for the DPF release notes and external users
  >
  >
  >
  >

- Filter unsupported TARGE170 ECT Results:
  > ECT result fields now exclude TARGE169 and TARGE170 elements when those results are unsupported, while fluid-pressure results remain available.

- PRES_reader doesn't read all nodes:
  > - The operator _PRES_reader_ was stopping reading data when the list of nodes of an element was split by some text.
  >
  > - Exposed pin 2 to specify element types to ignore which was missing in the specification
  >
  >
  >
  >

- Read reaction forces for axisymmetric planes with torsion:
  > Reaction-force reads now handle noncontiguous nodal degrees of freedom, including axisymmetric plane elements with torsion.

- Fix MSUP expansion with partial modal coordinates scoping:
  > Fix wrong results in MSUP expansion when both of the two following conditions are met:
  >
  > - the use pass data source (.rfrq or .rdsp file) does not contain the modal coordinates for all the modes stored in the generation pass data source (.mode file )
  >
  > - the N stored modal coordinates do not correspond to the N first modes in the generation pass data source
  >
  > Typical examples of this issue are:
  >
  > - MSUP expansion is performed with the set of modes from min_mode to max_mode and min_mode > 1
  >
  > - Modal analysis contains both residual vectors and static shapes (enforced motion) and MSUP expansion is performed without the residual vectors

- Fix performance issues with mode chunking:
  > Fix performance issues for Modal superposition with mode chunking option enabled
  >
  >
  >
  >

- Elemental nodal forces not available on PILO elements:
  > Skip TARGE elements with PILO shape in ENF filtering function
  >
  >
  >
  >

- Correct elemental nodal force filtering for torsional planes:
  > Elemental nodal force and moment results now map torsional degrees of freedom to the correct components for axisymmetric plane elements.

- Fix mapdl run crash on filtering ENF for contact elements.:
  > Fix mapdl run crash on filtering ENF for contact elements.
  >
  >
  >
  >

- Correction of some integrated quantities:
  > MAPDL radiation and convection heat-flow results now produce nodal values consistent with averaging their corresponding elemental heat results. Integrated quantity classification applies consistently at elemental and nodal locations.

- Record ElementalMass for rth:
  > Make ElementalMass a source operator
  >
  > Make MaterialPropertyOfElement a source operator
  >
  >
  >
  >

- Withdraw public exposure of mapdl_split_on_facet_indices:
  > The mapdl_split_on_facet_indices operator is now private and is no longer exposed as a public operator.

- Fix ElementalNodal data reordering in mapdl::split_on_facet_indices:
  >
  >
  > Fix ElementalNodal data reordering in `mapdl::split_on_facet_indices`. This operators handled the facet id differences between DPF convention and MAPDL convention. However, for 2 given equivalent DPF and MAPDL element facets, the node ordering between the faces also differs, which affects ElementalNodal fields. This is now fixed.
  >
  >
  >
  >

- Set the location to the scoping of nodal euler angle:
  >
  >
  > Correctly set the location of the scoping of the output of the Nodal Euler Angle operator.
  >
  >
  >
  >

- Fix crash during MAC evaluation:
  > For rst without any time step defined, we did not output euler angles (skip the process). The fix was just to set up properly the time step needed in the method regarding if the mesh is adaptive or if the rst has a timeStep defined in it (if not, set a default one).
  >
  >
  >
  >

- Fix corrupted ENF fields and wrong fsum in transient analysis with contact results:
  > When reading element nodal forces results on contacts, they might lack damping and inertia components in an analysis with damping and inertia, writing incorrect fields and wrong force_summation results. The damping and inertia results are now 0.
  >
  > For result files where the analysis cannot be determined (transient analysis before mapdl 242), the damping and inertia results are not available.

- Correct material_property_of_element input documentation:
  > The result.material_property_of_element specification now documents optional mesh_scoping, required property_name, optional default_value, and optional filter_zero_values. Zero-value filtering applies when no default is supplied.

- Using mapdl::rth::EUL_NOD gives error "fields container over time or frequency expected in input":
  > This PR fixes two defects in MAPDL nodal Euler-angle:
  >
  > 1. EUL_NOD failed  when requesting Euler-angle nodal results at a fractional time value on non-adaptive models --> "fields container over time or frequency expected in input" because the returned result did not carry the time label required by downstream time interpolation. The result now always carries the time label, so reading Euler angles at any time value works.
  >
  > 2. Body label lost when restricting to a single body. Asking for nodal Euler angles on a single body or material returned results labelled with body id 0 instead of the requested id. Multi-body requests were unaffected. Single-body requests now preserve the requested body / material id on every returned result, identically to the multi-body case.
  >
  > **No user-visible behaviour changes for adaptive analyses, multi-body requests, or pure rotation workflows.**

- Correct PLANE183 topology for KEYOPT(1)=1:
  > PLANE183 elements configured with KEYOPT(1)=1 are now identified as six-node triangular elements instead of eight-node quadrilaterals.

- Remove redundant prefixes from result operator scripting names:
  > Operator scripting names now use pres_to_field, prns_to_field, run, and global_to_nodal without the redundant mapdl. prefix.

- Fix modal solution scoping for MCF_Legacy filtering:
  > Modal filtering now aligns solution data to requested entities before selection, preventing incorrect results when solution and request use different scopings.

- Support ElementalNodal input fields in mapdl::split_on_facet_indices and mapdl::split_to_acmo_facet_indices:
  >
  >
  > ElementalNodal Fields are now supported in `mapdl::split_on_facet_indices` and `mapdl::split_to_acmo_facet_indices` operators.
  >
  >
  >
  >

- Fix crash when reading elemental results due to TSHAPE mapping:
  > Elemental result reads now carry TSHAPE through element details, preventing crashes for results that use these mappings.

- Remove unintended labels from single-scoping beam results:
  > Beam-result queries using a single scoping now return a fields container with only the time label, instead of adding an unintended location label.

- Fix order mode coefficients.:
  > When modal solution IDs arrive in a different order, MAPDL returns filtered modal coefficients in the requested order, preserving their association with each mode.

- Add TARGE170 to loading mesh descriptors:
  > Add TARGE170 elements to loading mesh, the mesh used by the Boundary Conditions operator.
  >
  >
  >
  >

- Prevent from reading shell results without section.:
  > Shell result requests with multiple layer positions now raise an error when no shell section is associated.

- Register corner_nodes_mapping_provider:
  > MAPDL workflows can now access the corner_nodes_mapping_provider operator for corner-node mapping.

- Fix filtering of EUL for high-order old generation elements:
  > Fix filtering of euler angles for high-order old generation elements
  >
  >
  >
  >

- PreProcess Mode Shapes record positions:
  > Mode-shape requests now find the correct records for requested mode IDs in both local and upstream mode files.

- Wrong update concerning shell layers:
  > Wrong update is done while looping over elemental results concerning shell layer. We update the number of shell layer when this is not allowed regarding the post process that is done after reading the result.
  >
  >
  >
  >

- Fix possible out of bounds when reading RST and DSUB files:
  >
  >
  > Fix possible out of bounds accesses when reading dsub files or corrupted rst files
  >
  >
  >
  >

- Select NMISC and SMISC components through item_index:
  > The nmisc and smisc operators accept scalar or vector item_index values for component selection; the num_components input pin is removed.

- Correct results for degenerate gasket elements:
  > MAPDL result filtering now returns correctly mapped values for degenerate gasket elements configured with KEYOPT(2)=0.

- Revert the earlier skin-extraction memory optimization:
  > The skin operator restores its earlier extraction behavior by reverting the previous memory-usage optimization.

- Add support for Surface3, Surface4, Surface6, and Surface8 eltypes in skin operator:
  >
  >
  > Add support for Surface3, Surface4, Surface6, and Surface8 element types in several operators: `meshed_skin_sector`, `mesh_to_graphics_edges`, `elements_volume`, `element_nodal_contribution`, and `integrate_over_elements`.
  >
  >
  >
  >

- Reduce memory footprint of skin extraction op:
  > - This PR reduces the memory footprint of the ExtractSectorMeshedSkin operator.
  >
  >

- Elastic_strain_eqv operator is now available for modal results:
  > elastic_strain_eqv MAPDL operator was not accessible for modal results, this is now fixed.
  >
  >
  >
  >

- Ignore the rotation to global in PSD and Spectrum analysis:
  > PSD and Spectrum results are not rotated to the global coordinate system even when rotation is requested.

- Check all files from the DataSource for result availability:
  > Availability checks now inspect every file in a composite data source, so results present only in later files are recognized instead of triggering fallback computation.

- Fixing issue with composite results without previously calling the mesh provider operator:
  > Fixing issue with composite results without previously calling the mesh provider operator.
  >
  >

- Preserve input scoping support during rescoping:
  > Rescoping now validates source and destination locations without modifying the support attached to the input scoping.

- Fix int connection to time_scoping pin for cyclic models:
  >
  >
  > If an integer different to 1 is connected to the time_scoping input pin for cyclic models, the results that will be read are the ones from time=1 either way. This is now fixed.
  >
  >
  >
  >

- Support float-aware time-scoping comparisons:
  > The compute_time_scoping operator now accepts time_freq_precision for float-aware comparisons, while keeping double precision as the default.

### <a id="Performance_mapdl"></a> Performance

- Improve performance of GenPassOperators cache:
  > When a request selects one subset of entities, cached mode shapes are reused instead of being read repeatedly.

- Avoid re-getting nodal solution:
  > Fix performance issue for nodal results when a scopings container with multiple scopings is passed to the mesh scoping input
  >
  >

- Performance issue on node filtering operator:
  > When filtering nodal results across time steps with the same mesh and scoping, repeated requests avoid redundant processing.

- Improve performance when reading elemental results:
  > Reading elemental results from MAPDL result files is faster when previously loaded mesh data can be reused.

- Avoid loop on all nodes when getting only non zero nodal euler angles:
  > For unscoped requests for only nonzero nodal Euler angles, the reader returns matching values without scanning every node in the result file.

- Reuse scoping preparation in composite result reads:
  > Composite result reads reuse transposed operations and apply requested scoping before reading data, reducing repeated processing.

- Reuse named-selection metadata during distributed mesh reads:
  > Distributed mesh reads now cache named selections across domains, avoiding repeated metadata preparation for the same mesh.

## math

### <a id="Features_math"></a> Features

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Add optimizeWorkflow operator:
  > Add an optimization operator that supports minimizing or maximizing an objective function, as well as driving it toward a target value. The objective function can take input variables of type integer or double.
  >
  >
  >
  >

- Update expansion::psd operator to compute response PSD:
  > In addition to 1-sigma response, expansion::psd operator now allows to compute response PSD from mode shapes and modal PSD matrices or from harmonic analysis results and input PSD matrix
  >
  >
  >
  >

- Accept custom-type containers in modal-superposition expansion:
  > Modal-superposition expansion now accepts custom type fields containers for the modal basis, modal-space solution, and incremental result inputs.

- Create a new operator to compute modal loads for MSUP workflow:
  > Modal superposition workflows can compute modal loads from mode shapes and external load vectors, with optional scaling and interpolation to requested time or frequency points.

### <a id="Fixes_math"></a> Fixes

- Fix migration errors for MSUP expansion:
  > MSUP migration now includes result data needed to compute reaction forces and elemental nodal forces. GenPass no longer defaults to SI units, and force results use the appropriate unit system.

- Correct modal-expansion configuration defaults:
  > Thread count defaults to zero, and parallel input reading defaults to disabled in modal-expansion specifications.

- Correct residual-and-error scaling outputs:
  > The compute_residual_and_error operator returns correctly sized scaling-factor outputs. Overall-max normalization consistently returns fields containers.

### <a id="Performance_math"></a> Performance

- Improve performance of optimizer through cache of cost:
  > When an optimizer evaluates the same variable values again, DPF reuses the cached cost instead of evaluating the objective workflow again, reducing repeated objective evaluations.

## mechanical

### <a id="Features_mechanical"></a> Features

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Adding operator for finding number of modes per chunk:
  > Add new operators to calculate number of modes that can be evaluated per chunk based on the result mesh and the available memory on the user's machine.
  >
  >
  >
  >

### <a id="Fixes_mechanical"></a> Fixes

- Apply magnitude-preserving offset for AddFCMechanical:
  >
  >
  > Fixed offset handling in AddFCMechanical for vector-valued fields. The update preserves the original vector direction while applying offsets by adjusting the vector magnitude
  >
  >
  >
  >

- Raise error message for missing fields in mechanical::time_freq_interpolation:
  > Time-frequency interpolation now raises an error when reordering leaves fields missing from the output.

- Fix the amplitude calculation for complex fields on shell nodes:
  > Amplitude calculations now handle complex shell-node results with top and bottom values stored under one node ID.

- Fix documentation generation of mechanical::linearized_stress:
  > The linearized stress operator now appears in generated documentation and is available through the Python API.

- Handle missing and non-shell support in shell operators:
  > Shell operators now handle fields with missing or non-shell support without adding duplicate scoping IDs.

- Revert the earlier skin-extraction memory optimization:
  > The skin operator restores its earlier extraction behavior by reverting the previous memory-usage optimization.

- Reduce memory footprint of skin extraction op:
  > - This PR reduces the memory footprint of the ExtractSectorMeshedSkin operator.
  >
  >

## mesh

### <a id="Features_mesh"></a> Features

- Add beta support of thermal surface load elements SURF151 and SURF152:
  > Add beta support of thermal surface load elements SURF151 and SURF152
  >
  >
  >
  >

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Addition of an operator for Edge Decimation:
  > Addition of a new operator "edge_decimation" that takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold.
  >
  >
  >
  >

- Support elements with dropped nodes in skin operator:
  >
  >
  > Fix bug in `skin` operator for elements with dropped nodes (the operator correctly skins them now).
  >
  >
  >
  >

- Improvement of wireframe operator, now working with shells and beams.:
  > wireframe operator is improved: it can now treat shell and beam elements. An additional optional pin is added to let the user restrict the list of elements that must be treated by the wireframe operator. This allow, for instance, to remove unwanted bodies or unwanted elements from the process (like contact elements or surface load elements).
  >
  >
  >
  >

- Extract mesh to rescope property fields & mesh to be read on nodal results from RST.:
  > Nodal result read from RST files now have an associated mesh support
  >
  > The mesh extraction operator now forward the input mesh property fields
  >
  >
  >
  >

### <a id="Fixes_mesh"></a> Fixes

- Revert the earlier skin-extraction memory optimization:
  > The skin operator restores its earlier extraction behavior by reverting the previous memory-usage optimization.

- Rescope named selections during mesh extraction:
  > Mesh extraction and scoping now rescope named selections onto the output mesh instead of retaining selections from the source mesh.

- Add support for Surface3, Surface4, Surface6, and Surface8 eltypes in skin operator:
  >
  >
  > Add support for Surface3, Surface4, Surface6, and Surface8 element types in several operators: `meshed_skin_sector`, `mesh_to_graphics_edges`, `elements_volume`, `element_nodal_contribution`, and `integrate_over_elements`.
  >
  >
  >
  >

- Add support for edge2, edge3, beam3 and beam4 eltypes in skin operator:
  >
  >
  > The skin operator was not propagating the `edge2`, `edge3` and `beam4` element types to the skin mesh. This is now fixed.
  >
  >
  >
  >

- Reduce memory footprint of skin extraction op:
  > - This PR reduces the memory footprint of the ExtractSectorMeshedSkin operator.
  >
  >

## multiphysicsmapper

### <a id="Features_multiphysicsmapper"></a> Features

- Support loads with Apply To = Elements:
  >
  >
  >

- Support operators for convection load:
  > - Introduced new multiphysics workflow operators that contains one prepare opeartor and two apply operators to interpolate for two different quantities.
  >
  >
  >
  >

- Support shell offset field (plugins):
  >
  >
  >

### <a id="Fixes_multiphysicsmapper"></a> Fixes

- Kriging (Volumetric/Surface) Import Failure for Coordinates inputs instead of MeshedRegion:
  > Fix several issues in operator **prepare_mechanical_native_mapping_kriging**.
  >
  > **Problem:** Two related failures were found in the MultiphysicsMapper plugin when using the Kriging weighting method:
  >
  > 1. Load import failure with Kriging (Volumetric/Surface): The PrepareMappingKriging operator worked correctly when the source was provided as a full MeshedRegion, but failed when the source was defined by node coordinates only (i.e., a coordinate Field without a full mesh).
  >
  > 2. Kriging import failure for CGNS-based CFD Pressure: The same root cause affected CGNS-based CFD Pressure loads, which provide only node coordinates (no full mesh) for source/target mesh data in the Kriging workflow.
  >
  > 3. Elemental data not forwarded during element centroidal mapping: the condition to populate source mesh data only handled nodal location data, ignoring elemental location data.

- Fix the effect of input pin pinball_key in operator prepare_mechanical_native_mapping_shape_functions_for_surfaces:
  > Fix the effect of input pin `pinball_key` on the algorithm of operator prepare_mechanical_native_mapping_shape_functions_for_surfaces.
  >
  >
  >
  >

- Fix random Linux crash in mechanical_native_mapping::apply:
  >
  >
  > Fix random Linux crash in mechanical_native_mapping::apply
  >
  >
  >
  >

## native

### <a id="Changes_native"></a> Changes

- Clarify default averaging for component and principal results:
  > Component and principal-result operator descriptions now state that results are averaged at nodes by default when no target location is supplied.

- Make split_vector_elements and concatenate_objects_to_vector operators private:
  >
  >
  > Make `split_vector_elements` and `concatenate_objects_to_vector` operators private.
  >
  >
  >
  >

### <a id="Features_native"></a> Features

- Expose Any values through C# operators and workflows:
  > C# users can now wrap supported values in Any objects and connect or retrieve them through operators and workflows.

- Add a time-frequency-support-only H5DPF append mode:
  > Setting append_mode to 2 now appends only time-frequency support when writing H5DPF data.

- Add FilterMaterialsData operator for materials data processing and expose them in h5dpf:
  > Expose materials data in H5DPF as a generic data container
  >
  >
  >
  >

- Expose coordinate systems data in hdf5:
  > Make coordinate systems data available in hdf5 file, either from a migrate from rst file or a live analysis from mapdl.
  >
  >

- Adding API operators to expose tryGetDataFromCache:
  > Exposing `Streams` APIs `splitStreams`, `getStreamByFileType` and `tryGetDataFromCache` in `Hgp` to wrap functionalities.
  >
  >

- Attach ply support according to field homogeneity:
  > MAPDL result fields now retain ply support when shell-position or layer counts vary, while homogeneous fields omit unnecessary support metadata.

- Include additional MAPDL mesh properties by default:
  > Default MAPDL mesh reads now include apdl_real_id, apdl_esys_id, and mapdl_element_type_id alongside the existing standard mesh properties.

- Add misc reaction results:
  > Addition of operators to read Radiation heat flow rate, convection heat flow rate and contact element heat flow
  >
  >
  >
  >

- Read complete result sets and select multi-RPM steps:
  > New readers collect all state variables, elemental nodal forces, or reactions into a fields container. Time-frequency extraction and integration also accept step selection for multi-RPM data.

- Read radiation-area results for SURF251 and SURF252:
  > The radiation_area operator reads elemental radiation-area results for SURF251 and SURF252 elements.

- Add reaction-moment and reaction-heat results:
  > The reaction_moment and reaction_heat operators now read nodal reaction moments and reaction heat from supported result files.

- Enable cyclic expansion for composite datasources.:
  > Enable cyclic expansion for composite datasources.
  >
  > Enable cyclic expansion for plastic, thermal, accumulated equivalent plastic strain and elemental orientations. Accumulated equivalent plastic strain and Element Orientations will only account for harmonic 0 for expansion.
  >
  >
  >
  >

- Read FLUID116 and SURF251/SURF252 results:
  > New result operators read FLUID116 flow and heat-transfer quantities and SURF251/SURF252 radiation quantities, including average_velocity, flow_rate, emissivity, and net_radiation_heat_flux.

- Read elemental nodal moments and heat:
  > The element_nodal_moments and element_nodal_heat operators read moment and heat results from MAPDL files. The split_force_components input is deprecated; use dedicated result operators and component selection instead.

- Add optimizeWorkflow operator:
  > Add an optimization operator that supports minimizing or maximizing an objective function, as well as driving it toward a target value. The objective function can take input variables of type integer or double.
  >
  >
  >
  >

- Add config option to handle warnings / errors in migrate:
  > - Added an option to throw when an exception occurs during the migration in _hdf5::h5dpf::migrate_file_
  >
  >
  >
  >

- Add an option in concatenation operators to ignore empty fields:
  > The operators _concatenate_fields_ and _concatenate_fields_containers_ were ignoring empty fields for concatenating.
  >
  > An option has been added to choose between ignore them or add their number of components to the resulting field.
  >
  >
  >
  >

- Add total strain operator:
  > DPF provides EL total-strain tensor and EL_EQV equivalent total-strain results. When the source lacks total strain directly, DPF assembles it from available elastic, plastic, creep, and thermal strain results.

- Utility operators for the optimized SVD compression workflow:
  > - Added operator _split_vector_elements_ which takes a vector and outputs each element in a separate pin.
  >
  > - Added operator _concatenate_objects_to_vector_ which creates a vector out of elements given in separate pins.
  >
  > - Added data attribute to _field::get_attribute_, _customtypefield::get_attribute_ and _propertyfield::get_attribute_
  >
  >
  >
  >

- Update time_freq_interpolation to support integration in log-log scale:
  > update time_freq_interpolation to support integration in log-log scale
  >
  >
  >
  >

- Memory improvements for distributed data sources cases for results:
  > Memory efficiency improved for reading results for large distributed cases.
  >
  >

- Retrieve field counts and data sizes through attribute APIs:
  > The fc_get_attribute operator accepts num_fields to return the field count. Field attribute operators accept datasize to return the size of their data arrays.

- Read composite meshes incrementally by default:
  > Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during mesh loading.

- Add the workflow_string input pin in the import_symbolic_workflow operator:
  >
  >
  > Add the new `workflow_string` input pin in the `import_symbolic_workflow` operator.
  >
  >
  >
  >

- Add a dedicated matrix_product operator:
  > Adds a dedicated matrix_product operator as a helper to the generalized_inner_product for ease of use.
  >
  >
  >
  >

- Supported Generic Support in "field::get_attribute" and "propertyfield::get_attribute" APIs:
  > - Supported Generic Support (property_name = "generic_support") in "field::get_attribute" and "propertyfield::get_attribute" operators.
  >
  >
  >
  >

- Read and set fields-container names through attribute APIs:
  > Fields-container attribute APIs now support base_name and field_names for reading or setting the container's base name and individual field names.

- Added "generic_data_container::get_attribute" and "generic_data_container::set_attribute":
  > Added the following APIs for Generic Data Container
  >
  > - "generic_data_container::get_attribute": returns a given attribute of the generic data container in input
  >
  > - "generic_data_container::set_attribute": creates a new generic data container or modifies the one in input
  >
  >
  >
  >

- Supported GenericSupport in GetFieldsContainerAttribute and added GenericSupportAttribute API:
  > - Added a new property_name, "generic_support", to "fieldscontainer::get_attribute" to extract Generic Support
  >
  > - Added a new API, "generic_support::get_attribute", to extract Field, Field Property or String Field associated with Generic Support
  >
  >
  >
  >

- Add mesh::set_attribute and support units in fieldscontainer::set_attribute:
  >
  >
  > Support the "unit" property in the `fieldscontainer::set_attribute` operator and create a new `mesh::set_attribute` operator that is similarly able to set the units on a MeshedRegion.
  >
  >
  >
  >

- Enable float comparison (time frequency precision) in the compute time scoping operator':
  > Reverting PR since a better approach has been found.
  >
  >

### <a id="Fixes_native"></a> Fixes

- Prevent intermittent parallel solid_to_skin_fc crashes:
  > The solid_to_skin_fc operator avoids intermittent crashes when results for multiple time steps or load cases are processed in parallel.

- Config passed to internal operators:
  > Fix operator configuration not being correctly passed to operators instantiated by some "_fc" operators.
  >
  >
  >
  >

- Handle ASCII serialization line endings across operating systems:
  > ASCII serialization now handles LF and CRLF line endings consistently across operating systems. The existing version-1 loading path is preserved.

- Add ellipsis property to forward operator pins:
  > The forward operator accepts multiple inputs and returns each populated input through the output pin with the same index.

- Fix scoping_provider_by_prop for distributed h5 files:
  > For distributed HDF5 data sources, scoping_provider_by_prop now returns element scoping that matches results from equivalent RST sources.

- Expose ENL results through H5DPF and export without time-frequency support:
  > The H5DPF reader now exposes ENL results, and result-file export accepts data sources without time-frequency support.

- Handle unavailable shell-position results in permissive mode:
  > In permissive mode, shell-position requests return an empty container for missing or unsupported HDF5 results instead of raising an error.

- Clarify default H5DPF export precision:
  > By default, H5DPF migration exports nodal results, mesh coordinates, and time-frequency data in double precision. Elemental results remain single precision.

- Reevaluate downstream operators after input changes:
  > When operator inputs change, connected downstream operators now reevaluate and return results for the new inputs.

- Improve parallelization in several operators:
  >
  >
  > Multithreading parallelization has been enhanced in several operators making use of OpenMP.
  >
  >
  >
  >

- Improve Composite operator batch-merging and add domain decomposition detection:
  > Composite MAPDL results now distinguish spatially partitioned data from frequency- or cyclic-decomposed streams when assembling meshes, avoiding spatial merging for shared meshes.

- Fix migration errors for MSUP expansion:
  > MSUP migration now includes result data needed to compute reaction forces and elemental nodal forces. GenPass no longer defaults to SI units, and force results use the appropriate unit system.

- Filter result info for MSUP & CMS on expandable results:
  > MSUP and CMS expansion result information now includes only results that have available expansion operators.

- Support reading of mode coefficients and modal damping in spectrum_data:
  > Fix reading of mode coefficients and modal damping ratios from .mode file in spectrum_data operator.
  >
  > Also, fix reading of participation factors for complex modes (from damped modal analysis).
  >
  >
  >
  >

- Fix MSUP expansion with partial modal coordinates scoping:
  > Fix wrong results in MSUP expansion when both of the two following conditions are met:
  >
  > - the use pass data source (.rfrq or .rdsp file) does not contain the modal coordinates for all the modes stored in the generation pass data source (.mode file )
  >
  > - the N stored modal coordinates do not correspond to the N first modes in the generation pass data source
  >
  > Typical examples of this issue are:
  >
  > - MSUP expansion is performed with the set of modes from min_mode to max_mode and min_mode > 1
  >
  > - Modal analysis contains both residual vectors and static shapes (enforced motion) and MSUP expansion is performed without the residual vectors

- Fix performance issues with mode chunking:
  > Fix performance issues for Modal superposition with mode chunking option enabled
  >
  >
  >
  >

- Make elemental mass public:
  > The elemental mass operator is now publicly available, so users can access its elemental mass fields container.

- Record ElementalMass for rth:
  > Make ElementalMass a source operator
  >
  > Make MaterialPropertyOfElement a source operator
  >
  >
  >
  >

- Correct material_property_of_element input documentation:
  > The result.material_property_of_element specification now documents optional mesh_scoping, required property_name, optional default_value, and optional filter_zero_values. Zero-value filtering applies when no default is supplied.

- Remove redundant prefixes from result operator scripting names:
  > Operator scripting names now use pres_to_field, prns_to_field, run, and global_to_nodal without the redundant mapdl. prefix.

- Select NMISC and SMISC components through item_index:
  > The nmisc and smisc operators accept scalar or vector item_index values for component selection; the num_components input pin is removed.

- Handle missing and non-shell support in shell operators:
  > Shell operators now handle fields with missing or non-shell support without adding duplicate scoping IDs.

- Rescope named selections during mesh extraction:
  > Mesh extraction and scoping now rescope named selections onto the output mesh instead of retaining selections from the source mesh.

- Correct odd and even input-pin documentation:
  > Operator pin descriptions now distinguish odd and even pin positions correctly, matching the expected input ordering.

- Escape special characters in generated C# documentation:
  > Generated C# XML documentation now escapes less-than signs, greater-than signs, and ampersands in operator and pin descriptions, preventing malformed documentation comments.

- Ignore the rotation to global in PSD and Spectrum analysis:
  > PSD and Spectrum results are not rotated to the global coordinate system even when rotation is requested.

- Fix workflow_to_pydpf any pin management:
  > Generated Python workflows now use numeric pin IDs for Any-typed and ellipsis pins. ScopingsContainer inputs serialize their labels, label spaces, and scopings, preserving these values when workflows are reconstructed.

- Check all files from the DataSource for result availability:
  > Availability checks now inspect every file in a composite data source, so results present only in later files are recognized instead of triggering fallback computation.

- Prevent mixed pin APIs in generated workflows:
  >
  >
  > Generated Python workflows now use one consistent connection syntax when operators expose different pin metadata.
  >
  >
  >
  >

- Fix merge::result_info for cyclic analyzis:
  >
  >
  >
  >
  > Preserve result metadata when combining result information, including cyclic analysis data and complete result properties.
  >
  >
  >
  >

- Handle unavailable input in rotation operators:
  > Rotation operators now handle a null fields-container input without crashing when upstream results are unavailable.

- Fixing issue with composite results without previously calling the mesh provider operator:
  > Fixing issue with composite results without previously calling the mesh provider operator.
  >
  >

- Unique C# accessors for output pins with multiple list types:
  >
  >
  > Fixes a failure when generating the C# wrapper for an operator whose output pin accepts several list (vector) types. Previously the generated code defined two identically named accessor methods and failed to compile. Each list type now gets a distinct, type-aware accessor (for example `get<pin>_as_list_int` and `get<pin>_as_list_double`), and the existing `get<pin>_as_list` accessor is preserved when a pin has a single list type.
  >
  >
  >
  >

- Fix CScopingProviderProperty for HDF5:
  >
  >
  > Support of HDF5 for CScopingProviderProperty for the properties **mapdl_element_type** and **material**
  >
  >
  >
  >

- Default serialization to binary and make deserializer format optional:
  > The serializer operator now defaults stream_type to binary (1) instead of ASCII (0). The deserializer stream_type input is optional.

- Handle time or frequency steps location correctly for the rescope operator:
  > Handle time or frequency steps location correctly for the rescope operator.
  >
  >

- Preserve input scoping support during rescoping:
  > Rescoping now validates source and destination locations without modifying the support attached to the input scoping.

- Skip empty input fields in min_max_over_label_fc:
  >
  >
  > The `min_max_over_label_fc` operator now correctly handles fields containers that contain
  >
  > empty fields (fields with no data, such as those produced by unconverged time steps).
  >
  > Previously, empty fields caused spurious zero-valued entries in the min/max output.
  >
  > The operator now excludes domain IDs whose fields are entirely empty from the output,
  >
  > so the output scoping only contains the domain IDs for which actual data was available.
  >
  >
  >
  >

- Fix labels issue in adapt_with_scopings_container:
  >
  >
  > Fix issue in `adapt_with_scopings_container` when input FieldsContainer and ScopingsContainer don't share labels.
  >
  >
  >
  >

- Fix int connection to time_scoping pin for cyclic models:
  >
  >
  > If an integer different to 1 is connected to the time_scoping input pin for cyclic models, the results that will be read are the ones from time=1 either way. This is now fixed.
  >
  >
  >
  >

- Fix the merge::meshes operator while trying to merge empty meshes:
  >
  >
  > The `merge::meshes` operator had a issue while trying to merge empty meshes that has been fixed.
  >
  >
  >
  >

- Support the reverse_connectivity in the merge_meshes operator:
  >
  >
  > The `merge_meshes` operator was not properly supporting the reverse connectivity property field (in the sense that it was not being merged respecting the element indices). This is now fixed.
  >
  >
  >
  >

- Preserve endpoints in sampled scopings:
  > Reduced scopings now retain their first and last IDs while the operator samples IDs between those endpoints.

- Raise a specific error message when trying to import a non-existing file:
  >
  >
  > Raise an exception with the error message "The input file does not exist." when importing a non-existing workflow file
  >
  >
  >
  >

- Support float-aware time-scoping comparisons:
  > The compute_time_scoping operator now accepts time_freq_precision for float-aware comparisons, while keeping double precision as the default.

- Correct generic-support attribute exposure:
  > The fc_get_attribute specification no longer advertises generic_support output, and the generic-support attribute helper is private.

- Correct residual-and-error scaling outputs:
  > The compute_residual_and_error operator returns correctly sized scaling-factor outputs. Overall-max normalization consistently returns fields containers.

### <a id="Performance_native"></a> Performance

- Enhance performance of reading scoped results by remapping a previously pre-processed result onto a new data layout:
  > Enhance performance of reading scoped results by remapping a previously pre-processed result onto a new data layout
  >
  >

- Improving performance of reading scoped results with multiple time steps:
  > Reading scoped results from HDF5 files across multiple time steps is faster, so these result sets load sooner.

- Reduce repeated H5DPF reads and decompression:
  > H5DPF scoped-result reads group nearby data slices, reducing repeated file reads and decompression work.

- Cache the scoping hash so it can be reused:
  > Scoping index-table construction does less repeated work when matching unchanged source and destination scopings.

- Performance issue on node filtering operator:
  > When filtering nodal results across time steps with the same mesh and scoping, repeated requests avoid redundant processing.

- Enable parallel execution by default in rescope_fc:
  > Rescope_fc now runs with parallel execution enabled by default when rescoping a fields container.

- Improve performance of Rescope operators:
  >
  >
  > Performance improvements in the `Rescope`, `Rescope_pf`, `Rescope_ctf`, `rescope_fc` and `solid_to_skin_fc` operators.
  >
  >
  >
  >

- Performance improvements for distributed data sources cases for mesh:
  > Performance improvements for distributed data sources cases for the mesh and merge mesh operator.
  >
  >

- Reuse scoping preparation in composite result reads:
  > Composite result reads reuse transposed operations and apply requested scoping before reading data, reducing repeated processing.

- Reuse named-selection metadata during distributed mesh reads:
  > Distributed mesh reads now cache named selections across domains, avoiding repeated metadata preparation for the same mesh.

## prime

### <a id="Features_prime"></a> Features

- Adding algorithm options and multithreading:
  > Addition of algorithm options, multithreading and error messages to the Prime - DPF operators.
  >
  >

### <a id="Fixes_prime"></a> Fixes

- Fixing parallelization issue with prime operators:
  > Support parallelization for `prepare_morphing` (and so `morphed_field`) and `export_mesh_with_prime`.
  >
  >

- Restoring parallelization config options:
  > Restoring parallelization config options, when applies.
  >
  >

## pythonplugin

### <a id="Fixes_pythonplugin"></a> Fixes

- Release the interpreter lock correctly during Python plugin loading:
  > Python plugin loading now manages the global interpreter lock correctly instead of leaving it held on the plugin-load thread.

- Normalize Windows client API path aliases:
  > Python users can provide a Windows client API library path without its `.dll` suffix; the loader resolves it to the corresponding DLL before loading.

## rbd

### <a id="Features_rbd"></a> Features

- Apply wireframe and edge decimation when generating the dfmf:
  > Reduced file size by decreasing the output nodes of the motion modal data file using the wire frame operator and edge decimation operator.
  >
  >
  >
  >

## vtk

### <a id="Features_vtk"></a> Features

- Add pins for extra connectivity & input scoping in op:mesh_to_pyvista:
  >  Introduce capability to accept input mesh scoping that allows construction of vtk meshes for a specified subset of the original mesh. Add 'as_modified_connectivity' boolean input pin that returns VTK version>9 compatible connectivity representation consisting of an array of concatenated node indices for cells without node count headers and an offset array to it.
  >
  >

- Fix beam3/beam4 mesh conversion support:
  > DPF Mesh regions containing beam3/beam4 elements can be handled properly using the mesh_to_pyvista operator (even with 'as_linear' turned off).
  >
  >
  >
  >

### <a id="Fixes_vtk"></a> Fixes

- Visualization problem in a Fluent mesh with different mesh sizes:
  > Non-polyhedral Fluent meshes with face connectivity can now be converted for visualization. Supplied node coordinates are aligned with the mesh when their scoping differs.

- Vtu_export output DataSources has null result paths:
  >
  >
  > The `vtu_export` operator now correctly populates the output `DataSources` with
  >
  > the paths of the exported VTU files when exporting a multi-timestep result.
  >
  > Previously, the result paths were stored in a domain-specific secondary slot
  >
  > (intended for distributed solver files) rather than as plain result files,
  >
  > causing the output `DataSources.result_files` to return null entries for every
  >
  > time step.
  >
  >
  >
  >

- Fix the face node ordering for reversed faces:
  > Fix face orientation during export to VTK for fluid meshes.
  >
  >
  >
  >

### <a id="Performance_vtk"></a> Performance

- Perf improvement of mesh_to_pyvista (part 2):
  > Converting DPF meshed regions into VTK-native mesh formats with mesh_to_pyvista can now be up to 60% faster.

## Operator changes

### New operators

#### compression

- [quantization](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/quantization.md):
  > Scales a field to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[ q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\( 2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

- [quantization_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/quantization_fc.md):
  > Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\(2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

- [zstd_compress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_compress.md):
  > Compresses the data of a field with ZSTD compression algorithm.

- [zstd_compress_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_compress_fc.md):
  > Compresses a fields container with ZSTD compression algorithm.

- [zstd_decompress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_decompress.md):
  > Decompresses a field compressed with ZSTD compression algorithm.

- [zstd_decompress_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_decompress_fc.md):
  > Decompresses a fields container compressed with ZSTD compression algorithm.


#### info

- [markdown_latex_example](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/info/markdown_latex_example.md):
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

- [create_sc_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/create_sc_mapping_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sc_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/sc_mapping.md):
  > Apply System Coupling to map data from an input mesh to a target mesh.

- [sysc_point_cloud_wf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/sysc_point_cloud_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sysc_shape_function_wf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/sysc_shape_function_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.


#### math

- [linearized_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/linearized_stress.md):
  > get linearized stress

- [matrix_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/matrix_product.md):
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

- [matrix_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/matrix_product_fc.md):
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

- [mechanical_min_max_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/mechanical_min_max_over_time.md):
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

- [edge_decimation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/edge_decimation.md):
  > Takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold. Branch nodes and sharp corners are preserved.

- [mesh_set_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_set_attribute.md):
  > Uses the MeshedRegion APIs to modify it.


#### result

- [acoustic_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/acoustic_energy_density.md):
  > Read/compute AED by calling the readers defined by the datasources.

- [acoustic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/acoustic_pressure.md):
  > Read/compute AcousticPressure by calling the readers defined by the datasources.

- [average_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/average_velocity.md):
  > Read/compute average velocity by calling the readers defined by the datasources.

- [contact_element_heat_flow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_element_heat_flow.md):
  > Read/compute contact element heat flow by calling the readers defined by the datasources.

- [convection_heat_flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/convection_heat_flow_rate.md):
  > Read/compute convection heat flow rate by calling the readers defined by the datasources.

- [creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain.md):
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

- [creep_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_X.md):
  > Read/compute element nodal component creep strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_XY.md):
  > Read/compute element nodal component creep strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_XZ.md):
  > Read/compute element nodal component creep strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_Y.md):
  > Read/compute element nodal component creep strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_YZ.md):
  > Read/compute element nodal component creep strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_Z.md):
  > Read/compute element nodal component creep strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [creep_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_eqv.md):
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

- [creep_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_intensity.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_max_shear.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_principal_1.md):
  > Read/compute element nodal component creep strains 1st principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_principal_2.md):
  > Read/compute element nodal component creep strains 2nd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_principal_3.md):
  > Read/compute element nodal component creep strains 3rd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [element_nodal_heat](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/element_nodal_heat.md):
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

- [element_nodal_moments](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/element_nodal_moments.md):
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

- [emissivity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/emissivity.md):
  > Read/compute emissivity by calling the readers defined by the datasources.

- [emitted_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/emitted_radiation_heat_flux.md):
  > Read/compute emitted radiation heat flux by calling the readers defined by the datasources.

- [enclosure_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/enclosure_number.md):
  > Read/compute enclosure number by calling the readers defined by the datasources.

- [film_coefficient](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/film_coefficient.md):
  > Read/compute film coefficient by calling the readers defined by the datasources.

- [flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/flow_rate.md):
  > Read/compute flow rate by calling the readers defined by the datasources.

- [fluid_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/fluid_velocity.md):
  > Read/compute FV by calling the readers defined by the datasources.

- [gasket_total_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_total_closure.md):
  > computes the gasket total closure (sum of gasket thermal closure and gasket inelastic closure).

- [gasket_total_closure_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_total_closure_X.md):
  > Read/compute elemental gasket total closure XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [gasket_total_closure_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_total_closure_XY.md):
  > Read/compute elemental gasket total closure XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [gasket_total_closure_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_total_closure_XZ.md):
  > Read/compute elemental gasket total closure XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [global_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/global_to_nodal.md):
  > Rotate results from global coordinate system to local coordinate system.

- [heat_conductivity_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/heat_conductivity_rate.md):
  > Read/compute heat conductivity rate by calling the readers defined by the datasources.

- [heat_transport_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/heat_transport_rate.md):
  > Read/compute heat transport rate by calling the readers defined by the datasources.

- [incident_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/incident_radiation_heat_flux.md):
  > Read/compute incident radiation heat flux by calling the readers defined by the datasources.

- [input_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/input_sound_power.md):
  > Read/compute PINC by calling the readers defined by the datasources.

- [layer_orientation_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/layer_orientation_provider.md):
  > Read the layer orientations.

- [modal_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/modal_acceleration.md):
  > Read/compute modal acceleration by calling the readers defined by the datasources.

- [modal_coordinate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/modal_coordinate.md):
  > Read/compute modal coordinate by calling the readers defined by the datasources.

- [modal_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/modal_velocity.md):
  > Read/compute modal velocity by calling the readers defined by the datasources.

- [net_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/net_radiation_heat_flux.md):
  > Read/compute net radiation heat flux by calling the readers defined by the datasources.

- [nodal_rotation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotation.md):
  > Read/compute nodal rotation by calling the readers defined by the datasources.

- [nodal_rotation_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotation_X.md):
  > Read/compute nodal rotation X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotation_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotation_Y.md):
  > Read/compute nodal rotation Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotation_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotation_Z.md):
  > Read/compute nodal rotation Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_acceleration.md):
  > Read/compute nodal rotational acceleration by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_acceleration_X.md):
  > Read/compute nodal rotational acceleration X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_acceleration_Y.md):
  > Read/compute nodal rotational acceleration Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_acceleration_Z.md):
  > Read/compute nodal rotational acceleration Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_velocity.md):
  > Read/compute nodal rotational velocity by calling the readers defined by the datasources.

- [nodal_rotational_velocity_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_velocity_X.md):
  > Read/compute nodal rotational velocity X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_velocity_Y.md):
  > Read/compute nodal rotational velocity Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_rotational_velocity_Z.md):
  > Read/compute nodal rotational velocity Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [node_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/node_orientations.md):
  > Read/compute node euler angles by calling the readers defined by the datasources.

- [node_orientations_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/node_orientations_X.md):
  > Read/compute node euler angles X component of the vector (1st component) by calling the readers defined by the datasources.

- [node_orientations_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/node_orientations_Y.md):
  > Read/compute node euler angles Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [node_orientations_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/node_orientations_Z.md):
  > Read/compute node euler angles Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nusselt_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nusselt_number.md):
  > Read/compute nusselt number by calling the readers defined by the datasources.

- [output_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/output_sound_power.md):
  > Read/compute POUT by calling the readers defined by the datasources.

- [prandtl_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/prandtl_number.md):
  > Read/compute prandtl number by calling the readers defined by the datasources.

- [radiation_area](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/radiation_area.md):
  > Read/compute radiation area by calling the readers defined by the datasources.

- [radiation_heat_flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/radiation_heat_flow_rate.md):
  > Read/compute radiation heat flow rate by calling the readers defined by the datasources.

- [raw_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/raw_acceleration.md):
  > Read/compute A vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [raw_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/raw_velocity.md):
  > Read/compute V vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [reaction_heat](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reaction_heat.md):
  > Read/compute nodal reaction heat by calling the readers defined by the datasources.

- [reaction_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reaction_moment.md):
  > Read/compute nodal reaction moments by calling the readers defined by the datasources.

- [reaction_moment_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reaction_moment_X.md):
  > Read/compute nodal reaction moments X component of the vector (1st component) by calling the readers defined by the datasources.

- [reaction_moment_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reaction_moment_Y.md):
  > Read/compute nodal reaction moments Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [reaction_moment_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reaction_moment_Z.md):
  > Read/compute nodal reaction moments Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [reflected_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reflected_radiation_heat_flux.md):
  > Read/compute reflected radiation heat flux by calling the readers defined by the datasources.

- [reynolds_number](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/reynolds_number.md):
  > Read/compute reynolds number by calling the readers defined by the datasources.

- [squared_l2norm_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/squared_l2norm_pressure.md):
  > Read/compute Square of the L2 norm of pressure over element volume by calling the readers defined by the datasources.

- [total_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_X.md):
  > Read/compute element nodal component total strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_XY.md):
  > Read/compute element nodal component total strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_XZ.md):
  > Read/compute element nodal component total strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_Y.md):
  > Read/compute element nodal component total strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_YZ.md):
  > Read/compute element nodal component total strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_Z.md):
  > Read/compute element nodal component total strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental. Default: averaged on nodes.

- [total_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_eqv.md):
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

- [total_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_intensity.md):
  > Reads/computes element nodal component total strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [total_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_max_shear.md):
  > Reads/computes element nodal component total strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [total_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_principal_1.md):
  > Read/compute element nodal component total strains 1st principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [total_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_principal_2.md):
  > Read/compute element nodal component total strains 2nd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [total_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain_principal_3.md):
  > Read/compute element nodal component total strains 3rd principal component, average on nodes by default if no target location is given, and compute the eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [view_factor_sum](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/view_factor_sum.md):
  > Read/compute view factor sum by calling the readers defined by the datasources.


#### scoping

- [adapt_with_scopings_container_pfc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/adapt_with_scopings_container_pfc.md):
  > Rescopes/splits a property fields container to correspond to a scopings container. Each property field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped property fields.

- [change_pfc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/change_pfc.md):
  > DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a property fields container to correspond to a scopings container.

- [extend_midside_nodal_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/extend_midside_nodal_scoping.md):
  > Extends the input nodal scoping with the neighbor corner nodes of every midside node in the input. For each midside node in the scoping, the two corner nodes that bound it on the element edge are added to the output scoping. 


#### utility

- [concatenate_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/concatenate_fields.md):
  > Concatenates fields into a unique one by incrementing the number of components.
  > 
  > Example:
  > - Field1 components: { UX, UY, UZ }
  > - Field2 components: { RX, RY, RZ }
  > - Output field : { UX, UY, UZ, RX, RY, RZ }

- [concatenate_fields_containers](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/concatenate_fields_containers.md):
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

- [csharp_generator](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/csharp_generator.md):
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

- [customtypefield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/customtypefield_get_attribute.md):
  > Gets a property from an input field / fields container. A CustomTypeField in pin 0 and a property name (string) in pin 1 are expected as inputs.

- [cyclic_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/cyclic_support_get_attribute.md):
  > A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

- [get_active_operators](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/get_active_operators.md):
  > Get all active operators in the evaluation chain of a workflow's output pins. Returns a GenericDataContainer with keys 'opName_opId' and int values corresponding to E_OperatorState.

- [get_operators](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/get_operators.md):
  > Getter on operators inside a workflow.

- [operator_changelog](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/operator_changelog.md):
  > Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

- [propertyfield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/propertyfield_get_attribute.md):
  > Gets a property from an input field / fields container. A PropertyField in pin 0 and a property name (string) in pin 1 are expected as inputs.

- [transpose_fields_container](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/transpose_fields_container.md):
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

- [elemental_difference](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix data corruption on centroid elements with through_layers enabled.

  > 0.0.3: Fix crash on elements with fewer than two corner nodes.

  > 0.0.4: Fix shell layer metadata when computing elemental difference from nodal input.


- [elemental_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_fraction_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_mean](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_mean.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_mean_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_mean_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Block ScopingsContainer input.

  > 0.0.3: Expose map scoping input and auxiliary scoping outputs in the specification.


- [elemental_nodal_to_nodal_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix right input pin for mesh scoping and meshed region.

  > 0.0.3: Connect a scoping only if non empty.

  > 0.0.4: Document mesh and label-specific scoping input behavior.

  > 0.0.5: Reduce serialized per-field setup during parallel execution.

  > 0.0.6: Resolve mesh support independently for each field.

  > 0.1.0: Add in the specification the meshed region input.


- [elemental_nodal_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_fc.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.

  > 0.0.5: Fix exception type preservation during parallel execution.

  > 0.0.6: Fix exception short-circuit data race during parallel execution.


- [elemental_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_elemental_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_elemental_nodal_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [elemental_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix division by zero in face-based FVM averaging.


- [elemental_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_nodal_fc.md)

  > 0.0.1: Fixed shell management issue.

  > 0.0.2: Internal refactoring to use Scoping Iterators.

  > 0.0.3: Fix exception type preservation during parallel execution.

  > 0.0.4: Fix exception short-circuit data race during parallel execution.


- [extend_to_mid_nodes_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/extend_to_mid_nodes_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [force_summation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/force_summation.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.2.0: Add support for excluding or not contact elements.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N.m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Internal refactoring to remove usage of deprecated pin 200 of ENF

  > 2.0.0: Addition of support for cyclic expansion with associated input pins.


- [force_summation_psd](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/force_summation_psd.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.1.1: Contact elements are now excluded from the summation.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N*m.


- [gauss_to_node_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/gauss_to_node_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [nodal_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_fraction_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.


- [nodal_to_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix exception short-circuit data race during parallel execution.


- [nodal_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental_nodal.md)

  > 0.0.1: Fixed issue with resize output field.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental_nodal_fc.md)

  > 0.0.1: Fixed issue with resize output fields.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix exception type preservation during parallel execution.

  > 0.1.3: Fix exception short-circuit data race during parallel execution.


- [to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/averaging/to_nodal_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### compression

- [apply_svd](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/apply_svd.md)

  > 0.1.0: The pin 1 can now be passed as a double.


- [kmeans_clustering](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/compression/kmeans_clustering.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### filter

- [abc_weightings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/abc_weightings.md)

  > 0.0.1: Fixed bug in frequency calculation with multiple rpms in the support.


- [field_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_band_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_band_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_high_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_low_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_low_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [field_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_signed_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/field_signed_high_pass_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [scoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timescoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timescoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timescoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/filter/timescoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### geo

- [cartesian_to_spherical](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/cartesian_to_spherical.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [cartesian_to_spherical_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/cartesian_to_spherical_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [element_nodal_contribution](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/element_nodal_contribution.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [elements_facets_surfaces_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_facets_surfaces_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elements_volume](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_volume.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.

  > 0.0.3: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [elements_volumes_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_volumes_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [faces_area](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/faces_area.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [gauss_to_node](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/gauss_to_node.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [integrate_over_elements](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/integrate_over_elements.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Add support for Surface3, Surface4, Surface6, and Surface8 element types.


- [normals](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/normals.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [normals_provider_nl](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/normals_provider_nl.md)

  > 0.0.1: Bug fixed for input mesh type containing solid elements.

  > 1.0.0: Fixed reference coordinate-system on which normals are calculated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [rotate_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate_in_cylindrical_cs.md)

  > 1.0.0: Fix bug for the rotation of strain fields with a cylindrical system whose axis is rotated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate_in_cylindrical_cs_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/spherical_to_cartesian.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/spherical_to_cartesian_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [to_polar_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/geo/to_polar_coordinates.md)

  > 0.0.1: Fix exception type preservation during parallel execution.



#### invariant

- [eigen_values_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/eigen_values_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [invariants](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/invariants.md)

  > 0.1.0: Add input and output pins to control the principal stress output.


- [invariants_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/invariants_fc.md)

  > 0.1.0: Add input and output pins to control the principal stress output.

  > 0.1.1: Fix exception type preservation during parallel execution.


- [segalman_von_mises_eqv_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/segalman_von_mises_eqv_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [von_mises_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/von_mises_eqv.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix optional Poisson ratio input declaration.


- [von_mises_eqv_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/invariant/von_mises_eqv_fc.md)

  > 0.0.1: Fix optional Poisson ratio input declaration.



#### logic

- [ascending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/ascending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [ascending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/ascending_sort_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [component_transformer_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/component_transformer_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [descending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/descending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [descending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/descending_sort_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [elementary_data_selector](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/elementary_data_selector.md)

  > 0.1.0: fix of crash when input field data pointer is empty, the operator will output an empty field in this case moving forward.

  > 0.2.0: fix of crash when input field had no data pointer, the operator will output an empty field in this case moving forward.

  > 0.2.1: Internal refactoring to use Scoping Iterators.


- [identical_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_meshes.md)

  > 0.0.1: Support comparing the node to element connectivity.


- [identical_property_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_property_fields.md)

  > 0.0.1: Add the order_independent input pin.


- [solid_shell_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/logic/solid_shell_fields.md)

  > 0.0.1: Input Fields Containers can contain empty fields.



#### mapping

- [find_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/find_reduced_coordinates.md)

  > 0.1.0: Fix bug with interpolation points at corner nodes.

  > 0.1.1: Update the operator and pin descriptions.

  > 0.1.2: Internal refactoring to use Scoping Iterators.

  > 0.1.3: Fix tolerance problem with distorted elements.

  > 0.1.4: Support beam and point elements.

  > 0.1.5: Support Surface elements.

  > 0.2.0: Added tolerance pin when locating query coordinates within elements.

  > 0.3.0: Tolerance used when searching elements by the coordinates of the query points.

  > 1.0.0: Improve element selection at boundaries using distance-based ranking of candidate elements.


- [on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/on_coordinates.md)

  > 0.1.0: Performance improvement.

  > 0.2.0: Fix bug with interpolation points at corner nodes.

  > 0.3.0: Fix bug with missing results and use_quadratic_elements pin.

  > 0.3.1: Update the operator and pin descriptions.

  > 0.3.2: Fix tolerance problem with distorted 2D elements.

  > 0.4.0: Preserve explicit coordinate labels and ignore implicit labels in mapping output.

  > 0.4.1: Support beam and point elements.

  > 0.4.2: Support Surface elements.

  > 0.4.3: Fix element search for distorted 3D elements.

  > 0.5.0: Tolerance used when searching elements by the coordinates of the query points.

  > 1.0.0: Improve element selection at boundaries using distance-based ranking of candidate elements.


- [on_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/on_reduced_coordinates.md)

  > 0.0.1: Update the operator and pin descriptions.

  > 0.0.2: Internal refactoring to use Scoping Iterators.

  > 0.0.3: Support beam and point elements.

  > 0.0.4: Support Surface elements.

  > 0.0.5: Fix element search for distorted 3D elements.


- [prepare_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mapping_workflow.md)

  > 0.0.1: Update the operator and pin descriptions.


- [scoping_on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/scoping_on_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [solid_to_skin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/solid_to_skin.md)

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


- [solid_to_skin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mapping/solid_to_skin_fc.md)

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

- [absolute_value_by_component](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/absolute_value_by_component.md)

  > 0.0.1: Improve operator description with formula and Wikipedia link. Improve output pin description.


- [absolute_value_by_component_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/absolute_value_by_component_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [accumulate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate.md)

  > 0.0.1: Improve operator description with weighted sum formula. Improve pin 2 and output pin descriptions.


- [accumulate_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [accumulate_level_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_level_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_min_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_min_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulation_per_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/accumulation_per_scoping.md)

  > 0.0.1: Rewrite the operator description to clarify entity-wise summation per field and label-agnostic behaviour, document input pins 0, 3, 4 and 5, document the two output pins, and mark the streams and data sources pins as optional.

  > 1.0.0: Remove input datasources and streams. The user is responsible for scoping expansion for cyclic models if needed.


- [add](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/add.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and inplace option. Improve output pin description. Add entity-wise addition synonym.


- [add_constant_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/add_constant_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [add_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/add_fc.md)

  > 0.0.1: Improve operator description. Improve output pin description. Add entity-wise addition synonym.


- [amplitude](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/amplitude.md)

  > 0.0.1: Improve operator description. Add output pin description. Add Wikipedia link.


- [amplitude_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/amplitude_fc.md)

  > 0.0.1: Improve operator description with amplitude formula, fallback behaviour and Wikipedia link. Add input and output pin descriptions.


- [average_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/average_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [centroid](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/centroid.md)

  > 0.0.1: Improve operator description with interpolation formula, convexity criterion and Wikipedia link. Improve pin 2 and output pin descriptions.


- [centroid_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/centroid_fc.md)

  > 0.0.1: Improve operator description with interpolation formula, exact-match behaviour and Wikipedia link. Improve pin descriptions.


- [component_wise_divide](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_divide.md)

  > 0.0.1: Improve operator description with formula and zero-denominator behaviour. Add output pin description. Add Wikipedia link.


- [component_wise_divide_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_divide_fc.md)

  > 0.0.1: Improve operator description. Add output pin description. Add Wikipedia link.


- [component_wise_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_product_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [compute_residual_and_error](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/compute_residual_and_error.md)

  > 0.1.0: Support generic labels (not only time) in the input FieldsContainer

  > 0.1.1: Fixed the size of output scaling factors for the absolute normalization

  > 1.0.0: Output pins 0 and 1 come out as fields containers instead of fields for normalization type 3
Upgraded documentation


- [conjugate](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/conjugate.md)

  > 0.0.1: Improve operator description with conjugate formula and Wikipedia link. Add input and output pin descriptions.


- [correlation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/correlation.md)

  > 0.0.1: Rewrite description with LaTeX weighted inner product formula, mark pins 2 and 3 optional, correct the absoluteValue pin description.


- [cos](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cos.md)

  > 0.0.1: Improve operator description to document unit constraints and formula. Improve input and output pin descriptions. Add Wikipedia link.


- [cos_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cos_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [cplx_derive](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_derive.md)

  > 0.0.1: Improve operator description with frequency-domain derivation formula and Wikipedia link. Add input and output pin descriptions.

  > 0.0.2: Improve operator performance through internal refactoring.


- [cplx_divide](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_divide.md)

  > 0.0.1: Improve operator description with complex division formula, zero-denominator error and Wikipedia link. Improve pin and output pin descriptions.


- [cplx_dot](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_dot.md)

  > 0.0.1: Improve operator description with Hermitian inner product formula and Wikipedia link.


- [cplx_multiply](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_multiply.md)

  > 0.0.1: Improve operator description with complex multiplication formula and Wikipedia link. Add output pin description.


- [entity_extractor](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/entity_extractor.md)

  > 0.0.1: Correct description to clarify index-based (not ID-based) extraction, document all pins, and declare the previously undocumented output pin 1.


- [exponential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/exponential.md)

  > 0.1.0: Add permissive config option to bypass unit check.


- [exponential_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/exponential_fc.md)

  > 0.1.0: Add input pin 1 which allows to apply the exponential to the time/freq support of the input FC. Also add permissive config option to bypass unit check.


- [generalized_inner_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/generalized_inner_product.md)

  > 0.0.1: Improve operator description with Wikipedia links and dispatch table. Add missing optional input pin 2 (mesh) for elemental-nodal/nodal dot product. Improve output pin description.


- [generalized_inner_product_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/generalized_inner_product_fc.md)

  > 0.0.1: Improve operator description with Wikipedia links and dispatch table. Add missing optional input pin 2 (mesh) for elemental-nodal/nodal dot product. Improve output pin description.


- [img_part](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/img_part.md)

  > 0.0.1: Improve operator description. Add input and output pin descriptions.


- [invert_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/invert_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [kronecker_prod](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/kronecker_prod.md)

  > 0.0.1: Improve operator description with Kronecker product formula and Wikipedia link. Add output pin description.


- [linear_combination](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/linear_combination.md)

  > 0.0.1: Improve operator description with LaTeX formula and Wikipedia link. Improve pin 0, 3, 4 and output pin descriptions.


- [ln](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/ln.md)

  > 0.0.1: Improve operator description with formula and dimensionless constraint. Improve input and output pin descriptions. Add Wikipedia link.

  > 0.1.0: Add permissive config option to bypass unit check.


- [ln_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/ln_fc.md)

  > 0.1.0: Add input pin 1 which allows to apply the natural log to the time/freq support of the input FC. Also add permissive config option to bypass unit check.


- [mac](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/mac.md)

  > 0.0.1: Rewrite description with MAC formula and LaTeX notation, mark pin 2 optional, document all pins, and fix typo in original description.


- [make_one_on_comp](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/make_one_on_comp.md)

  > 0.0.1: Rewrite description to clarify index-based (not ID-based) selection and standard-basis-vector semantics, document all pins.


- [minus](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/minus.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and temperature-difference unit. Improve output pin description. Add entity-wise subtraction synonym.


- [minus_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/minus_fc.md)

  > 0.0.1: Improve operator description to document formula, broadcast behaviour, unit handling, and temperature-difference unit. Improve output pin description. Add entity-wise subtraction synonym.


- [modal_damping_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/modal_damping_ratio.md)

  > 0.0.1: Rewrite description to use LaTeX Rayleigh damping formula and identify each input coefficient.

  > 0.1.0: Input pin 0 now accepts a field or a time/freq support.


- [modal_participation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/modal_participation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [modulus](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/modulus.md)

  > 0.0.1: Improve operator description with complex modulus formula and Wikipedia link. Add input and output pin descriptions.


- [norm](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/norm.md)

  > 0.0.1: Improve operator description with $L_p$ norm formula and Wikipedia link. Improve pin 1 and output pin descriptions.


- [norm_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/norm_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution. Fix operator description accuracy: now documents $L_p$ norm (not just $L_2$). Improve pin 1 and output pin descriptions. Add Wikipedia link.


- [outer_product](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/outer_product.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [phase](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/phase.md)

  > 0.0.1: Improve operator description with atan2 formula and Wikipedia link. Add output pin description.


- [phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/phase_fc.md)

  > 0.0.1: Improve operator description with atan2 formula, zero-field fallback and Wikipedia link. Add input and output pin descriptions.


- [polar_to_cplx](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/polar_to_cplx.md)

  > 0.0.1: Improve operator description with polar-to-rectangular conversion formulas and Wikipedia link. Add input and output pin descriptions.


- [pow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/pow.md)

  > 0.1.0: Pin added to chose the value to set for division by zero for negative exponents


- [pow_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/pow_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [real_part](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/real_part.md)

  > 0.0.1: Improve operator description. Add input and output pin descriptions.


- [scale](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/scale.md)

  > 0.0.1: Fixed a segmentation fault. Improve operator description with scalar and vector scale formulas. Fix 'scaler' typo. Add Hadamard product synonym for field-valued scale factor.


- [scale_by_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/scale_by_field.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_by_field_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/scale_by_field_fc.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/scale_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution. Improve operator description with supported scale-factor types. Fix 'scaler' typo. Add Hadamard product synonym for field-valued scale factor.


- [sin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sin.md)

  > 0.0.1: Improve operator description to document unit constraints and formula. Add input and output pin descriptions. Add Wikipedia link.


- [sin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sin_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sqr](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sqr.md)

  > 0.0.1: Improve operator description with formula and output unit. Improve output pin description. Add Wikipedia link.


- [sqr_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sqr_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sqrt](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt.md)

  > 0.0.1: Improve operator description with formula, non-negativity constraint, and output unit. Improve input and output pin descriptions. Add Wikipedia link.


- [sqrt_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt_fc.md)

  > 0.0.1: If empty fields container is provided, returns the same empty fields container.


- [sweeping_phase](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sweeping_phase.md)

  > 0.0.1: Improve operator description with projection formula and Wikipedia link. Improve pin 2, 4 and output pin descriptions.


- [sweeping_phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/sweeping_phase_fc.md)

  > 0.0.1: Improve operator description with projection formula and Wikipedia link. Improve pin 2, 4 and output pin descriptions.


- [time_freq_interpolation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/time_freq_interpolation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators. Improve operator description with interpolation formula and Wikipedia link. Add missing output pin 1 (TimeFreqSupport). Improve pin descriptions.

  > 0.1.0: Add new input pin 5 which allows to interpolate in log-log scale


- [unit_convert](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/unit_convert.md)

  > 0.0.1: Improve operator description to document conversion formula, mesh handling, and permissive behaviour. Improve output pin description.


- [unit_convert_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/math/unit_convert_fc.md)

  > 0.0.1: Improve operator description to document conversion formula and permissive behaviour. Add input pin description. Improve output pin description.



#### mesh

- [acmo_mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/acmo_mesh_provider.md)

  > 0.0.1: Improved error reporting: errors now include structured context and a remediation suggestion.


- [change_cs](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/change_cs.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [combine_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/combine_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [exclude_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/exclude_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [from_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/from_scoping.md)

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

  > 0.5.0: Added the filter_named_selections input pin.


- [from_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/from_scopings.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity.

  > 0.1.0: Improvement in the performance for cases with non shared scoping between property fields and mesh.

  > 0.1.1: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [make_plane_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/make_plane_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [make_sphere_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/make_sphere_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_extraction](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_extraction.md)

  > 1.0.0: Property fields associated to the mesh are rescoped on the selection and associated to the new mesh.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 2.0.0: Internal refactoring to use transpose and mesh::by_scoping operator.


- [mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.

  > 0.1.1: Increased memory efficiency.

  > 0.1.2: Performance improvements for distributed data sources cases.


- [mesh_to_graphics](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_graphics.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_to_graphics_edges](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_graphics_edges.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Added support for Surface3, Surface4, Surface6, and Surface8 elements.


- [mesh_to_pyvista](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_pyvista.md)

  > 0.0.1: Fix node ordering for face connectivity of fluid cell faces marked as reversed.

  > 0.0.2: Fix connectivity construction to handle higher order beam and line elements.

  > 0.0.3: Improve performance of mesh conversions for all types of meshes.

  > 1.0.0: Add new mesh scoping input pin to allow exporting a subset of the original mesh. Add new as_modified_connectivity input pin to allow exporting connectivity in a VTK 9 compatible format without node count headers and with offsets to it. 


- [meshes_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/meshes_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.

  > 0.1.1: Increased memory efficiency.

  > 0.1.2: Performance improvements for distributed data sources cases.


- [points_from_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/points_from_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [skin](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/skin.md)

  > 0.0.1: Fixing issue related to shared pointers of property fields and mesh.

  > 0.0.2: Internal change to share pointers of property fields and mesh.

  > 0.0.3: Added support for Edge2, Edge3 and Beam4 elements.

  > 1.0.0: Added support for elements with dropped nodes, as its faces may have been incorrectly added to the output skin mesh before.

  > 1.0.1: Added support for Surface3, Surface4, Surface6, and Surface8 elements.

  > 1.0.2: Reverted memory improvements.


- [split_fields](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/split_fields.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [split_mesh](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/split_mesh.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity

  > 0.1.0: Improvement in the performance by implementing scoping_build_index_tables operator.


- [wireframe](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/mesh/wireframe.md)

  > 0.1.0: Addition of optional element_restriction pin.

  > 0.1.1: Operator now supports shell and beam elements.

  > 0.1.2: Internal refactoring to use Scoping Iterators.



#### metadata

- [boundary_condition_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/boundary_condition_provider.md)

  > 0.0.1: Improved documentation and exceptions handling.


- [cyclic_mesh_expansion](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/cyclic_mesh_expansion.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [element_types_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/element_types_provider.md)

  > 0.1.0: Added the possibility to output a PropertyField.


- [integrate_over_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/integrate_over_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Allow to make integration even if the time freq support contains several steps (for example multiple RPM), only if the provided scoping correspond to frequencies of a unique RPM.


- [is_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/is_cyclic.md)

  > 1.0.0: If the operator is not implemented and permissive mode is activated, returns an empty string.


- [mesh_selection_manager_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/mesh_selection_manager_provider.md)

  > 0.1.0: Support h5dpf files both for single and distributed datasources.


- [streams_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/streams_provider.md)

  > 0.1.0: Add the permissive configuration.


- [time_freq_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/metadata/time_freq_support_get_attribute.md)

  > 0.1.0: Add new supported property name 'step_id_from_harmonic_index' returning an int.

  > 0.1.1: Internal refactoring to use Scoping Iterators.



#### min_max

- [max_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/max_over_time_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [min_max](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_by_time](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_time.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_fc.md)

  > 0.0.1: Ignore empty fields to calculate maximum & minimum values. A zero value will be output if the field is empty.


- [min_max_fc_inc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_fc_inc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_max_inc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_inc.md)

  > 0.0.1: Rewrote operator and pin descriptions.


- [min_max_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_label_fc.md)

  > 0.0.1: Input fields with no data are now excluded from the output instead of producing zero-valued entries.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_max_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_time_by_entity.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Rewrote operator and pin descriptions.


- [min_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_over_time_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [time_of_max_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/time_of_max_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.


- [time_of_min_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/min_max/time_of_min_by_entity.md)

  > 0.0.1: Rewrote operator and pin descriptions. Set scripting name explicitly.



#### result

- [accu_eqv_creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/accu_eqv_creep_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [accu_eqv_plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/accu_eqv_plastic_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [artificial_hourglass_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/artificial_hourglass_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [beam_axial_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_axial_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_axial_stress.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_axial_total_strain.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_s_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_s_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_t_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_t_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_torsional_moment](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/beam_torsional_moment.md)

  > 0.1.0: MAPDL results supported.


- [co_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/co_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_fluid_penetration_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_fluid_penetration_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_friction_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_friction_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_gap_distance](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_gap_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_penetration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_penetration.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_sliding_distance](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_sliding_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_status](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_status.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_surface_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_surface_heat_flux.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_total_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/contact_total_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [coordinate_system](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/coordinate_system.md)

  > 0.0.1: Output pin 0 documentation update.


- [creep_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/creep_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [displacement](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/displacement.md)

  > 1.0.0: Modal coordinates from RFRQ, RDSP and DSUB files can't be extracted through displacement operator anymore, user can use modal_coordinate operator instead.


- [elastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [electric_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/electric_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/electric_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/electric_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_centroids](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/element_centroids.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_nodal_forces](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/element_nodal_forces.md)

  > 0.1.0: split_force_components pin deprecated. To obtain rotation and temperature dofs please use the dedicated operator (element_nodal_moments, element_nodal_heat)Use the component selector to retrieve a specific derivative order. Components 0, 1 and 2 for stiffness. Components 3, 4 and 5 for damping. Components 6, 7 and 8 for inertia.


- [element_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/element_orientations.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_heat_generation](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elemental_heat_generation.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_volume](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/elemental_volume.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [equivalent_mass](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/equivalent_mass.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [eqv_stress_parameter](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/eqv_stress_parameter.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [euler_load_buckling](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/euler_load_buckling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [gasket_inelastic_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_inelastic_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_thermal_closure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_thermal_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/heat_flux.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [hydrostatic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/hydrostatic_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [incremental_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/incremental_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [kinetic_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/kinetic_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.

  > 2.0.0: In the case of a Modal analysis computation of cyclic expanded kinetic and strain energies from Element Nodal Forces and DOFs, rotation contributions were not accounted for.


- [magnetic_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/magnetic_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/magnetic_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_scalar_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/magnetic_scalar_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [magnetic_vector_potential](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/magnetic_vector_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [material_property_of_element](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/material_property_of_element.md)

  > 0.1.0: Added operator documentation and explicit pin contracts.


- [members_in_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/members_in_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_compression_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/members_in_compression_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_linear_compression_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/members_in_linear_compression_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [migrate_to_h5dpf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/migrate_to_h5dpf.md)

  > 0.1.0: Results that don't contain any field are now skipped from the export

  > 0.2.0: Add migrated_file_streams output pin to allow reuse of the migrated file in incremental migration

  > 0.3.0: Change on the export_floats behavior, if no value is provided, model data and nodal results are exported as double precision and elemental results as single precision

  > 0.4.0: Improved error messages to write the root cause


- [nmisc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nmisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.

  > 2.0.0: averaging is blocked.


- [nodal_to_global](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_to_global.md)

  > 0.1.0: Addition of optional inverse_rotation pin.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [num_surface_status_changes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/num_surface_status_changes.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [poynting_vector_surface](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/poynting_vector_surface.md)

  > 0.0.1: Fix bug in memory allocation for some local variables participating in interpolation at integration points.


- [pressure](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_displacement](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/raw_displacement.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_reaction_force](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/raw_reaction_force.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [recombine_harmonic_indeces_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

  > 0.1.0: Addition of is_constant pin


- [result_provider](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/result_provider.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were only performed if the requested result was a 3D vector or a symmetrical 3x3 matrix.

  > 1.0.1: Fix error for stress-like results.


- [smisc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/smisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.

  > 2.0.0: averaging is blocked.


- [spectrum_data](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/spectrum_data.md)

  > 0.1.0: Now supports reading of mode coefficients and damping ratios from .mode file.


- [state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stiffness_matrix_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stiffness_matrix_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.

  > 2.0.0: In the case of a Modal analysis computation of cyclic expanded kinetic and strain energies from Element Nodal Forces and DOFs, rotation contributions were not accounted for.


- [stress](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_ratio.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stress_von_mises](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/stress_von_mises.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [structural_temperature](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/structural_temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [swelling_strains](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/swelling_strains.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature_grad](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/temperature_grad.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_dissipation_energy](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_dissipation_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thermal_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strains_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thermal_strains_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thickness](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/thickness.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [torque](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/torque.md)

  > 0.1.0: Fields container supported on pin 1. Pin 1 name changed.

  > 1.0.0: The torque unit is now kept from the input units and not converted to N*m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [transient_rayleigh_integration](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/result/transient_rayleigh_integration.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### scoping

- [adapt_with_scopings_container](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/adapt_with_scopings_container.md)

  > 0.0.1: Fix exception type preservation during parallel execution.

  > 0.0.2: Fix issue when input FieldsContainer and ScopingsContainer don't share labels.

  > 0.0.3: Add check on scoping of field to rescope and input scoping locations.

  > 0.0.4: Performance improvement.


- [compute_element_centroids](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/compute_element_centroids.md)

  > 0.1.0: Added arithmetic_average centroid algorithm and explicit pin-combination validation/documentation.

  > 0.1.1: Support Surface elements.


- [intersect](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/intersect.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Performance improvement when scop1 is included in scop2. The operator will return scop1 without any transformation.

  > 0.0.3: Improve membership-check performance.

  > 0.0.4: Reduce memory footprint and increase performance.


- [on_property](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/on_property.md)

  > 1.0.0: Remove pin "inclusive"

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Allow the operator use for h5dpf files.


- [reduce_sampling](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/reduce_sampling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [rescope](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [rescope_custom_type_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_custom_type_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [rescope_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_fc.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.

  > 0.1.5: Enable parallelism.


- [rescope_property_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_property_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix null pointer dereference before null check in extrapolation path.

  > 0.1.3: Handle time or frequency steps location correctly.

  > 0.1.4: Performance improvement.


- [scoping_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/scoping_get_attribute.md)

  > 0.1.0: Add new supported property name 'maximum_id' returning an int.


- [transpose](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/scoping/transpose.md)

  > 0.1.0: Improvement of performance

  > 0.1.1: Error with license

  > 0.2.0: Added extend_midside_nodes input pin

  > 0.2.1: Internal refactoring to use Scoping Iterators.



#### serialization

- [csv_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/csv_to_field.md)

  > 1.0.0: Fixed issue while reading csv with multiple fields and common time id between fields.


- [deserializer](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/deserializer.md)

  > 1.0.0: The stream_type input is made optional.


- [export_symbolic_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/export_symbolic_workflow.md)

  > 0.1.0: Changed the default name of input pin 1 to 'workflow_path', the previous name 'path' is kept as an alias.


- [field_to_csv](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/field_to_csv.md)

  > 1.0.0: Fixed issue while writing csv with multiple fields and common time id between fields.


- [hdf5dpf_custom_read](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/hdf5dpf_custom_read.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [hdf5dpf_generate_result_file](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/hdf5dpf_generate_result_file.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix use of odd and even in pin description

  > 0.0.3: Improve error messages: operator now throws typed, structured exceptions with actionable suggestions and machine-readable attributes.


- [import_symbolic_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/import_symbolic_workflow.md)

  > 0.1.0: Added support for importing symbolic workflows directly from strings.

  > 0.2.0: Changed the default name of input pin 0 to 'workflow_path', the previous name 'string_or_path' is kept as an alias.


- [serialize_to_hdf5](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/serialize_to_hdf5.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [serializer](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/serializer.md)

  > 1.0.0: Changed default value of stream_type input pin from ASCII to binary.


- [workflow_to_pydpf](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/serialization/workflow_to_pydpf.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Use numeric pin APIs for Any-typed pins.



#### utility

- [compute_time_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/compute_time_scoping.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_scoping.md)

  > 0.0.1: Error with license


- [extract_sub_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_mc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_mc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_sc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_sc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.1.0: Addition of an optional input pin to select frequencies from a unique step/RPM.


- [fc_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/fc_get_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' that returns a string and 'field_names' that returns a StringField.

  > 0.2.0: Add new supported property name 'num_fields' that returns an integer.


- [field_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/field_get_attribute.md)

  > 0.1.0: Add new supported property name 'datasize' that returns an integer.

  > 0.2.0: Add new supported property name 'data' that returns a vector of the field's data's type (double for field, int for property field, string for string field, char for custom type field).


- [for_each](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/for_each.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [forward](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/forward.md)

  > 1.0.0: Add ellipsis property to pins.


- [html_doc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/html_doc.md)

  > 0.1.0: Show operator version and changelog.

  > 0.1.1: Fix support for dollar LaTeX delimiters in MathJax.


- [ints_to_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/ints_to_scoping.md)

  > 0.1.0: Add input pin 2 to specify an upper bound to create a scoping for a given range (taking single input in pin 0 as the lower bound).


- [make_for_each_range](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/make_for_each_range.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_materials](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_materials.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_meshes.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Support merging the node to element connectivity.

  > 0.0.3: Fix merging empty meshes.

  > 0.0.4: Performance improvements.


- [merge_meshes_containers](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_meshes_containers.md)

  > 0.0.1: Skip merge for identical meshes based on hash comparison.


- [merge_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_scopings.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_time_freq_supports](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_time_freq_supports.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [producer_consumer_for_each](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/producer_consumer_for_each.md)

  > 0.1.0: Addition of events to monitor the status of the operator.

  > 0.2.0: Moving event of progress bar at the beggining of the loop and changing input stream.


- [scalars_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/scalars_to_field.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [set_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/set_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' and 'field_names'.

  > 0.2.0: Add new supported property name 'unit' that sets a unit on each field.


- [strain_from_voigt_fc](https://ansys-a.devportal.io/docs/dpf-framework-2027-r1/operator-specifications/utility/strain_from_voigt_fc.md)

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
