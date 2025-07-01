# Changelog summary
## Features
  * [Source operator: allow to return all times/freq fields](#source-operator-allow-to-return-all-timesfreq-fields)
  * [rescope operator acknowledges only first duplicated value](#rescope-operator-acknowledges-only-first-duplicated-value)
  * [Minor version upgrade for intel MKL only for windows](#minor-version-upgrade-for-intel-mkl-only-for-windows)
  * [Allow DPF to operate without context](#allow-dpf-to-operate-without-context)
  * Added Any_NewFrom_FieldsContainer in gRPC


## Fixes
  * [Solve issue with reordering of unfiltered ENFs](#solve-issue-with-reordering-of-unfiltered-enfs)
  * [print custom type collections](#print-custom-type-collections)
  * [issue with node averaged results with scoping](#issue-with-node-averaged-results-with-scoping)
  * exposure of operators with no spec
  * Fix Rescope operator for input fields with no ids in the scoping
  * [Performance issue on readMeshProperties](#performance-issue-on-readmeshproperties)
  * [Fix append cyclic support on ENG_VOL_cyclic and NMISC_cyclic](#fix-append-cyclic-support-on-eng_vol_cyclic-and-nmisc_cyclic)
  * [[REDACTED] MAPDL Nodal Averaged Result operators return wrong values when setting a mesh scoping](#mapdl-nodal-averaged-result-operators-return-wrong-values-when-setting-a-mesh-scoping)
  * [BUG [REDACTED] - Nodal cyclic expansion creates duplicated scoping ids.](#bug---nodal-cyclic-expansion-creates-duplicated-scoping-ids)
  * [[REDACTED] Handle Gasket Degenerated Elements](#handle-gasket-degenerated-elements)
  * Solve property field provider by name performance issues with distributed files
  * Fix case of unused enforced motion and residual vector for MSUP expansion
  * Fix corner node filtering/extrapolation
  * [BUG [REDACTED] -  Finding the right id for dpfElementType](#bug---finding-the-right-id-for-dpfelementtype)
  * [Fix rotate ENF results](#fix-rotate-enf-results)
  * Fix bugs for MSUP harmonic analysis with MODE file scoping
  * Crash dpf vector commit
  * [Fix reading Von Mises/Principal stresses from rst files for non-PSD analyses.](#fix-reading-von-misesprincipal-stresses-from-rst-files-for-non-psd-analyses)
  * [BUG [REDACTED] BUG [REDACTED]](#bug-bug)
  * Json workflow deserializer
  * Data sources taken in wrong pin
  * Fix location of averaged empty fields
  * [Allow to serialize data in strings for more than 2 Gb](#allow-to-serialize-data-in-strings-for-more-than-2-gb)
  * [Fix element results loop](#fix-element-results-loop)
  * Remove throw in C
  * [Improve VTU export for several field inputs](#improve-vtu-export-for-several-field-inputs)
  * [Improving memory allocation in operator `split_fields`](#improving-memory-allocation-in-operator-split_fields)
  * [New documentation operator supporting Markdown](#new-documentation-operator-supporting-markdown)
  * [load library collision key not reported when different library with same key](#load-library-collision-key-not-reported-when-different-library-with-same-key)
  * [Improve no output pin error message](#improve-no-output-pin-error-message)
  * Mechanical DPF: Element Thickness operator  does not respect the scoping (bug [REDACTED]
  * [Document limitation in rotation of Elemental and ElementalNodal results](#document-limitation-in-rotation-of-elemental-and-elementalnodal-results)
  * [Repair mapdl::rst::mesh_property_provider](#repair-mapdlrstmesh_property_provider)
  * Restoring previous code for dataTree DPF API
  * [Allow to serialize to a file with more than 2Gb](#allow-to-serialize-to-a-file-with-more-than-2gb)
  * [Fix load plugin error code](#fix-load-plugin-error-code)
  * [Read Hdf5 file without license check](#read-hdf5-file-without-license-check)
  * ["hdf5 stream_provider operator doesn't check the file existence"](#hdf5-stream_provider-operator-doesnt-check-the-file-existence)
  * [Fix Any deep copy to client](#fix-any-deep-copy-to-client)
  * [Changing DataTree's API for getting attributes](#changing-datatrees-api-for-getting-attributes)
  * [random failure on license checkout](#random-failure-on-license-checkout)
  * [Add missing support for nodal fields after solid-to-skin operator](#add-missing-support-for-nodal-fields-after-solid-to-skin-operator)
  * ["modal_damping_ratio operator is outputting NaN when Natural Frequency is exactly 0"](#modal_damping_ratio-operator-is-outputting-nan-when-natural-frequency-is-exactly-0)
  * [Fixed issue when 2 remote operators are connected with local and remote inputs](#fixed-issue-when-2-remote-operators-are-connected-with-local-and-remote-inputs)
  * ["Infinite loop in function readENFResultBlock"](#infinite-loop-in-function-readenfresultblock)
  * Issue with index in elemental rotation
  * [Close windows port correctly and server graceful shutdown](#close-windows-port-correctly-and-server-graceful-shutdown)
  * Add mesh to elemental energy results from MAPDL
  * Loading a plugin gracefully fails if library key is nullptr
  * [CustomTypeFields with double values are now better handling huge sizes](#customtypefields-with-double-values-are-now-better-handling-huge-sizes)
  * [Fix allocation of mesh bitset out of range](#fix-allocation-of-mesh-bitset-out-of-range)
  * [Changed license requirement for operator split_field](#changed-license-requirement-for-operator-split_field)
  * remove absolute value function for expansion::psd operator
  * prevent `writeTrace()` from calling `Operator::internal_run()`
  * Shell layer selection results in invalid fields
  * Invalid vector subscript error on mesh rescoping
  * HGP FieldDefinition::setDimensions is wrong

### Breaking Fixes
  * Upgrade Hdf5 test project for 1.14.5 version



# Changelog details
## Features
### <a id="source-operator-allow-to-return-all-timesfreq-fields"></a> Source operator: allow to return all times/freq fields
Add support of pin "time_scoping" with int value == -1 in source operators. When -1 is used, results for all times or frequencies will be returned.

### <a id="rescope-operator-acknowledges-only-first-duplicated-value"></a> rescope operator acknowledges only first duplicated value
feat: rescope operator acknowledges only first duplicated value

### <a id="minor-version-upgrade-for-intel-mkl-only-for-windows"></a> Minor version upgrade for intel MKL only for windows
This is a minor patch meant to address the issues observed with Windows AMD systems. So it is requested to update intel_mkl from 2024.2.0 to 2024.2.3.

### <a id="allow-dpf-to-operate-without-context"></a> Allow DPF to operate without context
When initializing DPF, you can use a Context using `userDefinedContext` and an empty xml path. In that case, DPF will not load any plugin.
## Fixes
### <a id="solve-issue-with-reordering-of-unfiltered-enfs"></a> Solve issue with reordering of unfiltered ENFs
The unfiltered ENFs should not be reordered

### <a id="print-custom-type-collections"></a> print custom type collections
The string representation of DPF collections of custom types was always incorrectly reporting them as empty.

### <a id="issue-with-node-averaged-results-with-scoping"></a> issue with node averaged results with scoping
According to Federico's Tests, the results obtained from a named selection when using averaged results with scoping was not correct.
See the comments [REDACTED] realized there was a mistake in the function GetNodesAveragedResultsForScoping in which one "i" should have been "indexRST".

I corrected that here and added a unit test which compares the stress scoped with named selection with the whole stress rescoped.

### <a id="performance-issue-on-readmeshproperties"></a> Performance issue on readMeshProperties
Fix performance issue when reading mesh properties from the RST repeatidly.

### <a id="fix-append-cyclic-support-on-eng_vol_cyclic-and-nmisc_cyclic"></a> Fix append cyclic support on ENG_VOL_cyclic and NMISC_cyclic
Fix append cyclic support on ENG_VOL_cyclic and NMISC_cyclic.

### <a id="mapdl-nodal-averaged-result-operators-return-wrong-values-when-setting-a-mesh-scoping"></a> [REDACTED] MAPDL Nodal Averaged Result operators return wrong values when setting a mesh scoping
- Bug: EPEL Nodal Averaged Results are null when provided with a scoping
- Fixed in the function GetNodesAveragedResultsForScoping by using SetEntityData to fill the resultField.
- Created new file "NodalAveragingReaderTests.cpp" for NAR Tests and added 2 unit tests.

### <a id="bug---nodal-cyclic-expansion-creates-duplicated-scoping-ids"></a> BUG [REDACTED] - Nodal cyclic expansion creates duplicated scoping ids.
Nodal fields cyclic expansion created duplicated scoping ids, this has been fixed now.

### <a id="handle-gasket-degenerated-elements"></a> [REDACTED] Handle Gasket Degenerated Elements
Handling INTER195 degenerated elements.
Make filterGasket be called from FilterElementResultsENS.
Handle combinations from keyopt8 & keyopt2 and verify that results available are expected.

Read unfiltered euler angles in CRotateElementalFCByEulerAngles (was previously reading filtered but using them as if they were not filtered)

### <a id="bug---finding-the-right-id-for-dpfelementtype"></a> BUG [REDACTED] -  Finding the right id for dpfElementType
Fix issue on reading ElementCentroidResults from RST.

### <a id="fix-rotate-enf-results"></a> Fix rotate ENF results
In the case of an Harmonic, MSUP or modal analysis, three are three sets of ENF: STATIC, DAMPING and INERTIA
These sets are stored in the following order:
{Node1: FSX, FSY, FSZ}, {Node2: FSX, FSY, FSZ}, ..., {Node1: FDX, FDY, FDZ}, {Node2: FDX, FDY, FDZ}, ...,{Node1: FIX, FIY, FIZ}, {Node2: FIX, FIY, FIZ}, ...

For these cases, if the analysis was cyclic or if the pin reorderENF was set to true a reordering was done and the number of components was set to 9.

_(The reordered ENF is in the following order:
{Node1: FSX, FSY, FSZ, FDX, FDY, FDZ, FIX, FIY, FIZ}, {Node2: FSX, FSY, FSZ, FDX, FDY, FDZ, FIX, FIY, FIZ}, ...)_

So if the analysis was Harmonic, MSUP or modal but not cyclic the number of components would be 3 but each node would have 9 values. That would later throw an error in the RotateFieldWRTEulerNodes.

In order to be able to do the rotation, we reorder the ENFs if they are not already ordered before rotating them. Them we put them back in their initial ordering state.

The number of components is now always set to 1 if we are reading unfiltered data.

### <a id="fix-reading-von-misesprincipal-stresses-from-rst-files-for-non-psd-analyses"></a> Fix reading Von Mises/Principal stresses from rst files for non-PSD analyses.
Fix reading Von Mises/Principal stresses from rst files  for non-PSD analyses when the values are found in the file.

### <a id="bug-bug"></a> BUG [REDACTED] BUG [REDACTED]
`RES_Cyclic` operators average to elemental from elemental_nodal.
Elemental `mesh_scoping` not working for cyclic energies.

### <a id="allow-to-serialize-data-in-strings-for-more-than-2-gb"></a> Allow to serialize data in strings for more than 2 Gb
"string_serializer" was limited to 2Gb strings output. A serialization mode "2" is created which allows to output several strings instead of one.

### <a id="fix-element-results-loop"></a> Fix element results loop
Modifications to solve performance issue when recovering element results.

### <a id="improve-vtu-export-for-several-field-inputs"></a> Improve VTU export for several field inputs
- "vtu_export" operator produces invalid vtu when one unnamed over time fields container and one unnamed property field are exported. This is due to name clash.
- "vtu_export" operator exports 2 files when one field, one property field and one fields container with a single time are exported. It should only export one

### <a id="improving-memory-allocation-in-operator-split_fields"></a> Improving memory allocation in operator `split_fields`
Improving memory allocation in operator `split_fields`.

### <a id="new-documentation-operator-supporting-markdown"></a> New documentation operator supporting Markdown
Fix the new html_doc operator supporting Markdown as it was not filling out the html template file correctly.

### <a id="load-library-collision-key-not-reported-when-different-library-with-same-key"></a> load library collision key not reported when different library with same key
fix: loading different plugins with same key now indicates something went wrong

### <a id="improve-no-output-pin-error-message"></a> Improve no output pin error message
When an Operator output pin is not found, the error message is improved.

### <a id="document-limitation-in-rotation-of-elemental-and-elementalnodal-results"></a> Document limitation in rotation of Elemental and ElementalNodal results
Document limitation in rotation of E and EN results (results may be incorrect)

### <a id="repair-mapdlrstmesh_property_provider"></a> Repair mapdl::rst::mesh_property_provider
Fix crash on reading distributed files through `mapdl::rst::mesh_property_provider` operator.

### <a id="allow-to-serialize-to-a-file-with-more-than-2gb"></a> Allow to serialize to a file with more than 2Gb
Fixes the "serializer" and "deserializer" operators to allow them to write files of more than 2 gB.

### <a id="fix-load-plugin-error-code"></a> Fix load plugin error code
When loading a DPF plugin, the plugin can return an error code (int). This error code wasn't taken into account.

### <a id="read-hdf5-file-without-license-check"></a> Read Hdf5 file without license check
Allow to read Hdf5 file that contains a workflow without license check

### <a id="hdf5-stream_provider-operator-doesnt-check-the-file-existence"></a> "hdf5 stream_provider operator doesn't check the file existence"
The operator stream_provider doesn't throw an error in case of an invalid file path. This fix aims to address the following [REDACTED]

### <a id="fix-any-deep-copy-to-client"></a> Fix Any deep copy to client
The HGP API `Any::deep_copy` wasn't copying on a client, neither returning an error. Copy on a client is now implemented for a local any.

### <a id="changing-datatrees-api-for-getting-attributes"></a> Changing DataTree's API for getting attributes
Changing DataTree's API for getting attributes:
* Methods `get<type>Attribute` now have an optional default value as an input parameter. If the attribute does not exist, the default value will be returned. No error will be thrown.
* New methods `tryGet<type>Attribute` are now exposed, that return a boolean indicating if the attribute exist or not.

### <a id="random-failure-on-license-checkout"></a> random failure on license checkout
Fix random crash on license checkout.

### <a id="add-missing-support-for-nodal-fields-after-solid-to-skin-operator"></a> Add missing support for nodal fields after solid-to-skin operator
Fixed: The `solid_to_skin` operator did not properly set the support for node-centered fields.

### <a id="modal_damping_ratio-operator-is-outputting-nan-when-natural-frequency-is-exactly-0"></a> "modal_damping_ratio operator is outputting NaN when Natural Frequency is exactly 0"
This fix addresses the [REDACTED]

### <a id="fixed-issue-when-2-remote-operators-are-connected-with-local-and-remote-inputs"></a> Fixed issue when 2 remote operators are connected with local and remote inputs
2 remote operators could cause a deadlock if both connected with a mix of local and remote inputs.

### <a id="infinite-loop-in-function-readenfresultblock"></a> "Infinite loop in function readENFResultBlock"
The bug is produced for the test ENFTest - SHELL93. This fix addresses the [REDACTED]

### <a id="close-windows-port-correctly-and-server-graceful-shutdown"></a> Close windows port correctly and server graceful shutdown
- Async gRPC server is now shutdown gracefully preventing random crashes
- When looking for available ports on windows, ports are correctly closed. They are now reused for next server.

### <a id="customtypefields-with-double-values-are-now-better-handling-huge-sizes"></a> CustomTypeFields with double values are now better handling huge sizes
`CustomTypeField` are not producing errors anymore when using a high number of double values.

### <a id="fix-allocation-of-mesh-bitset-out-of-range"></a> Fix allocation of mesh bitset out of range
DPF mesh stores information on element types in a bitset. This bitset was allocated to a too small size and accessed out of range (memory corruption)

### <a id="changed-license-requirement-for-operator-split_field"></a> Changed license requirement for operator split_field
Changed the license requirement for operator `split_field` from premium to public.

