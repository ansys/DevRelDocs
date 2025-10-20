# Changelog

Changes since the last released version for DPF 26.1.pre1 (as of 2025-10-20).

This changelog is organized by category, with sections for different types of updates (new features, bug fixes, changes, performance improvements).

The following table shows which components have updates in each category.

| Component | Features | Fixes | 
|-----------|----------|----------|
| mapdl | [8 items](#Features_mapdl) |[13 items](#Fixes_mapdl) |
| misc | [11 items](#Features_misc) |[18 items](#Fixes_misc) |
| hdf5 | [4 items](#Features_hdf5) | |
| compression | [2 items](#Features_compression) | |
| native |  |[1 item](#Fixes_native) |
| eng_mat |  |[1 item](#Fixes_eng_mat) |
| kernel | [1 item](#Features_kernel) |[1 item](#Fixes_kernel) |
| math | [4 items](#Features_math) | |
| hgp | [2 items](#Features_hgp) | |
| mechanical | [1 item](#Features_mechanical) |[2 items](#Fixes_mechanical) |
| h5dpf |  |[1 item](#Fixes_h5dpf) |
| femutils |  |[2 items](#Fixes_femutils) |
| core |  |[1 item](#Fixes_core) |
| mesh |  |[1 item](#Fixes_mesh) |
| fbs | [2 items](#Features_fbs) | |
| framework | [2 items](#Features_framework) |[1 item](#Fixes_framework) |
| cyclic | [1 item](#Features_cyclic) | |
| grpc | [1 item](#Features_grpc) |[1 item](#Fixes_grpc) |
| h5dpf,cgns | [1 item](#Features_h5dpf,cgns) | |
| changelog | [2 items](#Features_changelog) | |
| ci | [1 item](#Features_ci) |[1 item](#Fixes_ci) |
| pydpf |  |[1 item](#Fixes_pydpf) |
| doc | [2 items](#Features_doc) | |
| perf | [2 items](#Features_perf) | |
| dpf |  |[1 item](#Fixes_dpf) |
| lsdyna | [1 item](#Features_lsdyna) | |
| refactor | [1 item](#Features_refactor) | |
| prime | [2 items](#Features_prime) | |
| workflows |  |[1 item](#Fixes_workflows) |
| cff | [2 items](#Features_cff) | |


## mapdl
### <a id="Features_mapdl"></a> Features

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

## native

### <a id="Fixes_native"></a> Fixes

- Scaling factors for absolute normalization in ErrorAndNorm have a wrong size:
  > Absolute normalization in ErrorAndNorm ("error_and_norm") operator was exporting scaling factors with a size of the original data instead of having only one unit value per field.
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
## math
### <a id="Features_math"></a> Features

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

## mechanical
### <a id="Features_mechanical"></a> Features

- Addition of events to monitor the status of producer_consumer_for_each operator:
  > Addition of events to monitor the status of producer_consumer_for_each operator.
  >
  > 

### <a id="Fixes_mechanical"></a> Fixes

- Fix issue with unordered source times in mechanical::time_freq:interpolation:
  > 
  >
  > 

- Fix error in mechanical::time_freq_interpolation:
  > 
  >
  > 
## h5dpf

### <a id="Fixes_h5dpf"></a> Fixes

- Fix thickness extraction from SMISC/NMISC from h5dpf file:
  > Fix thickness extraction from SMISC/NMISC from h5dpf file
  >
  > 
  >
  > 
## femutils

### <a id="Fixes_femutils"></a> Fixes

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
## mesh

### <a id="Fixes_mesh"></a> Fixes

- Remove invalid dead code:
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
## cyclic
### <a id="Features_cyclic"></a> Features

- Cyclic constant expansion for volume and NMISC:
  > Cyclic constant expansion for volume and NMISC
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
## h5dpf,cgns
### <a id="Features_h5dpf,cgns"></a> Features

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
## pydpf

### <a id="Fixes_pydpf"></a> Fixes

- Fix 22R2 setSupport on pyDPF:
  >  Fix 22R2 setSupport on pyDPF
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

## dpf

### <a id="Fixes_dpf"></a> Fixes

- Improve rotation handling on Invariant Source operators.:
  > 
  >
  > Improve rotation handling on Invariant operators.
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

## workflows

### <a id="Fixes_workflows"></a> Fixes

- Change normalization of the residual vector in enhanced pod workflow:
  > Normalization of the residual vector was made with respect to itself in the enhanced pod workflow (enhanced_pod_compression.swf), though it has to be done with respect to the inputs.
  >
  > 
  >
  > 
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

