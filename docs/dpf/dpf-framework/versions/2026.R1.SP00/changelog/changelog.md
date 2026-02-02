# Changelog

Changes since the last released version for DPF 26.1.pre1 (as of 2025-12-15).

This changelog is organized by category, with sections for different types of updates (new features, bug fixes, changes, performance improvements).

The following table shows which components have updates in each category.

| Component | Features | Fixes | 
|-----------|----------|----------|
| 1297620 |  |[1 item](#Fixes_1297620) |
| cff | [2 items](#Features_cff) |[2 items](#Fixes_cff) |
| cgns | [1 item](#Features_cgns) | |
| changelog | [2 items](#Features_changelog) |[1 item](#Fixes_changelog) |
| ci | [1 item](#Features_ci) |[1 item](#Fixes_ci) |
| compression | [2 items](#Features_compression) |[1 item](#Fixes_compression) |
| core |  |[1 item](#Fixes_core) |
| cyclic | [1 item](#Features_cyclic) | |
| doc | [2 items](#Features_doc) |[1 item](#Fixes_doc) |
| documentation | [1 item](#Features_documentation) |[1 item](#Fixes_documentation) |
| dpf | [3 items](#Features_dpf) |[1 item](#Fixes_dpf) |
| eng_mat |  |[1 item](#Fixes_eng_mat) |
| expansion | [1 item](#Features_expansion) | |
| fbs | [2 items](#Features_fbs) | |
| femutils |  |[11 items](#Fixes_femutils) |
| framework | [2 items](#Features_framework) |[5 items](#Fixes_framework) |
| grpc | [1 item](#Features_grpc) |[3 items](#Fixes_grpc) |
| grpcclient |  |[1 item](#Fixes_grpcclient) |
| h5dpf | [2 items](#Features_h5dpf) |[4 items](#Fixes_h5dpf) |
| hdf5 | [6 items](#Features_hdf5) |[3 items](#Fixes_hdf5) |
| hgp | [3 items](#Features_hgp) |[2 items](#Fixes_hgp) |
| hgptests |  |[1 item](#Fixes_hgptests) |
| kernel | [2 items](#Features_kernel) |[3 items](#Fixes_kernel) |
| lsdyna | [1 item](#Features_lsdyna) | |
| mapdl | [14 items](#Features_mapdl) |[38 items](#Fixes_mapdl) |
| mapdlpluggin |  |[1 item](#Fixes_mapdlpluggin) |
| math | [7 items](#Features_math) |[1 item](#Fixes_math) |
| mechanical | [2 items](#Features_mechanical) |[3 items](#Fixes_mechanical) |
| mesh |  |[2 items](#Fixes_mesh) |
| misc | [11 items](#Features_misc) |[19 items](#Fixes_misc) |
| multiphysicsmapper |  |[2 items](#Fixes_multiphysicsmapper) |
| name |  |[1 item](#Fixes_name) |
| native |  |[11 items](#Fixes_native) |
| perf | [2 items](#Features_perf) |[1 item](#Fixes_perf) |
| prime | [3 items](#Features_prime) | |
| pydpf |  |[1 item](#Fixes_pydpf) |
| refactor | [1 item](#Features_refactor) | |
| rotation |  |[1 item](#Fixes_rotation) |
| workflows |  |[1 item](#Fixes_workflows) |


## 1297620

### <a id="Fixes_1297620"></a> Fixes

- Cplx division operator has to high tolerance:
  > Change the tolerance for cplx division from 1e-10 to 1e-15.
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

### <a id="Fixes_cff"></a> Fixes

- Fix out of bounds issue in units handling:
  > 
  >
  > 

- Set proper names for User-Defined Memory variables:
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

### <a id="Fixes_changelog"></a> Fixes

- Use scripting name in operator changelog:
  > 
  >
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

### <a id="Fixes_compression"></a> Fixes

- Quantization loss of performance:
  > The quantization ("quantization") operator has became super slow since its last modification.
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

### <a id="Fixes_doc"></a> Fixes

- Update documentation of raw_operators to remove bool_rotate_to_global pin.:
  > Update documentation of raw_operators to remove bool_rotate_to_global pin.
  >
  > 
  >
  > 
## documentation
### <a id="Features_documentation"></a> Features

- Add Markdown and LaTeX example operator:
  > This PR adds an example operator ``markdown_latex_example`` to ``Ans.Dpf.Documentation`` where usage of supported Markdown and LaTeX is showcased.
  >
  > It also allows to test whether the operator is properly exposed in all clients and pipelines.
  >
  > We take the opportunity to fix support for multiline descriptions in output pins during generation of operator classes in C#.
  >
  > 
  >
  > 

### <a id="Fixes_documentation"></a> Fixes

- Sanitize pin names in script examples for html_doc documentation:
  > Fix operator usage examples in the documentation generated by operator ``html_doc`` by sanitizing pin names with annotations (such as "modified inplace").
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

- Keep the input unit when computing torque and force summation:
  > 
  >
  > The torque and force summation operator now output moments matching the mesh and force units
  >
  > 
  >
  > 

- Seg fault in mapping solid to skin for heterogenous location:
  > In case of mixed location (Elemental + Nodal for example), seg fault appears using mapping solid to skin op.
  >
  > 
  >
  > 

- Wrong initialization of tolerance in mapping operator:
  > The tolerance initialization in mapping operator has been moved outside loops over input fields. This seems to cause a random bug as this tolerance is updated for each iteration of the loop. The randomness of the bug is certainly due to a if condition that use the tolerance.
  >
  > 
  >
  > 

- Memory allocation bug:
  > This PR fixes a memory allocation bug in poynting_vector_surface operator.
  >
  > 
  >
  > 

- Incorrect number of data on the last id after nodal_to_elemental_nodal_fc:
  > Fixing error of incorrect number of data on the last id after `nodal_to_elemental_nodal_fc`.
  >
  > 

- Issue with shell layers calculation in the results field while having mid-side nodes on some elements:
  > Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements. As a consequence of this, some 0 additional values were shown in the output.
  >
  > 

- Add support for contact element filtering in force summation operators:
  > 
  >
  > Force summation operators now filter contact elements by default, and account for the summation point unit
  >
  > 
  >
  > 

- Missing results with mapping operator:
  > Correcting behavior of the mapping operator as some nodes were not retrieved.
  >
  > 

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

- Expose PinSpecification.ellipsis to replace PinSpecification.ellispis:
  > 
  >
  > 

- Fix header copy in Field copy:
  > 
  >
  > The Field Header was not deep-copied in a deep-copy operation of the Field, which caused issues when it was modifed downstream. This is now fixed.
  >
  > 
  >
  > 

- Remove nodal_moment operator:
  > The ``nodal_moment`` operator currently has no plugin implementing it int he standard installation, resulting in user confusion as to what file type is supported. The choice is made to remove it from recorded result operators until an official plugin supports it.
  >
  > 

- Fix error message when using a wrong name for workflow input or output:
  > Improve the error message when a unavailable name is used when connecting a workflow input or requesting a workflow output.
  >
  > The error message now mentions both the available workflow inputs and available workflow outputs.
  >
  > 
  >
  > 

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

- Fix non-matching versions of Kernel in DataProcessingCore and Ans.Dpf.GrpcClient:
  > 
  >
  > 

- Remotely copied grpc entities now references original server ip:
  > 
  >
  > Previously in specific contexts, connecting remote data to remote operator could lead to an infinite loop and consumption of memory on grpc server.
  >
  > 
  >
  > 

- Creation of Any from DataSources in gRPC:
  > Fix creation of Any from DataSources in gRPC
  >
  > 
  >
  > 
## grpcclient

### <a id="Fixes_grpcclient"></a> Fixes

- Fix undefined symbol on Linux:
  > 
  >
  > 
## h5dpf
### <a id="Features_h5dpf"></a> Features

- Move rotations to SourceOperators to enable them from h5dpf datasources:
  > Allow rotation to global from H5DPF result file.
  >
  > 
  >
  > 

- Expose is_mesh_available operator:
  > 
  >
  > Expose `is_mesh_available` for cgns and h5dpf files.
  >
  > 
  >
  > 

### <a id="Fixes_h5dpf"></a> Fixes

- Migrate to export NAR results:
  > Migrate to export NAR results by default
  >
  > 
  >
  > 

- Only write support for collections if support is available:
  >  Only write support for collections if support is available
  >
  > 
  >
  > 

- Correction of meshes_provider from h5dpf:
  > Correction of meshes_provider from h5dpf to not split mesh.
  >
  > 
  >
  > 

- Fix thickness extraction from SMISC/NMISC from h5dpf file:
  > Fix thickness extraction from SMISC/NMISC from h5dpf file
  >
  > 
  >
  > 
## hdf5
### <a id="Features_hdf5"></a> Features

- Very quick implementation of h5dpf list operator:
  > 
  >
  > 

- Link Tfields And Change Labels Layout:
  > 

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

### <a id="Fixes_hdf5"></a> Fixes

- Serialize_to_hdf5 deprecation message mentions new operator by scripting name:
  > The operator serialize_to_hdf5 is marked as deprecated in its description but redirects to the internal name of the new operator to use. This changes the message to use the scripting name (hdf5dpf_generate_result_file).
  >
  > 
  >
  > 

- Performance fix when reading Results By Scoping:
  > 
  >
  > 

- Correction of mesh detection in HDF5 mesh_property_provider:
  > 
  >
  > In HDF5 version 6, the mesh section is located under the _Results_ section, which differs from its placement in previous versions. To ensure backward compatibility, additional code has been implemented.
  >
  > 
  >
  > 
## hgp
### <a id="Features_hgp"></a> Features

- Custom type field int64:
  > 
  >
  > Allow to create CustomTypeField of int64_t in dpf c++ API.
  >
  > 
  >
  > 

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

### <a id="Fixes_hgp"></a> Fixes

- Empty vector copy:
  > 
  >
  > 

- Improve error message for unsupported unit creation:
  > Creating a unit in HGP using an unknown symbol generated a non-informative error.
  >
  > It now raises an ``std::invalid_argument`` error which message indicates a homogeneity must be given along with the custom unit symbol.
  >
  > 
  >
  > 
## hgptests

### <a id="Fixes_hgptests"></a> Fixes

- Ensure no hacks in cyclic tests:
  > 
  >
  > 
## kernel
### <a id="Features_kernel"></a> Features

- Add Unit string to express British ton:
  > 
  >
  > The string `"ton"` in DPF units denotes the Metric Ton (1000 kg). The string `"tonuk"` now denotes the British ton (also known as Long ton, approximately 1016.05 kg or 2240 pounds of mass).
  >
  > 
  >
  > 

- Establish thread safety and STL compliance for scopingIterators:
  > - Test for thread safety when using scoping Iterators for read access within parallel regions (over fields, over scoping etc).
  >
  > - Promote STL algorithm compliance in scoping iterators so that scoping objects can be directly manipulated with them.
  >
  > 

### <a id="Fixes_kernel"></a> Fixes

- Fix parallelization in several operators:
  > 
  >
  > Multithreading parallelization was not properly enforced in several operators (like merge_fields or generalized_inner_product).
  >
  > 
  >
  > 

- Fixed issue with Qua4FindElementCoordinates for mapping and find_reduced_coordinates:
  > Fix bug with interpolation points at corner node in the mapping operator.
  >
  > 
  >
  > 

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

- Operator to extract records from RST:
  > 
  >
  > 

- Source Operators for Acoustic Ops:
  > Adding Source Operators for Acoustic Operators in complement of previous PR 630503
  >
  > 
  >
  > 

- Adding new operator and result for Nodal Orientations:
  > Adding new operator and result for Nodal Orientations
  >
  > 
  >
  > 

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

- Heat Transfer Results for Link33:
  > Add Heat Flux Result support for LINK33 Elements
  >
  > 
  >
  > 

- ApdlElementDescriptor issues:
  > 
  >
  > 

- Fix reading from RDSP and RFRQ files when outres is used with MXPAND,OFF:
  > Fix reading from RDSP and RFRQ files when outres is used with MXPAND,OFF
  >
  > 
  >
  > 

- SVAR Beam results filtering:
  > Fix the reading of state variable result on BEAM elements
  >
  > 
  >
  > 

- Improve performance of Cyclic ENF reading for Topo:
  > 
  >
  > 

- Fix missing available results in result info provider:
  > Fix available results in result info from result_info_provider operator when the available results are coming from the mode file. Only displacements results were listed before.
  >
  > 
  >
  > 

- Avoid unnecessary nodal filtering:
  > Avoid going through the nodal filtering operation when it's not needed.
  >
  > 
  >
  > 

- Add the effnu header on ETH fields too:
  > 
  >
  > Fix the missing "effnu" header when reading ETH fields
  >
  > 
  >
  > 

- Fix nodal result PRES filtering:
  > Fix a bug where Pressure was filtered out on midside nodes for acoustic elements with linear pressure behavior (FLUID220, FLUID221 & FLUID244 with KEYOPT(2) =5/6)
  >
  > 
  >
  > 

- MAPDLOperators cache to be refreshed if the file changes.:
  > MAPDLOperators cache to be refreshed if the file changes.
  >
  > 
  >
  > 

- Update rotation matrix documentation for coordinate system provider:
  > Update rotation matrix documentation for coordinate system provider
  >
  > 
  >
  > 

- Fix issues with handling of input/output dofs number in modal_solve with harmonic load:
  > 
  >
  > 

- Fix Scoping in mapdl_connectivity:
  > 
  >
  > Fix the location of the Scoping of the "degenerated_connectivity" PropertyField in MAPDL meshes.
  >
  > 
  >
  > 

- Nodal Averaged Result operators return wrong values when setting a mesh scoping for midside nodes:
  > Nodal Averaged Result operators return wrong values when setting a mesh scoping for midside nodes
  >
  > 
  >
  > 

- Avoid expanding mesh for higher harmonics of the same physical stage:
  > 
  >
  > 

- Read contact results from mode + rst datasource:
  > Read contact results from mode + rst datasource
  >
  > 
  >
  > 

- Fix reading complex results from complex mode file.:
  > Fix reading complex results from complex mode file.
  >
  > 
  >
  > 

- Recover output pin for force summation psd:
  > 
  >
  > 

- Include enforced motion into modal basis:
  > Include enforced motion into modal basis
  >
  > 
  >
  > 

- Correction on plies/position logic for BFE filter.:
  > Correction on plies/position logic for BFE filter.
  >
  > 
  >
  > 

- Fix duplicate sector results sign when reading cyclic mode pairs and CYCOPT,MSUP,1:
  > Fix cyclic duplicate sectors results sign when reading non raw mechanical results (e.g. elements temperature or elements volume) of a cyclic mode pair from a result file written with CYCOPT,MSUP,1.
  >
  > 
  >
  > 

- Add mutex to avoid concurrent threads:
  > 
  >
  > 

- Fix model title being truncated:
  > Fix model title being truncated
  >
  > 
  >
  > 

- Fix crash caused by invalid iterator when reading shell data:
  > 
  >
  > Fix an access violation when reading shell elements in pres_to_field op.
  >
  > 

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

### <a id="Fixes_math"></a> Fixes

- FFT Multiharmonic performance enhancements:
  > FFT Multiharmonic performance enhancements
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

- Fix a crash in meshed_skin_sector with non elemental properties:
  > 
  >
  > meshed_skin_sector: Fix a crash when the mesh includes non-elemental properties
  >
  > 
  >
  > 

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
## multiphysicsmapper

### <a id="Fixes_multiphysicsmapper"></a> Fixes

- Ensure Linux thread safety of add_field:
  > 
  >
  > 

- Fix parallelization in Linux:
  > 
  >
  > The `mechanical_native_mapping::apply` operator now runs properly in parallel in Linux.
  >
  > 
  >
  > 
## name

### <a id="Fixes_name"></a> Fixes

- Fix name of PL2:
  > Fix name of PL2
  >
  > 
  >
  > 
## native

### <a id="Fixes_native"></a> Fixes

- Support fields with different scopings in concatenate_fields:
  > Added the possibility to merge fields with different scopings in operators *concatenate_fields* and *concatenate_fields_containers*, with the possibility to choose the scoping to keep for output.
  >
  > These operators are now public.
  >
  > 
  >
  > 

- Fix timefreqsupport::get_attribute for of STFT wf:
  > 
  >
  > 

- Fix solid_shell_fields operator:
  > 
  >
  > The operator solid_shell_fields is now able to handle fields containers with empty fields.
  >
  > 
  >
  > 

- Improve transpose scoping operator performance 2:
  > Refactoring of the transpose scoping operator for performance improvements
  >
  > 
  >
  > 

- Improve transpose scoping operator performance':
  > 

- Fix stream_provider error handling:
  > Fix stream_provider returning an empty stream when the datasources is in input is empty. Throw instead.
  >
  > Fix the stream_provider returning a nullptr if a stream_provider is not found for this namespace. Throw instead.
  >
  > Also update the descriptions of the operator.
  >
  > 
  >
  > 

- Improve transpose scoping operator performance:
  > Refactoring of the transpose scoping operator for performance improvements
  >
  > 
  >
  > 

- Access violation in scale operator:
  > Program was crashing when not using the mkl to do the computation in CScale operator ("scale").
  >
  > 
  >
  > 

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

- Add TimeFreqSupport as input in morph_field_from_files operator:
  > 
  >
  > 

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

## rotation

### <a id="Fixes_rotation"></a> Fixes

- Fix of nested cms rotation with empty angles for harmonic msup:
  > Fix of nested cms rotation with empty angles for harmonic msup
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


#### info

- [markdown_latex_example](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/info/markdown_latex_example.md):
  > This operator showcases the use of Markdown and LaTeX in operator and pin descriptions:
  > # Headings
  > ## h2
  > ### h3
  > #### h4
  > ##### h5
  > 
  > # Text
  > This should result in a paragraph
  > it's that simple.
  > 
  > 
  > *italic*, **bold**
  > 
  > # Lists
  > * an *unordered list*
  >   * with **some hierarchy**
  >     1. and an ordered
  >     2. mixed
  >     * list
  >     * directly
  >   * inside
  > 
  > # Code
  > ## Code block
  > ```c
  > std::string a = 'test';
  > ```
  > ```js
  > var a = 'test';
  > ```
  > ```python
  > a: str = 'test'
  > ```
  > ## Inline code
  > And well `inline code` should also work.
  > 
  > # Quotes
  > 
  > > A Quote
  > >
  > > With *some text* **blocks inside**
  > >
  > > * even a list
  > > * should be
  > > * possible
  > 
  > ## Links
  > Links such as [link](https://docs.pyansys.com/).
  > 
  > ## Images
  > ![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)
  > 
  > 
  > ## Separations
  > 
  > ---
  > 
  > ## Checklists
  > 
  > - [ ] how
  > - [ ] about
  >   - [ ] a
  >   - [x] nice
  > - [x] check
  > - [ ] list
  > 
  > ## Tables
  > 
  > | Left header | middle header | last header |
  > |-------------|---------------|-------------|
  > | cell 1      | cell **2**    | cell 3      |
  > | cell 4      | cell 5        | cell 6      |
  > 
  > 
  > ## LaTeX
  > 
  > An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.
  > 
  > An inline equation \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\) using LaTeX parenthesis delimiters.
  > 
  > An equation on its own using dollar delimiters:
  > $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$
  > 
  > An equation on its own using square bracket delimiters:
  > \[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\]
  > 


#### mapping

- [apply_mechanical_native_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/apply_mechanical_native_mapping.md):
  > Maps source data from source mesh to target mesh (computes interpolation).This operator needs to be used with the prepare mechanical native mapping associated one.

- [create_mech_kriging_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_mech_kriging_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_point_cloud_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_mech_point_cloud_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_surf_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_mech_shape_func_surf_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_vol_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_mech_shape_func_vol_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_sc_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/create_sc_mapping_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [prepare_mechanical_native_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/prepare_mechanical_native_mapping.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator needs to be used with the apply mechanical native mapping associated one. At least one of the optional DataTree inputs need to be set, in order to chose the mapping algorithm and set the mapping options.

- [prepare_mechanical_native_mapping_kriging](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_kriging.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use a point kriging algorithm. This operator needs to be used with the apply mechanical native mapping associated one.

- [prepare_mechanical_native_mapping_point_cloud](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_point_cloud.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use a point cloud based algorithm. This operator needs to be used with the apply mechanical native mapping associated one.

- [prepare_mechanical_native_mapping_shape_functions_for_surfaces](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_surfaces.md):
  > Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use the shape functions of the elements. This operator is meant for surfaces elements. This operator needs to be used with the apply mechanical native mapping associated one.

- [prepare_mechanical_native_mapping_shape_functions_for_volume](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_volume.md):
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

- [acoustic_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/acoustic_energy_density.md):
  > Read/compute AED by calling the readers defined by the datasources.

- [creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain.md):
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

- [creep_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_X.md):
  > Read/compute element nodal component creep strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_XY.md):
  > Read/compute element nodal component creep strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_XZ.md):
  > Read/compute element nodal component creep strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_Y.md):
  > Read/compute element nodal component creep strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_YZ.md):
  > Read/compute element nodal component creep strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_Z.md):
  > Read/compute element nodal component creep strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_eqv.md):
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

- [creep_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_intensity.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_max_shear.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_principal_1.md):
  > Read/compute element nodal component creep strains 1st principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_principal_2.md):
  > Read/compute element nodal component creep strains 2nd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_principal_3.md):
  > Read/compute element nodal component creep strains 3rd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [fluid_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/fluid_velocity.md):
  > Read/compute FV by calling the readers defined by the datasources.

- [gasket_total_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_total_closure.md):
  > computes the gasket total closure (sum of gasket thermal closure and gasket inelastic closure).

- [gasket_total_closure_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_total_closure_X.md):
  > Read/compute elemental gasket total closure XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [gasket_total_closure_XY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_total_closure_XY.md):
  > Read/compute elemental gasket total closure XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [gasket_total_closure_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_total_closure_XZ.md):
  > Read/compute elemental gasket total closure XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [input_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/input_sound_power.md):
  > Read/compute PINC by calling the readers defined by the datasources.

- [layer_orientation_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/layer_orientation_provider.md):
  > Read the layer orientations.

- [modal_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/modal_acceleration.md):
  > Read/compute modal acceleration by calling the readers defined by the datasources.

- [modal_coordinate](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/modal_coordinate.md):
  > Read/compute modal coordinate by calling the readers defined by the datasources.

- [modal_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/modal_velocity.md):
  > Read/compute modal velocity by calling the readers defined by the datasources.

- [nodal_rotation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotation.md):
  > Read/compute nodal rotation by calling the readers defined by the datasources.

- [nodal_rotation_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotation_X.md):
  > Read/compute nodal rotation X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotation_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotation_Y.md):
  > Read/compute nodal rotation Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotation_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotation_Z.md):
  > Read/compute nodal rotation Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_acceleration.md):
  > Read/compute nodal rotational acceleration by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_acceleration_X.md):
  > Read/compute nodal rotational acceleration X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_acceleration_Y.md):
  > Read/compute nodal rotational acceleration Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_acceleration_Z.md):
  > Read/compute nodal rotational acceleration Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_velocity.md):
  > Read/compute nodal rotational velocity by calling the readers defined by the datasources.

- [nodal_rotational_velocity_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_velocity_X.md):
  > Read/compute nodal rotational velocity X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_velocity_Y.md):
  > Read/compute nodal rotational velocity Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/nodal_rotational_velocity_Z.md):
  > Read/compute nodal rotational velocity Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [node_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/node_orientations.md):
  > Read/compute node euler angles by calling the readers defined by the datasources.

- [node_orientations_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/node_orientations_X.md):
  > Read/compute node euler angles X component of the vector (1st component) by calling the readers defined by the datasources.

- [node_orientations_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/node_orientations_Y.md):
  > Read/compute node euler angles Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [node_orientations_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/node_orientations_Z.md):
  > Read/compute node euler angles Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [output_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/output_sound_power.md):
  > Read/compute POUT by calling the readers defined by the datasources.

- [squared_l2norm_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/squared_l2norm_pressure.md):
  > Read/compute Square of the L2 norm of pressure over element volume by calling the readers defined by the datasources.


#### serialization

- [export_mesh_with_prime](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/serialization/export_mesh_with_prime.md):
  > Transfer DPF's meshed region into an external layer prime model and serialize it into a given file format.


#### utility

- [concatenate_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/concatenate_fields.md):
  > Concatenates fields into a unique one by incrementing the number of components.
  > 
  > Example:
  > - Field1 components: { UX, UY, UZ }
  > - Field2 components: { RX, RY, RZ }
  > - Output field : { UX, UY, UZ, RX, RY, RZ }

- [concatenate_fields_containers](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/concatenate_fields_containers.md):
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

- [customtypefield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/customtypefield_get_attribute.md):
  > Gets a property from an input field/field container. A CustomTypeFieldin pin 0, a property name (string) in pin 1 are expected as inputs

- [cyclic_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/cyclic_support_get_attribute.md):
  > A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

- [get_operators](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/get_operators.md):
  > Getter on operators inside a workflow.

- [operator_changelog](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/operator_changelog.md):
  > Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

- [propertyfield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/propertyfield_get_attribute.md):
  > Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs



### Changed operators

#### averaging

- [force_summation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/force_summation.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.2.0: Add support for excluding or not contact elements.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N.m.


- [force_summation_psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/force_summation_psd.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.1.1: Contact elements are now excluded from the summation.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N*m.


- [nodal_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/nodal_to_elemental_nodal.md)

  > 0.0.1: Fixed issue with resize output field.


- [nodal_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/averaging/nodal_to_elemental_nodal_fc.md)

  > 0.0.1: Fixed issue with resize output fields.



#### filter

- [abc_weightings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/filter/abc_weightings.md)

  > 0.0.1: Fixed bug in frequency calculation with multiple rpms in the support.



#### geo

- [normals_provider_nl](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/geo/normals_provider_nl.md)

  > 0.0.1: Bug fixed for input mesh type containing solid elements.

  > 1.0.0: Fixed reference coordinate-system on which normals are calculated.


- [rotate_in_cylindrical_cs](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/geo/rotate_in_cylindrical_cs.md)

  > 1.0.0: Fix bug for the rotation of strain fields with a cylindrical system whose axis is rotated.



#### logic

- [elementary_data_selector](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/logic/elementary_data_selector.md)

  > 0.1.0: fix of crash when input field data pointer is empty, the operator will output an empty field in this case moving forward.


- [solid_shell_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/logic/solid_shell_fields.md)

  > 0.0.1: Input Fields Containers can contain empty fields.



#### mapping

- [find_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/find_reduced_coordinates.md)

  > 0.1.0: Fix bug with interpolation points at corner nodes.


- [on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/on_coordinates.md)

  > 0.1.0: Performance improvement.

  > 0.2.0: Fix bug with interpolation points at corner nodes.

  > 0.3.0: Fix bug with missing results and use_quadratic_elements pin.


- [solid_to_skin](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/solid_to_skin.md)

  > 0.1.0: Improving performance for Nodal locations.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.

  > 0.2.1: Removing unnedeed output hidden pin.

  > 0.2.2: Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements.


- [solid_to_skin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mapping/solid_to_skin_fc.md)

  > 0.1.0: Improving performance for Nodal locations. Added parallelization.

  > 0.1.1: Bug fixed for empty fields container.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.

  > 0.2.1: Fixed issue with different scopings in the input field.

  > 0.2.2: Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements.

  > 0.2.3: Fixed issue with fields container with mixed location.



#### math

- [accumulate_level_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_level_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_min_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_min_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/accumulate_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [average_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/average_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [compute_residual_and_error](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/compute_residual_and_error.md)

  > 0.1.0: Support generic labels (not only time) in the input FieldsContainer

  > 0.1.1: Fixed the size of output scaling factors for the absolute normalization


- [expansion_psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/expansion_psd.md)

  > 0.0.1: Fix handling of empty fields in mode shapes.


- [scale](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/scale.md)

  > 0.0.1: Fixed a segmentation fault.


- [scale_by_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/scale_by_field.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_by_field_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/scale_by_field_fc.md)

  > 0.0.1: Add support of fields with shell layers


- [sweeping_phase](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/sweeping_phase.md)

  > 0.0.1: Clarify the documentation.


- [sweeping_phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/math/sweeping_phase_fc.md)

  > 0.0.1: Clarify the documentation.



#### mesh

- [from_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/from_scoping.md)

  > 0.1.0: Improvement in the performance.

  > 0.1.1: Fixed bug when the scoping of a property field and its mesh are different.

  > 0.1.2: Fixed bug when some of the ids of the desired new scoping is not present in the property field or in the mesh.

  > 0.1.3: Fixed undefined behavior with custom property fields.


- [from_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/from_scopings.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity.


- [mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/mesh_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.


- [meshes_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/meshes_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.


- [skin](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/skin.md)

  > 0.0.1: Fixing issue related to share pointers of property fields and mesh.

  > 0.0.2: Internal change to share pointers of property fields and mesh.


- [split_mesh](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/mesh/split_mesh.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity



#### metadata

- [element_types_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/metadata/element_types_provider.md)

  > 0.1.0: Added the possibility to output a PropertyField.


- [streams_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/metadata/streams_provider.md)

  > 0.1.0: Add the permissive configuration.


- [time_freq_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/metadata/time_freq_support_get_attribute.md)

  > 0.1.0: Add new supported property name 'step_id_from_harmonic_index' returning an int.



#### result

- [accu_eqv_creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/accu_eqv_creep_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [accu_eqv_plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/accu_eqv_plastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [beam_axial_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_axial_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_axial_stress.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_axial_total_strain.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_s_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_s_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_t_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_t_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_torsional_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/beam_torsional_moment.md)

  > 0.1.0: MAPDL results supported.


- [contact_fluid_penetration_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_fluid_penetration_pressure.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_friction_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_friction_stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_gap_distance](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_gap_distance.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_penetration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_penetration.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_pressure.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_sliding_distance](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_sliding_distance.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_status](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_status.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_surface_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_surface_heat_flux.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [contact_total_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/contact_total_stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [coordinate_system](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/coordinate_system.md)

  > 0.0.1: Output pin 0 documentation update.


- [creep_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/creep_strain_energy_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [displacement](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/displacement.md)

  > 1.0.0: Modal coordinates from RFRQ, RDSP and DSUB files can't be extracted through displacement operator anymore, user can use modal_coordinate operator instead.


- [elastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_energy_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_eqv.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/elastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [electric_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/electric_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/electric_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [element_nodal_forces](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/element_nodal_forces.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [element_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/element_orientations.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [eqv_stress_parameter](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/eqv_stress_parameter.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [gasket_inelastic_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_inelastic_closure.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [gasket_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [gasket_thermal_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/gasket_thermal_closure.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/heat_flux.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [hydrostatic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/hydrostatic_pressure.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/magnetic_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/magnetic_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [mapdl.pres_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/mapdl.pres_to_field.md)

  > 0.0.1: Fix crash caused by invalid iterator when reading shell data.


- [num_surface_status_changes](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/num_surface_status_changes.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_state_variable.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_energy_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_eqv.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/plastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [poynting_vector_surface](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/poynting_vector_surface.md)

  > 0.0.1: Fix bug in memory allocation for some local variables participating in interpolation at integration points.


- [raw_displacement](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/raw_displacement.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_reaction_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/raw_reaction_force.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [recombine_harmonic_indeces_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

  > 0.1.0: Addition of is_constant pin


- [remove_rigid_body_motion](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/remove_rigid_body_motion.md)

  > 0.0.1: Replace vector of pointers with array of objects to prevent memory leaks


- [remove_rigid_body_motion_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/remove_rigid_body_motion_fc.md)

  > 0.0.1: Replace vector of pointers with array of objects to prevent memory leaks


- [state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/state_variable.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_ratio.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress_von_mises](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/stress_von_mises.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [structural_temperature](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/structural_temperature.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [swelling_strains](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/swelling_strains.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [temperature_grad](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/temperature_grad.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/thermal_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/thermal_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/thermal_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/thermal_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strains_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/thermal_strains_eqv.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [torque](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/result/torque.md)

  > 0.1.0: Fields container supported on pin 1. Pin 1 name changed.

  > 1.0.0: The torque unit is now kept from the input units and not converted to N*m.



#### scoping

- [rescope](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/rescope.md)

  > 0.1.0: Performance improvement.


- [rescope_custom_type_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/rescope_custom_type_field.md)

  > 0.1.0: Performance improvement.


- [rescope_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/rescope_fc.md)

  > 0.1.0: Performance improvement.


- [rescope_property_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/rescope_property_field.md)

  > 0.1.0: Performance improvement.


- [transpose](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/scoping/transpose.md)

  > 0.1.0: Improvement of performance



#### utility

- [html_doc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/html_doc.md)

  > 0.1.0: Show operator version and changelog.


- [ints_to_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/ints_to_scoping.md)

  > 0.1.0: Add input pin 2 to specify an upper bound to create a scoping for a given range (taking single input in pin 0 as the lower bound).


- [producer_consumer_for_each](https://ansys-a.devportal.io/docs/dpf-framework-2026-r1/operator-specifications/utility/producer_consumer_for_each.md)

  > 0.1.0: Addition of events to monitor the status of the operator.

  > 0.2.0: Moving event of progress bar at the beggining of the loop and changing input stream.




### Deleted operators

#### gasket_deformation

#### gasket_deformation_X

#### gasket_deformation_XY

#### gasket_deformation_XZ

#### nodal_moment
