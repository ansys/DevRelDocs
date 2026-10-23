# What's new in DPF 2027 R1

## Broader result access
- Read nodal reaction moments and reaction heat with `reaction_moment` and `reaction_heat`.
- Access FLUID116 flow and heat-transfer results and SURF251/SURF252 radiation results through operators including `average_velocity`, `flow_rate`, `emissivity`, and `net_radiation_heat_flux`. `radiation_area` reads elemental radiation areas for SURF251 and SURF252.
- Compute response power spectral density (PSD) with `expansion::psd`, using mode shapes and modal PSD matrices or harmonic analysis results and an input PSD matrix.

## Larger and evolving datasets
- Optional live-monitoring mode makes newly written time steps available to subsequent HDF5 reads. H5DPF output supports replacing existing fields in fields containers, including when fields are added or removed.
- Composite data sources now read and merge mesh partitions incrementally by default, improving memory use during loading. Scoped H5DPF reads reduce repeated file access and decompression.

## Client and mesh workflows
- C# exposes `StringField` and `GenericDataContainer`, connects and retrieves supported values through `Any`, and adds typed integer and double vector outputs.
- `wireframe` supports shell and beam elements and optional element restrictions. The `edge_decimation` operator reduces mesh nodes and edges using an angular threshold.

## Behavior notes
- `serializer` now defaults to binary (`stream_type=1`) instead of ASCII (`0`). The `stream_type` input on `deserializer` is optional.
- `nmisc` and `smisc` accept scalar or vector `item_index` values for component selection; `num_components` is removed.
- The `split_force_components` input on `element_nodal_forces` is deprecated. Use `element_nodal_moments`, `element_nodal_heat`, and component selection instead.
