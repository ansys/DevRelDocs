# Changelog

Changes since the last released version for DPF 27.1.pre0 (as of 2026-04-17).

This changelog is organized by category, with sections for different types of updates (new features, bug fixes, changes, performance improvements).

The following table shows which components have updates in each category.

| Component | Features | Fixes | 
|-----------|----------|----------|
| 1297620 |  |[1 item](#Fixes_1297620) |
| averaging |  |[1 item](#Fixes_averaging) |
| build |  |[1 item](#Fixes_build) |
| c# |  |[1 item](#Fixes_c#) |
| cff | [2 items](#Features_cff) |[4 items](#Fixes_cff) |
| cgns | [1 item](#Features_cgns) | |
| changelog | [2 items](#Features_changelog) |[1 item](#Fixes_changelog) |
| ci | [1 item](#Features_ci) |[3 items](#Fixes_ci) |
| compression | [3 items](#Features_compression) |[2 items](#Fixes_compression) |
| core |  |[1 item](#Fixes_core) |
| cs | [4 items](#Features_cs) |[1 item](#Fixes_cs) |
| cyclic | [1 item](#Features_cyclic) | |
| doc | [2 items](#Features_doc) |[1 item](#Fixes_doc) |
| documentation | [1 item](#Features_documentation) |[2 items](#Fixes_documentation) |
| dpf | [3 items](#Features_dpf) |[1 item](#Fixes_dpf) |
| eng_mat |  |[1 item](#Fixes_eng_mat) |
| expansion | [1 item](#Features_expansion) | |
| fbs | [2 items](#Features_fbs) | |
| femutils | [3 items](#Features_femutils) |[14 items](#Fixes_femutils) |
| flatbuffers |  |[1 item](#Fixes_flatbuffers) |
| framework | [2 items](#Features_framework) |[7 items](#Fixes_framework) |
| gate |  |[1 item](#Fixes_gate) |
| grpc | [1 item](#Features_grpc) |[3 items](#Fixes_grpc) |
| grpcclient |  |[1 item](#Fixes_grpcclient) |
| h5dpf | [2 items](#Features_h5dpf) |[4 items](#Fixes_h5dpf) |
| hdf5 | [8 items](#Features_hdf5) |[5 items](#Fixes_hdf5) |
| hgp | [5 items](#Features_hgp) |[4 items](#Fixes_hgp) |
| hgptests |  |[1 item](#Fixes_hgptests) |
| kernel | [3 items](#Features_kernel) |[11 items](#Fixes_kernel) |
| lsdyna | [2 items](#Features_lsdyna) | |
| madl |  |[1 item](#Fixes_madl) |
| mapd | [1 item](#Features_mapd) | |
| mapdl | [21 items](#Features_mapdl) |[46 items](#Fixes_mapdl) |
| mapdlpluggin |  |[1 item](#Fixes_mapdlpluggin) |
| mapl |  |[1 item](#Fixes_mapl) |
| math | [12 items](#Features_math) |[1 item](#Fixes_math) |
| mechanical | [3 items](#Features_mechanical) |[5 items](#Fixes_mechanical) |
| mesh | [2 items](#Features_mesh) |[4 items](#Fixes_mesh) |
| misc | [15 items](#Features_misc) |[21 items](#Fixes_misc) |
| multiphysics | [2 items](#Features_multiphysics) | |
| multiphysicsmapper |  |[5 items](#Fixes_multiphysicsmapper) |
| name |  |[1 item](#Fixes_name) |
| native | [7 items](#Features_native) |[22 items](#Fixes_native) |
| nuget |  |[1 item](#Fixes_nuget) |
| perf | [2 items](#Features_perf) |[1 item](#Fixes_perf) |
| prime | [4 items](#Features_prime) |[1 item](#Fixes_prime) |
| pydpf |  |[1 item](#Fixes_pydpf) |
| refactor | [1 item](#Features_refactor) | |
| rotation |  |[1 item](#Fixes_rotation) |
| utilities |  |[1 item](#Fixes_utilities) |
| vtk |  |[1 item](#Fixes_vtk) |
| workflows | [3 items](#Features_workflows) |[2 items](#Fixes_workflows) |


## 1297620

### <a id="Fixes_1297620"></a> Fixes

- Cplx division operator has to high tolerance:
  > Change the tolerance for cplx division from 1e-10 to 1e-15.
  >
  > 
  >
  > 
## averaging

### <a id="Fixes_averaging"></a> Fixes

- Adapt elemental_nodal_to_nodal to properly handle midside nodes:
  > 
  >
  > The `elemental_nodal_to_nodal` averaging operators required to have all corner nodes corresponding to a midside node contained in the input nodal scoping if the result wanted to be obtained at that given midside node. This requirement is no longer present.
  >
  > 
  >
  > 
## build

### <a id="Fixes_build"></a> Fixes

- Fixed build with Ninja, stricter compile flags:
  > 
  >
  > 
## c#

### <a id="Fixes_c#"></a> Fixes

- Expose the MultiPhysicsMapper plugin in C#:
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

- Adapt to unit changes:
  > 

- Adapt to Fluent 3D left-hand convention in face-nodes-connectivity:
  > 
  >
  > The face to nodes connectivity is written in Fluent result files following a left-hand convention, which is the opposite to the expected behavior. The reader is adapted to reflect this change.
  >
  > 
  >
  > 

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

- Fix Nuget tests:
  > 
  >
  > Bring the changes from WorkflowMediumComplexityTest in CS_DataProcessingTests to NuGet.Cs.Ext.Test.
  >
  > 
  >
  > 

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

- React to change in CFFSDK:
  > 
## compression
### <a id="Features_compression"></a> Features

- Quantization operator enhancements:
  > - Added parallelization in _quantization_fc_
  >
  > - The loss of precision was at maximum half of the threshold, therefore computations has been changed to be just at the threshold in the worst case.
  >
  > 
  >
  > 

- Support threshold by number of components in quantization operator:
  > It is now possible to apply a different threshold on each component in the operators **Quantization** ("quantization_fc") and **QuantizationFC** ("quantization_fc").
  >
  > 
  >
  > 

- Scale and Round Operator:
  > 

### <a id="Fixes_compression"></a> Fixes

- Wrong dimension for output of sketch matrix operator:
  > 
  >
  > 

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
## cs
### <a id="Features_cs"></a> Features

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

- Add the GenericDataContainer type to the C# API:
  > Add the GenericDataContainer type to the C# API.
  >
  > 
  >
  > 

- Expose the Any type to C#:
  > Expose type Any in the C# API.
  >
  > 
  >
  > 

### <a id="Fixes_cs"></a> Fixes

- Connect generic IronPython objects as operator inputs:
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
### <a id="Features_femutils"></a> Features

- Use ScopingIterators and eliminate GetIds calls in Ans.Dpf.FEMUtils:
  > 

- Switch from_scoping to entry:
  > Switch mesh::by_scopings op to public
  >
  > 

- Implementing build_scoping_build_index_tables in split_mesh and meshes::by_scopings and refactoring:
  > Improvement in the performance for `split_mesh`, `meshes::by_scopings` and `mesh::by_scoping` operators for cases with non-shared scoping between property fields and mesh.
  >
  > 

### <a id="Fixes_femutils"></a> Fixes

- Fixing memory overhead with ElementalNodal to Nodal results:
  > Improved memory management of the `elemental_nodal_To_nodal_fc` operator.
  >
  > 

- Issue with semiparabolic elements in elemental_nodal_To_nodal operators:
  > Fixing issue with semiparabolic elements in `elemental_nodal_To_nodal` operators.
  >
  > 

- Bug 1398238 Fail to extract structural temperature at multiple time steps:
  > Fix random failure in multistep transient simulation
  >
  > 
  >
  > 

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
## flatbuffers

### <a id="Fixes_flatbuffers"></a> Fixes

- Improve ref handling across gRPC servers:
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

- Fix Heat Generation unit:
  > Resolve incorrect Heat Generation unit, should be Power/Volume, not Power.
  >
  > 
  >
  > 

- Add ellipsis property to forward operator pins:
  > 

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
## gate

### <a id="Fixes_gate"></a> Fixes

- Prevent segfault when GC collects DPFVector during capi load_api:
  > Fix a potential Segmentation Fault in Python 3.11 when a second local gRPC server is started after having used DPF array data due to the garbage collector firing while initializing the server.
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

- Field MetaData as hashable objects:
  > Field definitions are now stored once when the same definition is used in multiple fields. Same goes for field headers.
  >
  > 

- Add Support for Live Monitoring:
  > Support live monitoring for h5 files with mapdl::run
  >
  > 

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

- Fix missing fields during append operation:
  > fix missing fields on HdfView under references group when using append operation
  >
  > 

- 4GB size limit of chunks and fix 1MB default size of chunks for compressed files:
  > 4GB size limit of chunks and fix 1MB default size of chunks for compressed files.
  >
  > 

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

- Improving readability of the .natvis file for hgp:
  > Improving readability of the .natvis file.
  >
  > 

- Add span() getter to DpfVector:
  > 
  >
  > - The HGP API now exposes direct std::span accessors when building the C++20 standard
  >
  > 
  >
  > 

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

- Add guard variable to prevent dpf_api_i.cpp double include:
  > 
  >
  > 

- Add natvis support for some CustomTypeField variants:
  > 
  >
  > 

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

- Implement Random Access in ScopingIterators:
  > 
  >
  > Implement STL-compliant Ramdom Access Iterators in ScopingIterators.
  >
  > 
  >
  > 

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

- Improve performance of GenPassOperators cache:
  > 

- Use absolute paths in the linux server launcher script:
  > 
  >
  > 
  >
  > 

- Speed-up hasEntity API:
  > 

- Follow-up on units:
  > 

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
  > 

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

- Complete unit strings for existing Unit Systems (#248):
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

- Add mesh scoping input for nodout operators (#257):
  > 

## madl

### <a id="Fixes_madl"></a> Fixes

- Return empty container when GCD property is not found:
  > 
  >
  > 
## mapd
### <a id="Features_mapd"></a> Features

- Add Tshape to Apdl Element Descriptors:
  > Elements TARGE170 have a Tshape characteristics that needs to be saved in order to properly get the shape of the element.
  >
  > This PR adds a `APDLTargetShapeDetails` struct under `APDLElementDetails` to manage the shapeid of elements.
  >
  > 
  >
  > 

## mapdl
### <a id="Features_mapdl"></a> Features

- Enable cyclic expansion for composite datasources.:
  > Enable cyclic expansion for composite datasources.
  >
  > Enable cyclic expansion for plastic, thermal, accumulated equivalent plastic strain and elemental orientations. Accumulated equivalent plastic strain and Element Orientations will only account for harmonic 0 for expansion.
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

- New Operators for FLUID116:
  > 
  >
  > Add new operators to read data from FLUID116 element:
  >
  > - AverageVelocityProvider
  >
  > - ReynoldsNumberProvider
  >
  > - FlowRateProvider
  >
  > - HeatConductivityRateProvider
  >
  > - HeatTransportRateProvider
  >
  > - FilmCoefficientProvider
  >
  > - NusseltNumberProvider
  >
  > - PrandtlNumberProvider
  >
  > 
  >
  > Add new operators to read data from SURF251/252 elements:
  >
  > - EmissivityProvider
  >
  > - NetRadiationHeatFluxProvider
  >
  > - EmittedRadiationHeatFluxProvider
  >
  > - ReflectedRadiationHeatFluxProvider
  >
  > - IncidentRadiationHeatFluxProvider
  >
  > - EnclosureNumberProvider
  >
  > - ViewFactorSumProvider
  >
  > 
  >
  > 

- Add operators to read modal coordinates from RST/MODE/H5DPF files.:
  > Creation of operators allowing to read CMS modal coordinates from result files .rst,  .mode & .h5.
  >
  > 
  >
  > 

- Add Elemental Nodal MOMENT and HEAT operators:
  > Creation of ENF_MOMENT and ENF_HEAT operators to read elemental nodal moment and heat from rst files.
  >
  > Deprecation of pin200 (split_force_components). Dofs components can be obtained with the specific operators and derivative orders can be obtained with component selector
  >
  > 
  >
  > 

- CMS nodal results to be filtered:
  > CMS nodal results to be filtered. For example, if user request rotation results, they will only be provided on nodes of elements having the rotations degree of freedom.
  >
  > 
  >
  > 

- Freeing license of mapdl_section_properties:
  > Freeing license of `mapdl_section_properties`.
  >
  > 

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

- Prevent from reading shell results without section.:
  > 
  >
  > 

- Use loading mesh descriptors:
  > 
  >
  > 

- Register corner_nodes_mapping_provider:
  > 
  >
  > 

- Fix filtering of EUL for high-order old generation elements:
  > Fix filtering of euler angles for high-order old generation elements
  >
  > 
  >
  > 

- PreProcess Mode Shapes record positions:
  > 
  >
  > 

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

- Fix default ncomp for nmisc/smisc:
  > Remove num_components pin from NMISC/SMISC
  >
  > 
  >
  > 

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
## mapl

### <a id="Fixes_mapl"></a> Fixes

- Fix gasket results issue with dege keyopt2=0 gaskets:
  > Fix bug with degenerated gasket elements with keyopt(2)=0
  >
  > 
  >
  > 
## math
### <a id="Features_math"></a> Features

- Create TPA objects to streamline TPA workflow:
  > 

- Create a new operator to merge FRF matrices and supports for TPA workflow:
  > 

- Create a new operator to compute modal loads for MSUP workflow:
  > 

- Add new MKL BLAS wrapper for scaling operation:
  > Add new MKL BLAS wrapper for scaling operation
  >
  > 
  >
  > 

- Geqp3 and imatcopy wrappers for modmac operator:
  > - Add Lapack geqp3 wrapper to compute QR factorization with column pivoting
  >
  > - Add MKL imatcopy wrapper to perform scaling and in-place transposition/copying of matrices
  >
  > 
  >
  > 

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

- Adding operator for finding number of modes per chunk:
  > Add new operators to calculate number of modes that can be evaluated per chunk based on the result mesh and the available memory on the user's machine.
  >
  > 
  >
  > 

- Adding feedback from the Mechanical Team:
  > Moving event of progress bar at the beginning of the loop and changing input stream.
  >
  > 

- Addition of events to monitor the status of producer_consumer_for_each operator:
  > Addition of events to monitor the status of producer_consumer_for_each operator.
  >
  > 

### <a id="Fixes_mechanical"></a> Fixes

- Fix documentation generation of mechanical::linearized_stress:
  > 

- Bugs with shell operators:
  > Fix various bugs in shell operators in Ans.Dpf.Mechanical plugin
  >
  > 
  >
  > 

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
### <a id="Features_mesh"></a> Features

- Addition of an operator for Edge Decimation:
  > Addition of a new operator "edge_decimation" that takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold.
  >
  > 
  >
  > 

- Complete usage of ScopingIterators and eliminate GetIds calls in meshOperators:
  > 
  >
  > 

### <a id="Fixes_mesh"></a> Fixes

- Fix new introduced issue on rescope etype.:
  > 
  >
  > 

- Reduce memory footprint of skin extraction op:
  > - This PR reduces the memory footprint of the ExtractSectorMeshedSkin operator.
  >
  > 

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

- Add operator Changelog support to C#:
  > Support operator changelogs in the C# client API. Add the Changelog class.
  >
  > 
  >
  > 

- Enhancement of rotation operators and private operators for load vector and spatial gradients computations:
  > Rotation vectors now accepts arbitrary Euler angles as an input.
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

- Set result name for fields container (#258):
  > 

### <a id="Fixes_misc"></a> Fixes

- Restored a number of error messages:
  > 
  >
  > Restored some error messages.
  >
  > 
  >
  > 

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

- Critical fixes in LSDYNAStream (#259):
  > 
## multiphysics
### <a id="Features_multiphysics"></a> Features

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

## multiphysicsmapper

### <a id="Fixes_multiphysicsmapper"></a> Fixes

- Fix the effect of input pin pinball_key in operator prepare_mechanical_native_mapping_shape_functions_for_surfaces:
  > Fix the effect of input pin `pinball_key` on the algorithm of operator prepare_mechanical_native_mapping_shape_functions_for_surfaces.
  >
  > 
  >
  > 

- Clarifying documentation:
  > Clarification of documentation.
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
### <a id="Features_native"></a> Features

- Complete usage of ScopingIterators and eliminate GetIds calls in Ans.Dpf.Native:
  > 
  >
  > 

- Add API operator to set name:
  > To add consistency in the way we set result name for FieldsContainer and Fields, an API operator is implemented and exposed HGP side to be used in the HGP plugins as an API.
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

- Make generic support comparison operator private:
  > 

- Supported GenericSupport in GetFieldsContainerAttribute and added GenericSupportAttribute API:
  > - Added a new property_name, "generic_support", to "fieldscontainer::get_attribute" to extract Generic Support
  >
  > - Added a new API, "generic_support::get_attribute", to extract Field, Field Property or String Field associated with Generic Support
  >
  > 
  >
  > 

- Option to extend to midside on nodal_to_elemental_nodal:
  > Option to extend to midside on nodal_to_elemental_nodal
  >
  > 
  >
  > 

### <a id="Fixes_native"></a> Fixes

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

- B1437835, behavior change in reduce_sampling operator:
  > 

- Raise a specific error message when trying to import a non-existing file:
  > 
  >
  > Raise an exception with the error message "The input file does not exist." when importing a non-existing workflow file
  >
  > 
  >
  > 

- Enable float comparison (time frequency precision) in the compute time scoping operator':
  > Reverting PR since a better approach has been found.
  >
  > 

- Enable float comparison (time frequency precision) in the compute time scoping operator:
  > Added pin to enable float comparison.
  >
  > 

- Docstring GetFieldsContainerAttribute:
  > Fix the docstring in GetFieldsContainerAttribute operator.
  >
  > 
  >
  > 

- Inconsistency with elshape treatment  in scoping::by_property op.:
  > When we have shell, solid and skin elements in mesh and perform a scoping::by_property, we observed inconsistency in the way we expose elshape depending if:
  >
  > - we merge skin and shell
  >
  > - we merge shell and solid
  >
  > - we merge nothing
  >
  > 
  >
  > The idea is to find a way to make this treatment consistent and homogenous.
  >
  > 

- Fixed error introduced by PR 667338:
  > - Marked "generic_support_get_attribute" as private operator
  >
  > - Undocumented the fact that "fieldscontainer::get_attribute" can produce GenericSupport
  >
  > 
  >
  > 

- Allow loop_workflow_incremental to take CField output:
  > loop_workflow_incremental now can take a Workflow returning a CField with an added `loop` label.
  >
  > 
  >
  > 

- Scaling factor size in error and norm operator:
  > The size of the output pins 2 and 4 of the operator ErrorAndNorm ("error_norm_calc") was wrong and this has been fixed.
  >
  > Also the documentation has been upgraded, and output pins 2 and 3 now always return fields containers, when they were returning fields for the overall max normalization type.
  >
  > 
  >
  > 

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
## nuget

### <a id="Fixes_nuget"></a> Fixes

- Update unit test:
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

- Adding algorithm options and multithreading:
  > Addition of algorithm options, multithreading and error messages to the Prime - DPF operators.
  >
  > 

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

### <a id="Fixes_prime"></a> Fixes

- Restoring parallelization config options:
  > Restoring parallelization config options, when applies.
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
## utilities

### <a id="Fixes_utilities"></a> Fixes

- Fix breaking change in forward operator:
  > 
## vtk

### <a id="Fixes_vtk"></a> Fixes

- Fix the face node ordering for reversed faces:
  > Fix face orientation during export to VTK for fluid meshes.
  >
  > 
  >
  > 
## workflows
### <a id="Features_workflows"></a> Features

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

- Setup a shared live migration to hdf5 workflow:
  > 
  >
  > Add a shared workflow suitable for H5DPF writing from solvers
  >
  > 
  >
  > 

### <a id="Fixes_workflows"></a> Fixes

- Tags in quantization workflow and tests helpers:
  > Allows the decompression in quantization workflow with a specific mesh scoping.
  >
  > 
  >
  > 

- Change normalization of the residual vector in enhanced pod workflow:
  > Normalization of the residual vector was made with respect to itself in the enhanced pod workflow (enhanced_pod_compression.swf), though it has to be done with respect to the inputs.
  >
  > 
  >
  > 
## Operator changes

### New operators

#### compression

- [quantization](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/compression/quantization.md):
  > Scales a field to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[ q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\( 2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

- [quantization_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/compression/quantization_fc.md):
  > Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.
  > 
  > The output of the quantization operation is :
  > \\[q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]
  > The truncated value in the original scale has to be computed by doing \\(2\varepsilon q(x) \\).
  > 
  > To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).


#### info

- [markdown_latex_example](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/info/markdown_latex_example.md):
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

- [apply_mechanical_native_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/apply_mechanical_native_mapping.md):
  > 
  > Applies pre-computed mapping weights to interpolate field data from a source mesh to a target mesh.
  > This is the second stage of the two-stage native mapping workflow; use `prepare_mechanical_native_mapping` (or a dedicated prepare operator) to compute the weights first.
  > 
  > For each target point $j$, the interpolated value is:
  > 
  > $$
  > u_{\text{target}}^{(j)} = \sum_{i \in S(j)} w_{ij} \cdot u_{\text{source}}^{(i)}
  > $$
  > 
  > where $S(j)$ is the set of source points influencing target point $j$, and $w_{ij}$ are algorithm-specific weights: shape function values (shape function algorithms), barycentric coordinates or inverse-distance values (point cloud algorithms), or optimal linear predictors (kriging).
  > 
  > For further details on the algorithms and their settings, see the Ansys Mechanical help page on
  > [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [create_mech_kriging_convection_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_kriging_convection_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_kriging_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_kriging_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_point_cloud_convection_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_point_cloud_convection_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_point_cloud_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_point_cloud_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_surf_convection_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_shape_func_surf_convection_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_surf_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_shape_func_surf_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_vol_convection_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_shape_func_vol_convection_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_mech_shape_func_vol_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_mech_shape_func_vol_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [create_sc_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/create_sc_mapping_workflow.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [prepare_mechanical_native_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mechanical_native_mapping.md):
  > Prepares the interpolation weights for mapping source field data from a source mesh to a target mesh.
  > This operator delegates to one of the dedicated algorithm operators (shape function volumes, shape function surfaces, point cloud, or kriging) depending on which DataTree input pin is provided.
  > At least one of the `*_mapping` algorithm DataTree inputs (pins 30-33) must be set to choose the mapping algorithm and supply its options.
  > This operator must be used together with the associated `apply_mechanical_native_mapping` operator.
  > 
  > For further details on the available algorithms and their settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [prepare_mechanical_native_mapping_kriging](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mechanical_native_mapping_kriging.md):
  > Prepares field data mapping from a source mesh to a target mesh using **kriging interpolation**, a geostatistical method that assigns weights to nearby source points based on spatial covariance. Use this operator with `apply_mechanical_native_mapping`.
  > 
  > **Ansys Mechanical equivalent**: Weighting = *Kriging*.
  > 
  > For further details on the algorithm and its settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [prepare_mechanical_native_mapping_point_cloud](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mechanical_native_mapping_point_cloud.md):
  > 
  > Prepares field data mapping from source mesh to target mesh using **point cloud interpolation** — a scattered-data
  > approximation method that constructs interpolation weights from spatial proximity relationships without requiring mesh
  > connectivity. Use it together with `apply_mechanical_native_mapping`.
  > 
  > For each target point $\mathbf{x}_t$, the interpolated value is:
  > 
  > $$
  > u(\mathbf{x}_t) = \sum_{i=1}^{N_s} w_i(\mathbf{x}_t) \cdot u_i
  > $$
  > 
  > where $u_i$ are the source field values, $w_i$ are normalized distance-based weights, and $N_s$ is the number of
  > source neighbors (controlled by `search_limit`). See the individual pin descriptions for the available weighting
  > schemes, outside-point strategies, and geometry options.
  > 
  > **Ansys Mechanical equivalent**: Weighting = *Triangulation* (use `weighting_type = "triangulation"`) or Weighting = *Distance Based Average* (use `weighting_type = "weighted_average"`).
  > 
  > For further details on the algorithm and its settings, see the Ansys Mechanical help page on
  > [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [prepare_mechanical_native_mapping_shape_functions_for_surfaces](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_surfaces.md):
  > 
  > Prepares field data mapping from source mesh to target mesh using **finite element shape functions** for **surface
  > elements** (shells and membranes). This operator computes interpolation weights by locating target points
  > within source surface elements and evaluating isoparametric shape functions at the reduced coordinates. This operator
  > must be used in conjunction with `apply_mechanical_native_mapping`.
  > 
  > ##### Shape function interpolation for surfaces
  > 
  > For surface elements, the field value at any point $\mathbf{x}$ within an element is interpolated using:
  > 
  > $$
  > u(\mathbf{x}) = \sum_{i=1}^{N_{\text{nodes}}} N_i(\xi, \eta) \cdot u_i
  > $$
  > 
  > where:
  > - $N_i(\xi, \eta)$ are the 2D isoparametric shape functions
  > - $(\xi, \eta)$ are the reduced (natural) coordinates in the reference element $[-1, 1]^2$
  > - $u_i$ are the nodal field values
  > - $N_{\text{nodes}}$ is the number of nodes per element (3, 4, 6, 8, etc.)
  > 
  > ##### Comparison with volume shape functions
  > 
  > - **Reduced coordinate dimension**: 2D $(\xi, \eta)$ vs 3D $(\xi, \eta, \zeta)$ for volume elements
  > - **Target input**: surface operator requires a **meshed_region** target; volume operator also accepts a field
  > - **Additional proximity controls**: surface operator supports normal distance checking (pins 15-16) and a
  >   pinball region (pins 17-20), which are not available for volumes
  > 
  > **Ansys Mechanical equivalent**: Weighting = *Shape Function*, Transfer Type = *Surface*.
  > Note: this mode only supports triangle and quadrilateral source elements.
  > 
  > For further details on the algorithm and its settings, see the Ansys Mechanical help page on
  > [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [prepare_mechanical_native_mapping_shape_functions_for_volume](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_volume.md):
  > Prepares field data mapping from source mesh to target mesh using **finite element shape functions** on volume elements (hexahedra, tetrahedra, wedges, pyramids).
  > 
  > Each target point is located within a source element and the field value is interpolated using 3D isoparametric shape functions at the corresponding reduced coordinates.
  > 
  > Note: shape functions near the apex of pyramid elements exhibit singular behaviour and may produce errors for target points close to the apex. Use this operator with `apply_mechanical_native_mapping`.
  > 
  > **Ansys Mechanical equivalent**: Weighting = *Shape Function*, Transfer Type = *Volumetric*.
  > 
  > For further details on the algorithm and its settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

- [sc_mapping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/sc_mapping.md):
  > Apply System Coupling to map data from an input mesh to a target mesh.

- [sysc_point_cloud_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/sysc_point_cloud_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.

- [sysc_shape_function_wf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/sysc_shape_function_wf.md):
  > Prepares a workflow able to map data from an input mesh to a target mesh.


#### math

- [linearized_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/linearized_stress.md):
  > get linearized stress


#### mesh

- [edge_decimation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/edge_decimation.md):
  > Takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold. Branch nodes and sharp corners are preserved.

- [morphed_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/morphed_field.md):
  > Computes the displacement to apply on input coordinates (in 2) if a morphing field (in 0) is applied on coordinates (in 1)

- [morphing](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/morphing.md):
  > Applies morphing on a meshed region depending on an input displacement field.

- [prepare_morphing](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/prepare_morphing.md):
  > Prepare morphing on a meshed region depending on an input displacement field.


#### result

- [acoustic_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/acoustic_energy_density.md):
  > Read/compute AED by calling the readers defined by the datasources.

- [acoustic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/acoustic_pressure.md):
  > Read/compute AcousticPressure by calling the readers defined by the datasources.

- [average_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/average_velocity.md):
  > Read/compute average velocity by calling the readers defined by the datasources.

- [creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain.md):
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

- [creep_strain_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_X.md):
  > Read/compute element nodal component creep strains XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_XY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_XY.md):
  > Read/compute element nodal component creep strains XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_XZ.md):
  > Read/compute element nodal component creep strains XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_Y.md):
  > Read/compute element nodal component creep strains YY normal component (11 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_YZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_YZ.md):
  > Read/compute element nodal component creep strains YZ shear component (12 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_Z.md):
  > Read/compute element nodal component creep strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [creep_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_eqv.md):
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

- [creep_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_intensity.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_max_shear.md):
  > Reads/computes element nodal component creep strains, average it on nodes (by default) and computes its invariants.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed.

- [creep_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_principal_1.md):
  > Read/compute element nodal component creep strains 1st principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_principal_2.md):
  > Read/compute element nodal component creep strains 2nd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [creep_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_principal_3.md):
  > Read/compute element nodal component creep strains 3rd principal component by calling the readers defined by the datasources and computing its eigen values.
  > This operation is independent of the coordinate system unless averaging across elements is requested, in which case a rotation to the global coordinate system is performed. The off-diagonal strains are first converted from Voigt notation to the standard strain values.

- [element_nodal_heat](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/element_nodal_heat.md):
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
  > | 12      | Multi-Point Constraint |
  > | 13      | Pretension      |
  > element_nodal_heat fields contain STATIC and DAMPING forces stored as components (when available). STATIC: component 0. DAMPING: component 1.

- [element_nodal_moments](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/element_nodal_moments.md):
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
  > | 12      | Multi-Point Constraint |
  > | 13      | Pretension      |
  > element_nodal_moments fields contain STATIC, DAMPING and INERTIA forces stored as components (when available). STATIC: components 0 -> 2. DAMPING: components 3 -> 5. INERTIA components 6 -> 8

- [emissivity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/emissivity.md):
  > Read/compute emissivity by calling the readers defined by the datasources.

- [emitted_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/emitted_radiation_heat_flux.md):
  > Read/compute emitted radiation heat flux by calling the readers defined by the datasources.

- [enclosure_number](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/enclosure_number.md):
  > Read/compute enclosure number by calling the readers defined by the datasources.

- [film_coefficient](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/film_coefficient.md):
  > Read/compute film coefficient by calling the readers defined by the datasources.

- [flow_rate](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/flow_rate.md):
  > Read/compute flow rate by calling the readers defined by the datasources.

- [fluid_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/fluid_velocity.md):
  > Read/compute FV by calling the readers defined by the datasources.

- [gasket_total_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_total_closure.md):
  > computes the gasket total closure (sum of gasket thermal closure and gasket inelastic closure).

- [gasket_total_closure_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_total_closure_X.md):
  > Read/compute elemental gasket total closure XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [gasket_total_closure_XY](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_total_closure_XY.md):
  > Read/compute elemental gasket total closure XY shear component (01 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [gasket_total_closure_XZ](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_total_closure_XZ.md):
  > Read/compute elemental gasket total closure XZ shear component (02 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.

- [heat_conductivity_rate](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/heat_conductivity_rate.md):
  > Read/compute heat conductivity rate by calling the readers defined by the datasources.

- [heat_transport_rate](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/heat_transport_rate.md):
  > Read/compute heat transport rate by calling the readers defined by the datasources.

- [incident_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/incident_radiation_heat_flux.md):
  > Read/compute incident radiation heat flux by calling the readers defined by the datasources.

- [input_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/input_sound_power.md):
  > Read/compute PINC by calling the readers defined by the datasources.

- [layer_orientation_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/layer_orientation_provider.md):
  > Read the layer orientations.

- [modal_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/modal_acceleration.md):
  > Read/compute modal acceleration by calling the readers defined by the datasources.

- [modal_coordinate](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/modal_coordinate.md):
  > Read/compute modal coordinate by calling the readers defined by the datasources.

- [modal_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/modal_velocity.md):
  > Read/compute modal velocity by calling the readers defined by the datasources.

- [net_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/net_radiation_heat_flux.md):
  > Read/compute net radiation heat flux by calling the readers defined by the datasources.

- [nodal_rotation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotation.md):
  > Read/compute nodal rotation by calling the readers defined by the datasources.

- [nodal_rotation_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotation_X.md):
  > Read/compute nodal rotation X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotation_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotation_Y.md):
  > Read/compute nodal rotation Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotation_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotation_Z.md):
  > Read/compute nodal rotation Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_acceleration.md):
  > Read/compute nodal rotational acceleration by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_acceleration_X.md):
  > Read/compute nodal rotational acceleration X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_acceleration_Y.md):
  > Read/compute nodal rotational acceleration Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_acceleration_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_acceleration_Z.md):
  > Read/compute nodal rotational acceleration Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_velocity.md):
  > Read/compute nodal rotational velocity by calling the readers defined by the datasources.

- [nodal_rotational_velocity_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_velocity_X.md):
  > Read/compute nodal rotational velocity X component of the vector (1st component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_velocity_Y.md):
  > Read/compute nodal rotational velocity Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [nodal_rotational_velocity_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_rotational_velocity_Z.md):
  > Read/compute nodal rotational velocity Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [node_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/node_orientations.md):
  > Read/compute node euler angles by calling the readers defined by the datasources.

- [node_orientations_X](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/node_orientations_X.md):
  > Read/compute node euler angles X component of the vector (1st component) by calling the readers defined by the datasources.

- [node_orientations_Y](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/node_orientations_Y.md):
  > Read/compute node euler angles Y component of the vector (2nd component) by calling the readers defined by the datasources.

- [node_orientations_Z](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/node_orientations_Z.md):
  > Read/compute node euler angles Z component of the vector (3rd component) by calling the readers defined by the datasources.

- [nusselt_number](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nusselt_number.md):
  > Read/compute nusselt number by calling the readers defined by the datasources.

- [output_sound_power](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/output_sound_power.md):
  > Read/compute POUT by calling the readers defined by the datasources.

- [prandtl_number](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/prandtl_number.md):
  > Read/compute prandtl number by calling the readers defined by the datasources.

- [raw_acceleration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/raw_acceleration.md):
  > Read/compute A vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [raw_velocity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/raw_velocity.md):
  > Read/compute V vector from the finite element problem MA+CV+KU=F by calling the readers defined by the datasources.

- [record_reader](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/record_reader.md):
  > Extracts a record from a file.

- [reflected_radiation_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/reflected_radiation_heat_flux.md):
  > Read/compute reflected radiation heat flux by calling the readers defined by the datasources.

- [reynolds_number](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/reynolds_number.md):
  > Read/compute reynolds number by calling the readers defined by the datasources.

- [squared_l2norm_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/squared_l2norm_pressure.md):
  > Read/compute Square of the L2 norm of pressure over element volume by calling the readers defined by the datasources.

- [view_factor_sum](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/view_factor_sum.md):
  > Read/compute view factor sum by calling the readers defined by the datasources.


#### scoping

- [extend_midside_nodal_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/extend_midside_nodal_scoping.md):
  > Extends the input nodal scoping with the neighbor corner nodes of every midside node in the input. For each midside node in the scoping, the two corner nodes that bound it on the element edge are added to the output scoping. 


#### serialization

- [export_mesh_with_prime](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/serialization/export_mesh_with_prime.md):
  > Transfer DPF's meshed region into an external layer prime model and serialize it into a given file format.


#### utility

- [concatenate_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/concatenate_fields.md):
  > Concatenates fields into a unique one by incrementing the number of components.
  > 
  > Example:
  > - Field1 components: { UX, UY, UZ }
  > - Field2 components: { RX, RY, RZ }
  > - Output field : { UX, UY, UZ, RX, RY, RZ }

- [concatenate_fields_containers](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/concatenate_fields_containers.md):
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

- [customtypefield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/customtypefield_get_attribute.md):
  > Gets a property from an input field/field container. A CustomTypeFieldin pin 0, a property name (string) in pin 1 are expected as inputs

- [cyclic_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/cyclic_support_get_attribute.md):
  > A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

- [get_operators](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/get_operators.md):
  > Getter on operators inside a workflow.

- [operator_changelog](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/operator_changelog.md):
  > Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

- [propertyfield_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/propertyfield_get_attribute.md):
  > Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs



### Changed operators

#### averaging

- [elemental_difference](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix data corruption on centroid elements with through_layers enabled.

  > 0.0.3: Fix crash on elements with fewer than two corner nodes.

  > 0.0.4: Fix shell layer metadata when computing elemental difference from nodal input.


- [elemental_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_fraction_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_mean](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_mean.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_mean_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_mean_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_nodal_to_nodal.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_nodal_to_nodal_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_nodal_to_nodal_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_nodal_to_nodal_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_nodal_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_nodal_to_nodal_fc.md)

  > 0.0.1: Fixed issue with semiparabolic elements.

  > 0.0.2: Midside nodes included in the input scoping are now properly averaged regardless of the presence of its parent corner nodes.

  > 0.0.3: Improving memory management.

  > 0.0.4: Internal refactoring to use Scoping Iterators.

  > 0.0.5: Fix exception type preservation during parallel execution.


- [elemental_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_to_elemental_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elemental_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_to_elemental_nodal_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [elemental_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix division by zero in face-based FVM averaging.


- [elemental_to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/elemental_to_nodal_fc.md)

  > 0.0.1: Fixed shell management issue.

  > 0.0.2: Internal refactoring to use Scoping Iterators.

  > 0.0.3: Fix exception type preservation during parallel execution.


- [extend_to_mid_nodes_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/extend_to_mid_nodes_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [force_summation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/force_summation.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.2.0: Add support for excluding or not contact elements.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N.m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Internal refactoring to remove usage of deprecated pin 200 of ENF


- [force_summation_psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/force_summation_psd.md)

  > 0.1.0: Scopings container supported on pins 1 and 2. Fields container supported on pin 6.

  > 0.1.1: Contact elements are now excluded from the summation.

  > 1.0.0: The moment unit is now kept from the input units and not converted to N*m.


- [gauss_to_node_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/gauss_to_node_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_difference.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_difference_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_difference_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [nodal_fraction_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_fraction_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.


- [nodal_to_elemental](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_to_elemental.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_to_elemental_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [nodal_to_elemental_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_to_elemental_nodal.md)

  > 0.0.1: Fixed issue with resize output field.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [nodal_to_elemental_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/nodal_to_elemental_nodal_fc.md)

  > 0.0.1: Fixed issue with resize output fields.

  > 0.1.0: Add option to extend to midside nodes.

  > 0.1.1: Internal refactoring to use Scoping Iterators.

  > 0.1.2: Fix exception type preservation during parallel execution.


- [to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [to_nodal_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/averaging/to_nodal_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### filter

- [abc_weightings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/abc_weightings.md)

  > 0.0.1: Fixed bug in frequency calculation with multiple rpms in the support.


- [field_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_band_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_band_pass_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_high_pass_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_low_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_low_pass_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [field_signed_high_pass_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/field_signed_high_pass_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/scoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/scoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/scoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [scoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/scoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timefreq_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timefreq_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timefreq_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timefreq_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timefreq_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_band_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timescoping_band_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timescoping_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_low_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timescoping_low_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [timescoping_signed_high_pass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/filter/timescoping_signed_high_pass.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### geo

- [cartesian_to_spherical](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/cartesian_to_spherical.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [cartesian_to_spherical_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/cartesian_to_spherical_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [element_nodal_contribution](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/element_nodal_contribution.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elements_facets_surfaces_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/elements_facets_surfaces_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elements_volume](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/elements_volume.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Fix exception type preservation during parallel execution.


- [elements_volumes_over_time](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/elements_volumes_over_time.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [faces_area](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/faces_area.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [gauss_to_node](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/gauss_to_node.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [integrate_over_elements](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/integrate_over_elements.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [normals](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/normals.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [normals_provider_nl](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/normals_provider_nl.md)

  > 0.0.1: Bug fixed for input mesh type containing solid elements.

  > 1.0.0: Fixed reference coordinate-system on which normals are calculated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [rotate_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/rotate_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/rotate_in_cylindrical_cs.md)

  > 1.0.0: Fix bug for the rotation of strain fields with a cylindrical system whose axis is rotated.

  > 1.0.1: Internal refactoring to use Scoping Iterators.

  > 1.0.2: Fix exception type preservation during parallel execution.


- [rotate_in_cylindrical_cs_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/rotate_in_cylindrical_cs_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/spherical_to_cartesian.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [spherical_to_cartesian_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/spherical_to_cartesian_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [to_polar_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/geo/to_polar_coordinates.md)

  > 0.0.1: Fix exception type preservation during parallel execution.



#### invariant

- [eigen_values_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/invariant/eigen_values_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [invariants](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/invariant/invariants.md)

  > 0.1.0: Add input and output pins to control the principal stress output.


- [invariants_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/invariant/invariants_fc.md)

  > 0.1.0: Add input and output pins to control the principal stress output.

  > 0.1.1: Fix exception type preservation during parallel execution.


- [segalman_von_mises_eqv_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/invariant/segalman_von_mises_eqv_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [von_mises_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/invariant/von_mises_eqv.md)

  > 0.0.1: Fix exception type preservation during parallel execution.



#### logic

- [ascending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/ascending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [ascending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/ascending_sort_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [descending_sort](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/descending_sort.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [descending_sort_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/descending_sort_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [elementary_data_selector](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/elementary_data_selector.md)

  > 0.1.0: fix of crash when input field data pointer is empty, the operator will output an empty field in this case moving forward.

  > 0.2.0: fix of crash when input field had no data pointer, the operator will output an empty field in this case moving forward.

  > 0.2.1: Internal refactoring to use Scoping Iterators.


- [identical_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/identical_meshes.md)

  > 0.0.1: Support comparing the node to element connectivity.


- [identical_property_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/identical_property_fields.md)

  > 0.0.1: Add the order_independent input pin.


- [solid_shell_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/logic/solid_shell_fields.md)

  > 0.0.1: Input Fields Containers can contain empty fields.



#### mapping

- [find_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/find_reduced_coordinates.md)

  > 0.1.0: Fix bug with interpolation points at corner nodes.

  > 0.1.1: Update the operator and pin descriptions.

  > 0.1.2: Internal refactoring to use Scoping Iterators.


- [on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/on_coordinates.md)

  > 0.1.0: Performance improvement.

  > 0.2.0: Fix bug with interpolation points at corner nodes.

  > 0.3.0: Fix bug with missing results and use_quadratic_elements pin.

  > 0.3.1: Update the operator and pin descriptions.


- [on_reduced_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/on_reduced_coordinates.md)

  > 0.0.1: Update the operator and pin descriptions.

  > 0.0.2: Internal refactoring to use Scoping Iterators.


- [prepare_mapping_workflow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/prepare_mapping_workflow.md)

  > 0.0.1: Update the operator and pin descriptions.


- [scoping_on_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/scoping_on_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [solid_to_skin](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/solid_to_skin.md)

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


- [solid_to_skin_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mapping/solid_to_skin_fc.md)

  > 0.1.0: Improving performance for Nodal locations. Added parallelization.

  > 0.1.1: Bug fixed for empty fields container.

  > 0.2.0: Improving performance for ElementalNodal and Elemental locations.

  > 0.2.1: Fixed issue with different scopings in the input field.

  > 0.2.2: Fixed issue with shell layers calculation in the results field while having mid-side nodes on some elements.

  > 0.2.3: Fixed issue with fields container with mixed location.

  > 0.2.4: Improve pin 0, pin 1, pin 2, and output pin 0 descriptions to match the solid_to_skin operator.

  > 0.2.5: Fix exception type preservation during parallel execution.

  > 0.2.6: Fix null pointer access when input field has no mesh support.



#### math

- [accumulate_level_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/accumulate_level_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_min_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/accumulate_min_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [accumulate_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/accumulate_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [average_over_label_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/average_over_label_fc.md)

  > 0.0.1: Fixed issue with crash due to empty label.


- [compute_residual_and_error](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/compute_residual_and_error.md)

  > 0.1.0: Support generic labels (not only time) in the input FieldsContainer

  > 0.1.1: Fixed the size of output scaling factors for the absolute normalization

  > 1.0.0: Output pins 0 and 1 come out as fields containers instead of fields for normalization type 3
Upgraded documentation


- [entity_extractor](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/entity_extractor.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [expansion_psd](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/expansion_psd.md)

  > 0.0.1: Fix handling of empty fields in mode shapes.


- [fft_approx](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/fft_approx.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [mac](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/mac.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [make_one_on_comp](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/make_one_on_comp.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [modal_participation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/modal_participation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [norm_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/norm_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [outer_product](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/outer_product.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [pow](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/pow.md)

  > 0.1.0: Pin added to chose the value to set for division by zero for negative exponents


- [pow_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/pow_fc.md)

  > 0.1.0: Pin added to chose the value to set for division by zero for negative exponents


- [scale](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/scale.md)

  > 0.0.1: Fixed a segmentation fault.


- [scale_by_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/scale_by_field.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_by_field_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/scale_by_field_fc.md)

  > 0.0.1: Add support of fields with shell layers


- [scale_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/scale_fc.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [sweeping_phase](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/sweeping_phase.md)

  > 0.0.1: Clarify the documentation.


- [sweeping_phase_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/sweeping_phase_fc.md)

  > 0.0.1: Clarify the documentation.


- [time_freq_interpolation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/math/time_freq_interpolation.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### mesh

- [change_cs](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/change_cs.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [combine_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/combine_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [exclude_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/exclude_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [from_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/from_scoping.md)

  > 0.1.0: Improvement in the performance.

  > 0.1.1: Fixed bug when the scoping of a property field and its mesh are different.

  > 0.1.2: Fixed bug when some of the ids of the desired new scoping is not present in the property field or in the mesh.

  > 0.1.3: Fixed undefined behavior with custom property fields.

  > 0.2.0: Improvement in the performance for cases with non shared scoping between property fields and mesh.

  > 0.2.1: Minor improvements in performance.

  > 0.3.0: From premium to entry.

  > 0.3.1: Internal refactoring to use Scoping Iterators.


- [from_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/from_scopings.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity.

  > 0.1.0: Improvement in the performance for cases with non shared scoping between property fields and mesh.


- [make_plane_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/make_plane_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [make_sphere_levelset](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/make_sphere_levelset.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_extraction](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/mesh_extraction.md)

  > 1.0.0: Property fields associated to the mesh are rescoped on the selection and associated to the new mesh.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/mesh_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.


- [mesh_to_graphics](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/mesh_to_graphics.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_to_graphics_edges](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/mesh_to_graphics_edges.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mesh_to_pyvista](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/mesh_to_pyvista.md)

  > 0.0.1: Fix node ordering for face connectivity of fluid cell faces marked as reversed.


- [meshes_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/meshes_provider.md)

  > 0.1.0: Update the effect of the permissive configuration.


- [points_from_coordinates](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/points_from_coordinates.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [skin](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/skin.md)

  > 0.0.1: Fixing issue related to share pointers of property fields and mesh.

  > 0.0.2: Internal change to share pointers of property fields and mesh.


- [split_fields](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/split_fields.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [split_mesh](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/split_mesh.md)

  > 0.0.1: Improvement in the performance.

  > 0.0.2: Fixing issue with connectivity

  > 0.1.0: Improvement in the performance by implementing scoping_build_index_tables operator.


- [wireframe](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/mesh/wireframe.md)

  > 0.1.0: Addition of optional element_restriction pin.

  > 0.1.1: Operator now supports shell and beam elements.

  > 0.1.2: Internal refactoring to use Scoping Iterators.



#### metadata

- [boundary_condition_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/boundary_condition_provider.md)

  > 0.0.1: Improved documentation and exceptions handling.


- [cyclic_mesh_expansion](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/cyclic_mesh_expansion.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [element_types_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/element_types_provider.md)

  > 0.1.0: Added the possibility to output a PropertyField.


- [integrate_over_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/integrate_over_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [streams_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/streams_provider.md)

  > 0.1.0: Add the permissive configuration.


- [time_freq_support_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/metadata/time_freq_support_get_attribute.md)

  > 0.1.0: Add new supported property name 'step_id_from_harmonic_index' returning an int.

  > 0.1.1: Internal refactoring to use Scoping Iterators.



#### min_max

- [min_max_fc_inc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/min_max/min_max_fc_inc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [min_max_over_time_by_entity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/min_max/min_max_over_time_by_entity.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### result

- [accu_eqv_creep_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/accu_eqv_creep_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [accu_eqv_plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/accu_eqv_plastic_strain.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [artificial_hourglass_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/artificial_hourglass_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [beam_axial_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_axial_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_axial_stress.md)

  > 0.1.0: MAPDL results supported.


- [beam_axial_total_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_axial_total_strain.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_s_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_s_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_s_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_bending_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_t_bending_moment.md)

  > 0.1.0: MAPDL results supported.


- [beam_t_shear_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_t_shear_force.md)

  > 0.1.0: MAPDL results supported.


- [beam_torsional_moment](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/beam_torsional_moment.md)

  > 0.1.0: MAPDL results supported.


- [co_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/co_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_fluid_penetration_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_fluid_penetration_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_friction_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_friction_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_gap_distance](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_gap_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_penetration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_penetration.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_sliding_distance](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_sliding_distance.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_status](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_status.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_surface_heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_surface_heat_flux.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [contact_total_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/contact_total_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [coordinate_system](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/coordinate_system.md)

  > 0.0.1: Output pin 0 documentation update.


- [creep_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/creep_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [displacement](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/displacement.md)

  > 1.0.0: Modal coordinates from RFRQ, RDSP and DSUB files can't be extracted through displacement operator anymore, user can use modal_coordinate operator instead.


- [elastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [elastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [elastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [electric_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/electric_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/electric_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [electric_potential](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/electric_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_centroids](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/element_centroids.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [element_nodal_forces](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/element_nodal_forces.md)

  > 0.1.0: split_force_components pin deprecated. To obtain rotation and temperature dofs please use the dedicated operator (element_nodal_moments, element_nodal_heat)Use the component selector to retrieve a specific derivative order. Components 0, 1 and 2 for stiffness. Components 3, 4 and 5 for damping. Components 6, 7 and 8 for inertia.


- [element_orientations](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/element_orientations.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_heat_generation](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elemental_heat_generation.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_mass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elemental_mass.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [elemental_volume](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/elemental_volume.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [equivalent_mass](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/equivalent_mass.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [eqv_stress_parameter](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/eqv_stress_parameter.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [euler_load_buckling](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/euler_load_buckling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [gasket_inelastic_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_inelastic_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_stress.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [gasket_thermal_closure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/gasket_thermal_closure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [heat_flux](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/heat_flux.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [hydrostatic_pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/hydrostatic_pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [incremental_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/incremental_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [kinetic_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/kinetic_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [magnetic_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/magnetic_field.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_flux_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/magnetic_flux_density.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [magnetic_scalar_potential](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/magnetic_scalar_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [magnetic_vector_potential](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/magnetic_vector_potential.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [mapdl.global_to_nodal](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/mapdl.global_to_nodal.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [mapdl.pres_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/mapdl.pres_to_field.md)

  > 0.0.1: Fix crash caused by invalid iterator when reading shell data.


- [mapdl_section](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/mapdl_section.md)

  > 0.0.1: Making the operator license-free.


- [members_in_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/members_in_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_compression_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/members_in_compression_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [members_in_linear_compression_bending_not_certified](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/members_in_linear_compression_bending_not_certified.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [nmisc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nmisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.


- [nodal_to_global](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/nodal_to_global.md)

  > 0.1.0: Addition of optional inverse_rotation pin.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [num_surface_status_changes](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/num_surface_status_changes.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [plastic_strain_energy_density](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_energy_density.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [plastic_strain_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [plastic_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/plastic_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [poynting_vector_surface](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/poynting_vector_surface.md)

  > 0.0.1: Fix bug in memory allocation for some local variables participating in interpolation at integration points.


- [pressure](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/pressure.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_displacement](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/raw_displacement.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [raw_reaction_force](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/raw_reaction_force.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [recombine_harmonic_indeces_cyclic](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

  > 0.1.0: Addition of is_constant pin


- [remove_rigid_body_motion](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/remove_rigid_body_motion.md)

  > 0.0.1: Replace vector of pointers with array of objects to prevent memory leaks


- [remove_rigid_body_motion_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/remove_rigid_body_motion_fc.md)

  > 0.0.1: Replace vector of pointers with array of objects to prevent memory leaks


- [result_provider](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/result_provider.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were only performed if the requested result was a 3D vector or a symmetrical 3x3 matrix.


- [smisc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/smisc.md)

  > 1.0.0: num_components input pin is removed, please use the item_index pin with a vector of indexes.


- [state_variable](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/state_variable.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stiffness_matrix_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stiffness_matrix_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stress](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [stress_intensity](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_intensity.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_max_shear](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_max_shear.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [stress_ratio](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_ratio.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [stress_von_mises](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/stress_von_mises.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [structural_temperature](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/structural_temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [swelling_strains](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/swelling_strains.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/temperature.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [temperature_grad](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/temperature_grad.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_dissipation_energy](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_dissipation_energy.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thermal_strain](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_strain.md)

  > 0.1.0: Add pin eExtendMidNodesPin to add/remove mid-nodes when averaging from ElementalNodal to Nodal. Default:True


- [thermal_strain_principal_1](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_strain_principal_1.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_2](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_strain_principal_2.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strain_principal_3](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_strain_principal_3.md)

  > 1.0.0: bool_rotate_to_global pin removed for server versions >25.2. An error is raised if connected.


- [thermal_strains_eqv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thermal_strains_eqv.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [thickness](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/thickness.md)

  > 1.0.0: This operator had previously the bool_rotate_to_global pin exposed and set as True while rotations to global were not performed and results were output in the Solution Coordinate System.


- [torque](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/torque.md)

  > 0.1.0: Fields container supported on pin 1. Pin 1 name changed.

  > 1.0.0: The torque unit is now kept from the input units and not converted to N*m.

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [transient_rayleigh_integration](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/result/transient_rayleigh_integration.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### scoping

- [adapt_with_scopings_container](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/adapt_with_scopings_container.md)

  > 0.0.1: Fix exception type preservation during parallel execution.


- [intersect](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/intersect.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [on_property](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/on_property.md)

  > 1.0.0: Remove pin "inclusive"

  > 1.0.1: Internal refactoring to use Scoping Iterators.


- [reduce_sampling](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/reduce_sampling.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [rescope](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/rescope.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [rescope_custom_type_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/rescope_custom_type_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [rescope_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/rescope_fc.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [rescope_property_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/rescope_property_field.md)

  > 0.1.0: Performance improvement.

  > 0.1.1: Internal refactoring to use Scoping Iterators.


- [transpose](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/scoping/transpose.md)

  > 0.1.0: Improvement of performance

  > 0.1.1: Error with license

  > 0.2.0: Added extend_midside_nodes input pin

  > 0.2.1: Internal refactoring to use Scoping Iterators.



#### serialization

- [csv_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/serialization/csv_to_field.md)

  > 1.0.0: Fixed issue while reading csv with multiple fields and common time id between fields.


- [field_to_csv](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/serialization/field_to_csv.md)

  > 1.0.0: Fixed issue while writing csv with multiple fields and common time id between fields.


- [workflow_to_pydpf](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/serialization/workflow_to_pydpf.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.



#### utility

- [compute_time_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/compute_time_scoping.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/extract_scoping.md)

  > 0.0.1: Error with license


- [extract_sub_fc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/extract_sub_fc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_mc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/extract_sub_mc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_sub_sc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/extract_sub_sc.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [extract_time_freq](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/extract_time_freq.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [fc_get_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/fc_get_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' that returns a string and 'field_names' that returns a StringField.


- [for_each](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/for_each.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [forward](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/forward.md)

  > 1.0.0: Add ellipsis property to pins.


- [html_doc](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/html_doc.md)

  > 0.1.0: Show operator version and changelog.

  > 0.1.1: Fix support for dollar LaTeX delimiters in MathJax.


- [ints_to_scoping](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/ints_to_scoping.md)

  > 0.1.0: Add input pin 2 to specify an upper bound to create a scoping for a given range (taking single input in pin 0 as the lower bound).


- [make_for_each_range](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/make_for_each_range.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_materials](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/merge_materials.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_meshes](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/merge_meshes.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.

  > 0.0.2: Support merging the node to element connectivity.


- [merge_scopings](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/merge_scopings.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [merge_time_freq_supports](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/merge_time_freq_supports.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [producer_consumer_for_each](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/producer_consumer_for_each.md)

  > 0.1.0: Addition of events to monitor the status of the operator.

  > 0.2.0: Moving event of progress bar at the beggining of the loop and changing input stream.


- [scalars_to_field](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/scalars_to_field.md)

  > 0.0.1: Internal refactoring to use Scoping Iterators.


- [set_attribute](https://ansys-a.devportal.io/docs/dpf-framework-2026-r2/operator-specifications/utility/set_attribute.md)

  > 0.1.0: Add new supported property names 'base_name' and 'field_names'.




### Deleted operators

#### gasket_deformation

#### gasket_deformation_X

#### gasket_deformation_XY

#### gasket_deformation_XZ

#### nodal_moment
