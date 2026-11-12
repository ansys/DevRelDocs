# DPF 2027 R1 release notes

This page summarizes the release highlights, based on the new features in the changelog. Bug fixes and lists of new, changed, and removed operators are in the [full changelog](changelog.md).

## Client APIs

### PyDPF-Core
- The PyDPF-Core version used by DPF Python plugins advances from 0.15.1 in the previous release to 0.16.3. See the [PyDPF-Core 0.16.3 release notes](https://github.com/ansys/pydpf-core/releases/tag/v0.16.3).

### HGP C++
- `StringField::dataPointer()` exposes entity offsets; `DpfVector` iterators support random access.
- HGP debugger visualizers show field, scoping, and mesh values with readable IDs and properties.
- HGP and gRPC clients can set the `ResultInfo` main title.

### C#/MechDPF
- The C# API adds `StringField`, `GenericDataContainer`, `Any`, and operator changelog support.
- The managed client adds typed integer and double vector access, double-list workflow inputs, and `ResultInfo` title setting.

## Solver result file formats

### MAPDL results
- Read results for `PIPE288`/`PIPE289` and pipe sections, plus beta support for thermal `SURF151`/`SURF152` and structural `SURF153`/`SURF154` elements.
- New readers cover `FLUID116` flow and heat transfer, `SURF251`/`SURF252` radiation, radiation area, and radiation, convection, and contact heat flow.
- Collect complete state-variable, elemental-nodal-force, and reaction result sets; select steps for multi-RPM data and read elemental results on adaptive meshes.
- Read elemental-nodal moments and heat. Total-strain and equivalent total-strain results are assembled from available strain components when needed.
- Coordinate-system data is available from migrated RST files and live MAPDL analyses.
- Elemental-result reads can reuse previously loaded mesh data. Nodal-result requests avoid repeated solution retrieval and filtering when mesh, scoping, and time steps are reused.
- Unscoped requests for nonzero nodal Euler angles avoid scanning every node in the result file.
- The GenPassOperators cache reuses mode shapes when a request selects a subset of entities.

### LSDYNA results
- Read discrete-element-method results from `d3plot` and stress from the `binout` `elout` branch.
- Read the `binout` `ssstat` branch; `nodout` operators accept mesh-scoping inputs.
- LSDYNA fields containers receive result names, and d3plot titles propagate to result information.

## Framework
- DPF version reporting uses Ansys calendar versioning and exposes full-version endpoints.
- Scoping iterators support random access for standard C++ algorithms.
- `CScoping::indexById` and `hasEntity` perform large-scoping lookups more efficiently; scoping hashes and index tables are reused where possible.
- Thermal compliance is available as a field homogeneity with corresponding units.
- Composite data sources support cyclic expansion for plastic and thermal strain, accumulated equivalent plastic strain, and element orientations.
- The framework adds a dedicated `matrix_product` operator.
- Distributed mesh and merge-mesh operations reuse named-selection metadata across domains, reducing repeated preparation.

## Other plugins

### HDF5
- H5DPF supports an append mode that writes only time-frequency support, optional live monitoring of newly written time steps, and replacing fields in an existing fields container.
- H5DPF links duplicate DataTrees and avoids retaining large result objects in read caches.
- Scoped-result reads across multiple time steps are faster; nearby data slices are grouped to reduce repeated file reads and decompression.
- Reads can remap preprocessed results to a new data layout. Composite result reads reuse scoping preparation and transposed operations, applying requested scoping before reading.
- H5DPF migration avoids repeatedly hashing shared stored objects.

### Math
- `optimizeWorkflow` minimizes, maximizes, or targets an objective with integer or double inputs.
- `expansion::psd` computes response PSD from modal PSD inputs or harmonic results; modal-superposition expansion accepts custom-type containers and computes modal loads from external loads.
- Repeated evaluations of the same optimizer variable values reuse cached objective costs.

### Mesh
- `wireframe` supports shell and beam elements with optional element restriction. `edge_decimation` reduces wireframe nodes and edges using an angular threshold.
- `split_mesh`, `meshes::by_scopings`, and `mesh::by_scoping` perform better when property fields and the mesh have different scopings.

### VTK
- `mesh_to_pyvista` converts DPF meshed regions to VTK-native formats up to 60% faster.

### Compression
- `apply_svd` accepts a double-valued truncation input.

### Native
- Concatenation operators can be configured to ignore empty fields.
- `rescope_fc` enables parallel execution by default when rescoping a fields container.

### FEMUtils
- `modal_damping_ratio` accepts a field or time-frequency support as input.
- `from_scoping` is available at the entry licensing tier.
- `nodal_extend_to_mid_nodes` reduces repeated lookup work when tracking midside nodes.
- `solid_to_skin` performs better for Elemental and ElementalNodal fields. The `Rescope`, `Rescope_pf`, `Rescope_ctf`, and `solid_to_skin_fc` operators also have performance improvements.

## Documentation
- Component and principal-result descriptions clarify that results default to nodal averaging when no target location is specified.
- `html_doc` renders inline dollar-delimited LaTeX and documents supported heading levels for operator and pin descriptions.
