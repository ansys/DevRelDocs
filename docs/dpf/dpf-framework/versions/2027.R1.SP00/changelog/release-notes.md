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

### LSDYNA results
- Read discrete-element-method results from `d3plot` and stress from the `binout` `elout` branch.
- Read the `binout` `ssstat` branch; `nodout` operators accept mesh-scoping inputs.
- LSDYNA fields containers receive result names, and d3plot titles propagate to result information.

### CFF and CFX results
No new CFF/CFX result-reading feature is highlighted in this summary.

## Framework
- DPF version reporting uses Ansys calendar versioning and exposes full-version endpoints.
- Scoping iterators support random access for standard C++ algorithms.
- Thermal compliance is available as a field homogeneity with corresponding units.
- Composite data sources support cyclic expansion for plastic and thermal strain, accumulated equivalent plastic strain, and element orientations.
- The framework adds a dedicated `matrix_product` operator.

## Other plugins

### HDF5
- H5DPF supports an append mode that writes only time-frequency support, optional live monitoring of newly written time steps, and replacing fields in an existing fields container.
- H5DPF links duplicate DataTrees and avoids retaining large result objects in read caches.

### Math
- `optimizeWorkflow` minimizes, maximizes, or targets an objective with integer or double inputs.
- `expansion::psd` computes response PSD from modal PSD inputs or harmonic results; modal-superposition expansion accepts custom-type containers and computes modal loads from external loads.

### Mesh
- `wireframe` supports shell and beam elements with optional element restriction. `edge_decimation` reduces wireframe nodes and edges using an angular threshold.

### Compression
- `apply_svd` accepts a double-valued truncation input.

### Native
- Concatenation operators can be configured to ignore empty fields.

### FEMUtils
- `modal_damping_ratio` accepts a field or time-frequency support as input.
- `from_scoping` is available at the entry licensing tier.

## Documentation
- Component and principal-result descriptions clarify that results default to nodal averaging when no target location is specified.
- `html_doc` renders inline dollar-delimited LaTeX and documents supported heading levels for operator and pin descriptions.
