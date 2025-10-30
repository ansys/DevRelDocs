# Changelog

Changes since the last released version for DPF 26.1.pre1 (as of 2025-10-30).

This changelog is organized by category, with sections for different types of updates (new features, bug fixes, changes, performance improvements).

The following table shows which components have updates in each category.

| Component | Features | Fixes | 
|-----------|----------|----------|
| cff | [2 items](#Features_cff) | |
| cgns | [1 item](#Features_cgns) | |
| changelog | [2 items](#Features_changelog) | |
| ci | [1 item](#Features_ci) |[1 item](#Fixes_ci) |
| compression | [2 items](#Features_compression) | |
| core |  |[1 item](#Fixes_core) |
| cyclic | [1 item](#Features_cyclic) | |
| doc | [2 items](#Features_doc) | |
| dpf | [3 items](#Features_dpf) |[1 item](#Fixes_dpf) |
| eng_mat |  |[1 item](#Fixes_eng_mat) |
| expansion | [1 item](#Features_expansion) | |
| fbs | [2 items](#Features_fbs) | |
| femutils |  |[3 items](#Fixes_femutils) |
| framework | [2 items](#Features_framework) |[1 item](#Fixes_framework) |
| grpc | [1 item](#Features_grpc) |[1 item](#Fixes_grpc) |
| h5dpf | [1 item](#Features_h5dpf) |[1 item](#Fixes_h5dpf) |
| hdf5 | [4 items](#Features_hdf5) | |
| hgp | [2 items](#Features_hgp) | |
| kernel | [1 item](#Features_kernel) |[1 item](#Fixes_kernel) |
| lsdyna | [1 item](#Features_lsdyna) | |
| mapdl | [11 items](#Features_mapdl) |[14 items](#Fixes_mapdl) |
| mapdlpluggin |  |[1 item](#Fixes_mapdlpluggin) |
| math | [7 items](#Features_math) | |
| mechanical | [2 items](#Features_mechanical) |[3 items](#Fixes_mechanical) |
| mesh |  |[1 item](#Fixes_mesh) |
| misc | [11 items](#Features_misc) |[19 items](#Fixes_misc) |
| native |  |[3 items](#Fixes_native) |
| perf | [2 items](#Features_perf) |[1 item](#Fixes_perf) |
| prime | [2 items](#Features_prime) | |
| pydpf |  |[1 item](#Fixes_pydpf) |
| refactor | [1 item](#Features_refactor) | |
| workflows |  |[1 item](#Fixes_workflows) |


## cff
### <a id="Features_cff"></a> Features

- Expose is_mesh_available:
  > 
  >
  > Expose `is_mesh_available` for cff files.
  >
  > 
  >
  > 

- Expose all results from Fluid files:
  > 
  >
  > Previously, only a selected set of results could be retrieved from Fluid files (velocity, pressure...). With this enhancement, all results contained in a Fluent/CFX result file can be retrieved.
  >
  > 
  >
  > 

## cgns
### <a id="Features_cgns"></a> Features

- Expose is_mesh_available operator:
  > 
  >
  > Expose `is_mesh_available` for cgns and h5dpf files.
  >
  > 
  >
  > 

## changelog
### <a id="Features_changelog"></a> Features

- Add operator changes to DPF changelog:
  > Add tooling to track operator changes since the last DPF release and generate documentation sources for the DPF Changelog.
  >
  > 
  >
  > 

- Add a changelog to all operators:
  > 

## ci
### <a id="Features_ci"></a> Features

- Add SCA scan for DPF:
  > 
  >
  > Monthly scan of DPF repo for Software Composition Analysis which scan identifies and manages open-source software components using mend tool.
  >
  > 

### <a id="Fixes_ci"></a> Fixes

- Ensure backwards compatibility in invariants and eigenvalues source operators:
  > 
  >
  > 
  >
  > Add back the `bool_rotate_to_global` input pins to the invariants and eigenvalues source operators to ensure backwards compatibility of the DPF API.
  >
  > 
  >
  > 
## compression
### <a id="Features_compression"></a> Features

- Support threshold by number of components in quantization operator:
  > It is now possible to apply a different threshold on each component in the operators **Quantization** ("quantization_fc") and **QuantizationFC** ("quantization_fc").
  >
  > 
  >
  > 

- Scale and Round Operator:
  > 

## core

### <a id="Fixes_core"></a> Fixes

- Avoid spawning too many threads:
  > 
  >
  > Following up on OpenMP replacement in the core, many threads were needlessly spawned, thus incurring an important overhead.
  >
  > 
  >
  > 
## cyclic
### <a id="Features_cyclic"></a> Features

- Cyclic constant expansion for volume and NMISC:
  > Cyclic constant expansion for volume and NMISC
  >
  > 
  >
  > 

## doc
### <a id="Features_doc"></a> Features

- Show operator version and changelog:
  > 
  >
  > The html_doc operator now generates the html operator documentation with the operator version and its changelog displayed.
  >
  > Also adds to the HGP ansys::dpf::Changelog.toMap().
  >
  > 
  >
  > 

- Add supported file types for operators in generated documentation:
  > 
  >
  > 
  >
  > Operator "html_doc" now displays information about supported file types if available.
  >
  > new operator "info::router_discovery" allows to access information through DataTree.
  >
  > 
  >
  > 

## dpf
### <a id="Features_dpf"></a> Features

- Improvement of indexById performance:
  > feat(dpf): Improvement of indexById performance.
  >
  > 
  >
  > 

- Improvement of indexById performance.':
  > 

- Improvement of indexById performance.:
  > feat(dpf): Improvement of indexById performance.
  >
  > 
  >
  > 

### <a id="Fixes_dpf"></a> Fixes

- Improve rotation handling on Invariant Source operators.:
  > 
  >
  > Improve rotation handling on Invariant operators.
  >
  > 
  >
  > 
## eng_mat

### <a id="Fixes_eng_mat"></a> Fixes

- Evaluation of temperature dependent material property field from rst was not working properly.:
  > Correction of ans_mat_from_materials_data, was not working properly when reading temperature dependent material properties from rst file.
  >
  > 
  >
  > 
## expansion
### <a id="Features_expansion"></a> Features

- Addition of chunk option to modal superposition:
  > Addition of mode chunking option to modal superposition workflow.
  >
  > 
  >
  > 

## fbs
### <a id="Features_fbs"></a> Features

- Add unit tests to pipeline:
  > 
  >
  > 

- Allow to consume fbs objects in DPF:
  > 
  >
  > Schemas base data structures build with flatbuffers can be used in DPF.
  >
  > 
  >
  > 

## femutils

### <a id="Fixes_femutils"></a> Fixes

- Performance and result issue with split_fields:
  > 
  >
  > Performance issue with the `split_fields` operator when several meshes are the input.
  >
  > 

- BugFix in op normals_provider_nl:
  > 
  >
  > - This PR concerns fixing the incorrect calculation of normals for a model containing shell elements of kAnsQuad8 shape described in length units other than meters.
  >
  > - The proposed improvement fixes the normal calculations affecting node, element and face normals for shell elements.
  >
  > 
  >
  > 

- Fix normals_provider_nl operator crash in Mechanical scripting (Bug 1310325):
  >  The reported crash arose from a segmentation fault that occurred when the normal_provider_nl op that is designed for a shell element is used on a solid element. The proposed fix checks if the input mesh to this operator contains solid region and throws an error if yes and prevents a crash.
  >
  > 
  >
  > 
## framework
### <a id="Features_framework"></a> Features

- Add hash of DPF entities and global hash of workflow:
  > 

- Implement set and get hashable for Scoping, DataSources and Workflow:
  > Implement `set_hashable_entity` and `get_hashable_entity` in Framework and expose it HGP side for DataSources, Scoping and Workflow classes.
  >
  > Those methods will allow a user to send a specific attribute of those class:
  >
  > - string related to file path for DataSources
  >
  > - pair<int,int> related to topology identifier for Scoping
  >
  > - string related to workflow identifier (can be concatenated name from the Engine) for the Workflow
  >
  > 
  >
  > to be hashed in a more efficient way.
  >
  > 
  >
  > 

### <a id="Fixes_framework"></a> Fixes

- ErrorAndNorm operator:
  > Fields containers with multiple labels (not only time) are now allowed in ErrorAndNorm ("error_norm_calc") operator.
  >
  > The operator computes the norm and the error for each field of the FC, even if there are multiple fields at a time step.
  >
  > 
  >
  > 
## grpc
### <a id="Features_grpc"></a> Features

- Support named Dimensionless units in gRPC:
  > 
  >
  > 
  >
  > Support named Dimensionless units in gRPC. Since 25.2 this was possible from the HgP In Process. Now it is also possible in gRPC.
  >
  > 
  >
  > 

### <a id="Fixes_grpc"></a> Fixes

- Creation of Any from DataSources in gRPC:
  > Fix creation of Any from DataSources in gRPC
  >
  > 
  >
  > 
## h5dpf
### <a id="Features_h5dpf"></a> Features

- Expose is_mesh_available operator:
  > 
  >
  > Expose `is_mesh_available` for cgns and h5dpf files.
  >
  > 
  >
  > 

### <a id="Fixes_h5dpf"></a> Fixes

- Fix thickness extraction from SMISC/NMISC from h5dpf file:
  > Fix thickness extraction from SMISC/NMISC from h5dpf file
  >
  > 
  >
  > 
## hdf5
### <a id="Features_hdf5"></a> Features

- Enable reading fields with specific scoping via HDF5 API:
  > 
  >
  > 

- Initial HDF5 built-in link implementation for "support references" in a scoping object:
  > This PR introduces the built-in HDF5 link mechanism to replace the mesh reference of a scoping object, the remaining references for each object will be added in next separate PRs..
  >
  > 

- HDF5 Writing to Use Explicit Dimensionality for Improved Visualization and Enable Chunking:
  > This PR refactors the HDF5 data writing logic to explicitly use dimensionality (e.g., 2D layout instead of flat vectors) for improved data readability in visualization tools. It also enables **chunking**.
  >
  > 
  >
  > 

- Add hdf5 support of data tree and any collection:
  > 
  >
  > 
  >
  > Add support for data tree and any collection for hdf5 import and export.
  >
  > 
  >
  > 

## hgp
### <a id="Features_hgp"></a> Features

- Allow user to get DPFClientAPI library dir:
  > 
  >
  > DPF c++ API: export LibraryHandle::libraryDir which returns the path to the directory where DPF is loaded.
  >
  > 
  >
  > 

- Add new hgp functions to copy without data into a new field/scoping:
  > 
  >
  > Add new hgp functions to copy without data into a new field.
  >
  > 
  >
  > 

## kernel
### <a id="Features_kernel"></a> Features

- Establish thread safety and STL compliance for scopingIterators:
  > - Test for thread safety when using scoping Iterators for read access within parallel regions (over fields, over scoping etc).
  >
  > - Promote STL algorithm compliance in scoping iterators so that scoping objects can be directly manipulated with them.
  >
  > 

### <a id="Fixes_kernel"></a> Fixes

- Fixing memory error in Scoping Iterators for empty scoping:
  > - This fix prevents memory exception errors arising during initialization of the scoping iterators for non-memory allocated scopings.
  >
  > 
  >
  > 
## lsdyna
### <a id="Features_lsdyna"></a> Features

- Support d3plot files serialized with FEMZIP:
  > 
  >
  > 
  >
  > Support d3plot files serialized with FEMZIP.
  >
  > 
  >
  > 

## mapdl
### <a id="Features_mapdl"></a> Features

- Refactor ElementType handling to increase performance:
  > 
  >
  > Refactor the way ElementTypes are handled inside DPF mapdl Operators.
  >
  > 
  >
  > 

- Nodal results on changing meshes:
  > Allow to read nodal results on changing meshes (adaptive model with NLAD or SMART Crack growth)
  >
  > 
  >
  > 

- Add ability to record all the skipped mesh elements:
  > 
  >
  > The mesh provider of MAPDL result file now has the ability to record any skipped element, and debug log will log skipped elements during result reading
  >
  > 
  >
  > 

- Add eExtendMidNodesPin in Source Operator for ElementalNodal Operators:
  > Add a pin `eExtendMidNodesPin` in source operators to allow to remove mid-nodes when averaging from `ElementalNodal` to `Nodal`
  >
  > 
  >
  > 

- Enable back MMAP by default:
  > 
  >
  > 

- Change default reading method of rst f...:
  > 
  >
  > 

- Change default reading method of rst files to MMAP:
  > 
  >
  > 

- Use 1 level to fill the rst file graph by default:
  > 
  >
  > 
  >
  > Enhance the rst file reading process by using 1 level to fill the rst file graph.
  >
  > 
  >
  > 

- Expose rotation, rotation velocity and rotation acceleration results:
  > 
  >
  > Addition of operators to read rotation (ROT), rotation velocity (OMG) and rotation acceleration (DMG) results.
  >
  > 

- Expose MAPDL Beam Results:
  > 
  >
  > - Expanding LS-Dyna Beam Result Operators to MAPDL Beam Results: Axial_Force `B_N`, Bending Moments Y and Z `B_M1` and `B_M2`, Torque `B_MT`, Shear Forces `B_T1` and `B_T2`, Axial Stress `B_SN` and Axial Strain `B_EL`.
  >
  > - Added a way to pass a vector of properties to the `scoping_provider_by_prop` operator.
  >
  > 
  >
  > 

- Development of is_mesh_available operator:
  > 
  >
  > 
  >
  > Add a `is_mesh_available` operator to lightly inquire if the result file contains the mesh.
  >
  > 
  >
  > 

### <a id="Fixes_mapdl"></a> Fixes

- Fix expansion of element nodal forces (ENF):
  > Fix the expansion of inertial element nodal forces
  >
  > 
  >
  > 

- Avoid reading MCF at each chunk computation:
  > Bug fix to enhance performance on MCF requests.
  >
  > 
  >
  > 

- Remove filtering for unsupported elements:
  > Removal of unsupported elements from filtering functions.
  >
  > 
  >
  > 

- Fix MSUP expansion of results from distributed models where one domain is empty:
  > 
  >
  > Fix MSUP expansion of results from distributed models where one domain is empty.
  >
  > 
  >
  > 

- Use 0 levels to gather light record Information:
  > 
  >
  > 

- Fix cms crash:
  > Fix cms crash
  >
  > 
  >
  > 

- Add missing TimeFreqSupport to modal result:
  > Add missing TimeFreqSupport to modal result
  >
  > 
  >
  > 

- Fix reading of RFTOT & UTOT for cyclic models:
  > 
  >
  > 

- Fix gasket closure results:
  > 
  >
  > Fix bugs concerning gasket results
  >
  > - GKD -> was returning GKDI -> now returns sum of GKTH and GKDI
  >
  > - GKDI -> was returning an error or wrong values -> works correctly now
  >
  > - GKS / GKTH / GKDI -> rotation of these results is now blocked to match APDL results
  >
  > 
  >
  > 

- Fix reading of mesh(es) after cyclic expansion:
  > Fix reading of mesh(es) after cyclic expansion
  >
  > 
  >
  > 

- Fix cyclic mesh expansion:
  > Fix cyclic mesh expansion on mesh_provider operator
  >
  > 
  >
  > 

- Fix connectivity in linear CONTA177 elements:
  > 

- TFS read from mode file fails:
  > 
  >
  > Correction of !592711
  >
  > 

- TFS read from mode file fails:
  > 
  >
  > Unable to solve the mechdat while performing Modal analysis for Bearing elements when on demand expansion option is ON and there is no output controls property set to Yes in Analysis Settings.
  >
  > Getting the DPF error - runtime error: dpf core function call; TimeFreqSupportProvider:18244<-composite::time_freq_support_provider:-1<-mapdl::mode::TimeFreqSupportProvider:18260<-Record "MODE::FRQ" is not a record of double.
  >
  > 
  >
  > 
## mapdlpluggin

### <a id="Fixes_mapdlpluggin"></a> Fixes

- Pluggin stream name db_live need to be in GetFirstStream:
  > add db_live to GetFirstStream for generic operators
  >
  > 
  >
  > 
## math
### <a id="Features_math"></a> Features

- Add new operator (matrices assembly) for Transfer Path Analysis:
  > 
  >
  > 

- Create new operator to do QR solve with fields containers:
  > Create a new operator to perform QR solve with fields containers
  >
  > 
  >
  > 

- Add input_dof_index support in make_tf_input+modal_solve workflow:
  > 
  >
  > 

- Support nodal/element scopings container and summation fields container in force summation operators:
  > - Input mesh scopings container are now supported in force_summation and force_summation_psd operators
  >
  > - Input fields container for summation point are now supported in force_summation, torque and force_summation_psd operators
  >
  > 
  >
  > 

- Add new operator (connectivity matrix) for Transfer Path Analysis:
  > 
  >
  > feat(math): Add new operator (connectivity matrix) for Transfer Path Analysis
  >
  > 
  >
  > 

- Create a new wrapper for MKL QR solve (DGELS/ZGELS routines):
  > 

- Create new wrappers for eigenvalue analysis:
  > 
  >
  > feat(math) - Create new wrappers for eigenvalue analysis
  >
  > 
  >
  > 

## mechanical
### <a id="Features_mechanical"></a> Features

- Adding feedback from the Mechanical Team:
  > Moving event of progress bar at the beginning of the loop and changing input stream.
  >
  > 

- Addition of events to monitor the status of producer_consumer_for_each operator:
  > Addition of events to monitor the status of producer_consumer_for_each operator.
  >
  > 

### <a id="Fixes_mechanical"></a> Fixes

- Fix error with multiRPM cases and cutoff frequency:
  > Fix error with multiRPM cases and cutoff frequency.
  >
  > 

- Fix issue with unordered source times in mechanical::time_freq:interpolation:
  > 
  >
  > 

- Fix error in mechanical::time_freq_interpolation:
  > 
  >
  > 
## mesh

### <a id="Fixes_mesh"></a> Fixes

- Remove invalid dead code:
  > 
  >
  > 
## misc
### <a id="Features_misc"></a> Features

- Adapt operator for Cyclic Modal StructOpt:
  > 
  >
  > Improve ints_to_scoping/"scopingify" with additional optional pin to define a range scoping to be created.
  >
  > 
  >
  > Creation of cyclic_support_get_attribute/"cyclic_support::get_attribute" operator to retrieve element & node duplicate offset.
  >
  > 
  >
  > Add new property name "step_id_from_harmonic_index" for time_freq_support_get_attribute/"timefreqsupport::get_attribute" operator, returning a int corresponding to the load step of a Harmonic Index.
  >
  > 
  >
  > 

- Support of layers in APDLElementDescriptor:
  > 
  >
  > Add Management of ShellLayers to `ApdlElementDescriptor`
  >
  > Add Shell Layer functors to handle elements `SHELL43-63-93`, `SHELL131&132`, `SHELL181-281-208-209`, `SOLSH190`, `SHELL294`, `SOLID185-186`, `SOLID278-279`, `ELBOw290`
  >
  > Add corresponding element descriptors and new unit tests for those elements
  >
  > Add Testing of Shell layers in unit tests
  >
  > Refactor the ApdlElementDescriptorTest.cpp for better readability
  >
  > Add new class `APDLSectionDetails` in `ApdlElementDescriptor` to handle section data
  >
  > Add new struct `SectionTypeProperties`, `BeamSectionProperties`, `ShellSectionProperties` and `LayerProperties`  in MapdlCommonDefs.h to better handle section data
  >
  > Updated function isLayeredElement to use ApdlElementDescriptors.
  >
  > 
  >
  > 

- Added support for more material properties:
  > 
  >
  > Add support for material properties
  >
  > Correct previous behavior of sending 0 if the material property wasn't found for a material Id.
  >
  > 
  >
  > 

- Rework mesh providers to allow for adaptive meshes:
  > 
  >
  > When conducting Crack Growth analysis or some NLAD analysis, an adaptive remeshing process creates new meshes at some time steps.
  >
  > 
  >
  > This PR aims to change mesh getters (readMeshes, MeshProvider, meshes_provider) to allow them to read the correct mesh(es).
  >
  > 
  >
  > 

- Enable rotation of fluid velocities:
  > 
  >
  > Enable rotation of fluid velocities
  >
  > 
  >
  > 

- Expose pressure and fluid velocity results:
  > 
  >
  > Addition of operators to read fluid velocity and pressure (corresponding to the dofs VX, VY, VZ and PRES)
  >
  > 
  >
  > 

- Creep strain results:
  > 
  >
  > 
  >
  > 

- Refactor of Euler Angles Filter Functions using ApdlElementDescriptor:
  > 
  >
  > 
  >
  > - Modify the FilterElementResultsEUL so the function use the apdl_elements_library and get information about elements directly from it.
  >
  > - Instead of having plenty of if conditions, move the checks to the ApdlElementDescriptor Class to simplify
  >
  > - Use the node_mapping from ApdlElementDescriptor to simplify the iteration through degenerate elements
  >
  > 
  >
  > 

- Support header in field::get_attribute operator and expose propertyfield/customtypefield::get_attribute:
  > 
  >
  > 
  >
  > Headers are supported as valid properties to forward in the `field::get_attribute` operator. The `propertyfield::get_attribute` and `customtypefield::get_attribute` operatos are created mimicking the behavior of the other one.
  >
  > 
  >
  > 

- Change licensing behavior of normals_provider_nl operator (second round):
  > 
  >
  > 
  >
  > The `normals_provider_nl` is changed to require a license check (it was previously requiring checkout).
  >
  > 
  >
  > 

- Change licensing behavior of normals_provider_nl operator:
  > 
  >
  > 
  >
  > The `normals_provider_nl` is changed to require a license check (it was previously requiring checkout).
  >
  > 
  >
  > 

### <a id="Fixes_misc"></a> Fixes

- EShellLayerPin correct bool to int:
  > Correct a bug from previous PR merge this pin is an int, not a bool
  >
  > 
  >
  > 

- Performance issue with transpose scoping:
  > Improving performance of the `transpose_scoping` operator for cases with multiple scopings at a specific ratio with the length of the mesh.
  >
  > 

- Fix materials properties names:
  > 
  >
  > 

- Performance issue with solid to skin operator with ElementalNodal and Elemental:
  > Improving performance of the `solid_to_skin_fc` operator for `Elemental` and `ElementalNodal` locations.
  >
  > 

- Issue with empty fields in solid_to_skin_fc operator:
  > Fix issue with empty fields in the solid_to_skin_fc operator.
  >
  > 

- Fix nodes and elements scoping from mesh operators, previously the location of the retrieved scoping was empty:
  > fix: Fix nodes and elements scoping from mesh operators, previously the location of the retrieved scoping was empty
  >
  > 

- Performance issue of mapping solid to skin with Nodal locations:
  > Improvement of performance of `solid_to_skin_fc` for Nodal results. Parallelization is now available for this operator.
  >
  > 

- Undefined behavior with custom property fields in mesh::by_scoping:
  > Fixed undefined behavior with `mesh::by_scoping` when we create custom property fields.
  >
  > 

- Crash when querying skin mesh:
  > Fix issue when querying skin mesh.
  >
  > 

- Updated specification of min_max_over_time_by_entity:
  > 
  >
  > 
  >
  > Clarified the condition for output pins 2 & 3 presence.
  >
  > Explicitly wrote, compute_amplitude is only relevant for complex fields_container.
  >
  > 
  >
  > 

- Support heterogeneous ShellLayer fields that have already undergone a change_shell_layer operation in entity_average:
  > 
  >
  > 
  >
  > An issue was present in heterogeneous ShellLayer fields that have already undergone a `change_shell_layer` operation when then an `entity_average` operation is concatenated. This is now fixed.
  >
  > 
  >
  > 

- .ansys folder creation in home folder:
  > 
  >
  > 
  >
  > fix: .ansys folder creation in home folder
  >
  > 
  >
  > 

- Support heterogeneous shell layer fields in the elemental_to_nodal operator.:
  > 
  >
  > 
  >
  > Support heterogeneous shell layer fields in the `elemental_to_nodal` operator.
  >
  > 
  >
  > 

- Support heterogeneous ShellLayers Fields in all averaging operators:
  > 
  >
  > 
  >
  > Fields with heterogeneous shell layers (e.g. entities that have a different number of shell layers to the one reflected by the FieldDefinition ShellLayers) had a wrong behavior in different averaging operators. This is now fixed.
  >
  > 
  >
  > 

- Proper itialization of variable in skin operator:
  > 

- Fix connectivity of Line3 elements in skin mesh:
  > 
  >
  > 
  >
  > With a previous change, Line3 elements were shipped with only 2 nodes after a skin exraction operation. They now have the 3 nodes they are expected to have (2 corner nodes and the midside node).
  >
  > 
  >
  > 

- Fix scripting names of merge::solid_shell_fields and incremental::merge operators:
  > 
  >
  > 
  >
  > The operators `merge::solid_shell_fields` and `incremental::merge::xxx` had an inconsistent scripting name with the one generated in pydpf-core. This is now fixed.
  >
  > 
  >
  > 

- Support Beam3 elements in skin and mesh_to_pyvista operators:
  > 
  >
  > 
  >
  > The `"skin"` operator was only transferring Line2 and Line3 elements to the output mesh. Beam3 elements are supported now as well.
  >
  > 
  >
  > Similarly, the `"mesh_to_pyvista"` operator was not handling Beam3 elements. They are now correctly treated.
  >
  > 
  >
  > 

- Make load library on local core possible after plugin already loaded:
  > 
  >
  > 
  >
  > fix: possibility to load a plugin on a specific registry after loading it once
  >
  > 
  >
  > 
## native

### <a id="Fixes_native"></a> Fixes

- Fix issue with empty label and crash:
  > Fix issue with empty label and crash.
  >
  > 

- Fix shell layers support for scale_by_field operator:
  > Scale_by_field operator supports now fields with shell layers.
  >
  > 
  >
  > 

- Scaling factors for absolute normalization in ErrorAndNorm have a wrong size:
  > Absolute normalization in ErrorAndNorm ("error_and_norm") operator was exporting scaling factors with a size of the original data instead of having only one unit value per field.
  >
  > 
  >
  > 
## perf
### <a id="Features_perf"></a> Features

- Exposure of New getMatching API on Hgp:
  > 
  >
  > Exposure of getMatching API on Hgp.
  >
  > 
  >
  > 

- Build Scoping Index Tables Operator and filtering usage:
  > 
  >
  > Preprocessing scopings operator and filtering usage
  >
  > 
  >
  > 

### <a id="Fixes_perf"></a> Fixes

- Fix performance on averaging and filling fc for huge number of solutions on msup:
  > Fix performance on averaging and filling fc for huge number of solutions on msup
  >
  > 
  >
  > 
## prime
### <a id="Features_prime"></a> Features

- Implement morph_field_from_files operator:
  > 
  >
  > 

- Scafolds of the new morphing operator:
  > 
  >
  > 

## pydpf

### <a id="Fixes_pydpf"></a> Fixes

- Fix 22R2 setSupport on pyDPF:
  >  Fix 22R2 setSupport on pyDPF
  >
  > 
  >
  > 
## refactor
### <a id="Features_refactor"></a> Features

- Refactor for ApdlElements unit testing:
  > 
  >
  > We need more tests for the class ApdlElementDescriptor as we will now rely more and more on it.
  >
  > I will add a way to create manually a "descriptor" object and some way to create tests for each element descriptor individually.
  >
  > We need to be able to test the various atributes of the element descriptors and of the elementDetails generated based on the different keyopts. We need to test also that the nodeMapping obtained is correct and have tests in place for the degenerated elements.
  >
  > 
  >
  > 

## workflows

### <a id="Fixes_workflows"></a> Fixes

- Change normalization of the residual vector in enhanced pod workflow:
  > Normalization of the residual vector was made with respect to itself in the enhanced pod workflow (enhanced_pod_compression.swf), though it has to be done with respect to the inputs.
  >
  > 
  >
  > 
## Operator changes

### New operators

#### compression

- [quantization](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/compression/quantization.md):
  > Scales a field to a given precision threshold, then rounds all the values to the unit.

- [quantization_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/compression/quantization_fc.md):
  > Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.


#### mapping

- [create_sc_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_sc_mapping_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [mech_kriging_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mech_kriging_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [mech_point_cloud_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mech_point_cloud_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [mech_shape_function_surf_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mech_shape_function_surf_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [mech_shape_function_vol_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mech_shape_function_vol_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [mechanical_native_mapping::apply](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::apply.md):
  > Maps source data from source mesh to target mesh (computes interpolation).This operator needs to be used with the prepare mechanical native mapping associated one.

- [mechanical_native_mapping::prepare](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::prepare.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator needs to be used with the apply mechanical native mapping associated one. At least one of the optional DataTree inputs need to be set, in order to chose the mapping algorithm and set the mapping options.

- [mechanical_native_mapping::prepare::kriging](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::prepare::kriging.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use a point kriging algorithm. This operator needs to be used with the apply mechanical native mapping associated one.

- [mechanical_native_mapping::prepare::point_cloud](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::prepare::point_cloud.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use a point cloud based algorithm. This operator needs to be used with the apply mechanical native mapping associated one.

- [mechanical_native_mapping::prepare::shape_function_surfaces](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::prepare::shape_function_surfaces.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use the shape functions of the elements. This operator is meant for surfaces elements. This operator needs to be used with the apply mechanical native mapping associated one.

- [mechanical_native_mapping::prepare::shape_function_volumes](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mechanical_native_mapping::prepare::shape_function_volumes.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use the shape functions of the elements. This operator is meant for volume elements but can also be used with surfaces elements. This operator needs to be used with the apply mechanical native mapping associated one.

- [sc_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/sc_mapping.md):
  > Apply System Coupling to map data from an input mesh to a target mesh.

- [sysc_point_cloud_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/sysc_point_cloud_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sysc_shape_function_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/sysc_shape_function_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.


#### mesh

- [morphed_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/morphed_field.md):
  > Computes the displacement to apply on input coordinates (in 2) if a morphing field (in 0) is applied on coordinates (in 1)

- [morphing](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/morphing.md):
  > Applies morphing on a meshed region depending on an input displacement field.

- [prepare_morphing](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/prepare_morphing.md):
  > Prepare morphing on a meshed region depending on an input displacement field.


#### result

- [DMG](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/DMG.md):
  > Read/compute nodal rotational acceleration by calling the readers defined by the datasources.

- [DMGX](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/DMGX.md):
  > Read/compute nodal rotational acceleration X component of the vector (1st component) by calling the readers defined by the datasources.

- [DMGY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/DMGY.md):
  > Read/compute nodal rotational acceleration Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [DMGZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/DMGZ.md):
  > Read/compute nodal rotational acceleration Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [EPCR](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR.md):
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
  > | 12      | Multi-Point Constraint |
  > | 13      | Pretension      |
  > 

- [EPCR1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR1.md):
  > Read/compute element nodal component creep strains 1st principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [EPCR2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR2.md):
  > Read/compute element nodal component creep strains 2nd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [EPCR3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR3.md):
  > Read/compute element nodal component creep strains 3rd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [EPCRX](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRX.md):
  > Read/compute element nodal component creep strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCRXY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRXY.md):
  > Read/compute element nodal component creep strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCRXZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRXZ.md):
  > Read/compute element nodal component creep strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCRY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRY.md):
  > Read/compute element nodal component creep strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCRYZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRYZ.md):
  > Read/compute element nodal component creep strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCRZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCRZ.md):
  > Read/compute element nodal component creep strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [EPCR_EQV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR_EQV.md):
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
  > | 12      | Multi-Point Constraint |
  > | 13      | Pretension      |
  > 

- [EPCR_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR_intensity.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [EPCR_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPCR_max_shear.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [FV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/FV.md):
  > Read/compute FV by calling the readers defined by the datasources.

- [MAF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/MAF.md):
  > Read/compute modal acceleration by calling the readers defined by the datasources.

- [MCF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/MCF.md):
  > Read/compute modal coordinate by calling the readers defined by the datasources.

- [MVF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/MVF.md):
  > Read/compute modal velocity by calling the readers defined by the datasources.

- [OMG](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/OMG.md):
  > Read/compute nodal rotational velocity by calling the readers defined by the datasources.

- [OMGX](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/OMGX.md):
  > Read/compute nodal rotational velocity X component of the vector (1st component) by calling the readers defined by the datasources.

- [OMGY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/OMGY.md):
  > Read/compute nodal rotational velocity Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [OMGZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/OMGZ.md):
  > Read/compute nodal rotational velocity Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [ROT](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ROT.md):
  > Read/compute nodal rotation by calling the readers defined by the datasources.

- [ROTX](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ROTX.md):
  > Read/compute nodal rotation X component of the vector (1st component) by calling the readers defined by the datasources.

- [ROTY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ROTY.md):
  > Read/compute nodal rotation Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [ROTZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ROTZ.md):
  > Read/compute nodal rotation Z component of the vector (3rd component) by calling the readers defined by the datasources.


#### serialization

- [serialization::export_mesh_with_prime](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/serialization/serialization::export_mesh_with_prime.md):
  > Transfer DPF's meshed region into an external layer prime model and serialize it into a given file format.


#### utility

- [customtypefield::get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/customtypefield::get_attribute.md):
  > Gets a property from an input field/field container. A CustomTypeFieldin pin 0, a property name (string) in pin 1 are expected as inputs

- [cyclic_support::get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/cyclic_support::get_attribute.md):
  > A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

- [operator_changelog](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/operator_changelog.md):
  > Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

- [propertyfield::get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/propertyfield::get_attribute.md):
  > Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs



### Changed operators

#### averaging

- [force_summation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/force_summation.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.


- [force_summation_psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/force_summation_psd.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.



#### geo

- [normals_provider_nl](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/geo/normals_provider_nl.md)

  > 0.0.1: Bug fixed for input mesh type containing solid elements.

  > 1.0.0: Fixed reference coordinate-system on which normals are calculated.


- [transform_cylindricalCS](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/geo/transform_cylindricalCS.md)

  > 1.0.0: Fix bug for the rotation of strain fields with a cylindrical system whose axis is rotated.



#### logic

- [elementary_data_selector](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/logic/elementary_data_selector.md)

  > 0.1.0: fix of crash when input field data pointer is empty, the operator will output an empty field in this case moving forward.



#### mapping

- [mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/mapping.md)

  > 0.1.0: Performance improvement.


- [solid_to_skin](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/solid_to_skin.md)

  > 0.1.0: Improving performance for Nodal locations.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.


- [solid_to_skin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/solid_to_skin_fc.md)

  > 0.1.0: Improving performance for Nodal locations. Added parallelization

  > 0.1.1: Bug fixed for empty fields container

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations



#### math

- [accumulate_level_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_level_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_min_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_min_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [average_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/average_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [error_norm_calc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/error_norm_calc.md)

  > 0.1.0: Support generic labels (not only time) in the input FieldsContainer

  > 0.1.1: Fixed the size of output scaling factors for the absolute normalization


- [expansion::psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/expansion::psd.md)

  > 0.0.1: Fix handling of empty fields in mode shapes.


- [scale_by_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/scale_by_field.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_by_field_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/scale_by_field_fc.md)

  > 0.0.1: Add support of fields with shell layers


- [sweeping_phase](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/sweeping_phase.md)

  > 0.0.1: Clarify the documentation.


- [sweeping_phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/sweeping_phase_fc.md)

  > 0.0.1: Clarify the documentation.



#### mesh

- [mesh::by_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/mesh::by_scoping.md)

  > 0.1.0: Improvement in the performance.

  > 0.1.1: Fixed bug when the scoping of a property field and its mesh are different.

  > 0.1.2: Fixed bug when some of the ids of the desired new scoping is not present in the property field or in the mesh.

  > 0.1.3: Fixed undefined behavior with custom property fields.


- [meshed_skin_sector](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/meshed_skin_sector.md)

  > 0.0.1: Fixing issue related to share pointers of property fields and mesh.

  > 0.0.2: Internal change to share pointers of property fields and mesh.


- [meshes::by_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/meshes::by_scopings.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity.


- [split_mesh](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/split_mesh.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity



#### metadata

- [element_types_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/metadata/element_types_provider.md)

  > 0.1.0: Added the possibility to output a PropertyField.


- [timefreqsupport::get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/metadata/timefreqsupport::get_attribute.md)

  > 0.1.0: Add new supported property name 'step_id_from_harmonic_index' returning an int.



#### result

- [BFE](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/BFE.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [B_EL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_EL.md)

  > 0.1.0: MAPDL results supported.


- [B_M1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_M1.md)

  > 0.1.0: MAPDL results supported.


- [B_M2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_M2.md)

  > 0.1.0: MAPDL results supported.


- [B_MT](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_MT.md)

  > 0.1.0: MAPDL results supported.


- [B_N](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_N.md)

  > 0.1.0: MAPDL results supported.


- [B_SN](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_SN.md)

  > 0.1.0: MAPDL results supported.


- [B_T1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_T1.md)

  > 0.1.0: MAPDL results supported.


- [B_T2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/B_T2.md)

  > 0.1.0: MAPDL results supported.


- [ECT_CNOS](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_CNOS.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_FLUX](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_FLUX.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_FRES](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_FRES.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_GAP](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_GAP.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_PENE](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_PENE.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_PRES](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_PRES.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_SFRIC](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_SFRIC.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_SLIDE](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_SLIDE.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_STAT](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_STAT.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ECT_STOT](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ECT_STOT.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EF.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EFD](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EFD.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENF.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_CREQ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_CREQ.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_CRWK](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_CRWK.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_ELENG](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_ELENG.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_EPEQ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_EPEQ.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_HPRES](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_HPRES.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_PLWK](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_PLWK.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_PSV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_PSV.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_SEPL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_SEPL.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ENL_SRAT](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ENL_SRAT.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EPEL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EPEL1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPEL2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPEL3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPEL_EQV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL_EQV.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EPEL_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPEL_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPEL_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPPL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EPPL1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPPL2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPPL3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPPL_EQV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL_EQV.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EPPL_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [EPPL_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EPPL_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [ESV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ESV.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ETH](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ETH1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [ETH2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [ETH3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [ETH_EQV](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH_EQV.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [ETH_SWL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/ETH_SWL.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [EUL](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/EUL.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [GKD](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/GKD.md)

  > 1.0.0: Name changed from gasket deformation to gasket total closure

  > 1.0.1: adds the thermal and inelastic closure instead of returning only the inelastic closure


- [GKDI](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/GKDI.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [GKS](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/GKS.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [GKTH](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/GKTH.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [MF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/MF.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [MFD](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/MFD.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [S](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [S1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [S2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [S3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [S_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S_eqv.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [S_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [S_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/S_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [TF](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/TF.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [TG](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/TG.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [U](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/U.md)

  > 1.0.0: Modal coordinates from RFRQ, RDSP and DSUB files can't be extracted through displacement operator anymore, user can use modal_coordinate operator instead.


- [recombine_harmonic_indeces_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

  > 0.1.0: Addition of is_constant pin


- [torque](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/torque.md)

  > 0.1.0: Fields container supported on pin 1. Pin 1 name changed.



#### scoping

- [Rescope](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/Rescope.md)

  > 0.1.0: Performance improvement.


- [Rescope_ctf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/Rescope_ctf.md)

  > 0.1.0: Performance improvement.


- [Rescope_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/Rescope_fc.md)

  > 0.1.0: Performance improvement.


- [Rescope_pf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/Rescope_pf.md)

  > 0.1.0: Performance improvement.


- [transpose_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/transpose_scoping.md)

  > 0.1.0: Improvement of performance



#### utility

- [html_doc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/html_doc.md)

  > 0.1.0: Show operator version and changelog.


- [producer_consumer_for_each](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/producer_consumer_for_each.md)

  > 0.1.0: Addition of events to monitor the status of the operator.

  > 0.2.0: Moving event of progress bar at the beggining of the loop and changing input stream.


- [scopingify](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/scopingify.md)

  > 0.1.0: Add input pin 2 to specify an upper bound to create a scoping for a given range (taking single input in pin 0 as the lower bound).




### Deleted operators
