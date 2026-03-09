# Field fundamentals

The Field is DPF's fundamental simulation data container. It is a data structure that associates numerical values with entities in a discretized region, along with metadata that makes the data self-describing. Every field contains interconnected components that define what the data represents, where it applies, how it is measured, and how it is structured.

## Field architecture

A field is composed of the following components:

- **Data array**: Holds the actual numerical values
- **Scoping**: Defines which entities have data
- **Support**: Provides the mesh and time/frequency context
- **Unit**: Specifies the measurement system for the values
- **Field definition**: Stores dimensionality information for interpreting the data array

### Data array

The **data** is a flat one-dimensional array of numerical values (stored as double-precision floats). This array contains all the values in the field, organized in a specific ordering structure determined by the field's location and shell layer properties.

The data array ordering follows a nested loop structure from coarse to fine:

1. **Entity** (outermost loop): Iterate through each entity in the scoping
2. **Node** (for ElementalNodal location only): Iterate through nodes of each element
3. **Layer** (for shell elements): Iterate through shell layers (bottom, top, mid)
4. **Component** (innermost loop): Iterate through vector/tensor components

**Example — 2 nodes, 3-component vector (displacement, no shell layers)**:
```
data = [X_node1, Y_node1, Z_node1, X_node2, Y_node2, Z_node2]
```

**Example — 1 shell element, 6-component stress tensor, `topbottom` layers**:
```
data = [
    # Element 1 – bottom layer
    σx_bot, σy_bot, σz_bot, τxy_bot, τyz_bot, τxz_bot,
    # Element 1 – top layer
    σx_top, σy_top, σz_top, τxy_top, τyz_top, τxz_top
]
```
Total length: 1 element × 2 layers × 6 components = 12 values.

**Example — 1 shell element (4 nodes), `ElementalNodal` stress, `topbottom` layers**:
```
data = [
    # Element 1, Node 1
    σx_n1_bot, σy_n1_bot, σz_n1_bot, τxy_n1_bot, τyz_n1_bot, τxz_n1_bot,  # bottom
    σx_n1_top, σy_n1_top, σz_n1_top, τxy_n1_top, τyz_n1_top, τxz_n1_top,  # top
    # Element 1, Node 2
    σx_n2_bot, ..., τxz_n2_bot,
    σx_n2_top, ..., τxz_n2_top,
    # … Node 3, Node 4 (same pattern)
]
```
Total length: 1 element × 4 nodes × 2 layers × 6 components = 48 values.

### Elementary data

**Elementary data** is the set of values associated with a single entity. It represents the complete data for one node, one element, or one time step.

The size of elementary data depends on the field's location:
- **Nodal or Elemental**: components × layers
- **ElementalNodal**: nodes per element × components × layers

**Structure by dimensionality**:
- **Scalar**: 1 value per entity (e.g., temperature: `[21.5]`)
- **Vector**: 3 values per entity (e.g., displacement: `[2.5, -1.2, 0.8]`)
- **Tensor**: 6 or 9 values per entity (e.g., stress: `[σx, σy, σz, τxy, τyz, τxz]`)
- **ElementalNodal**: All nodal values for the element (e.g., 4-node element with 3 components: 12 values)

### Unit

The **unit** defines the measurement system for all values in the field. All data in a field shares the same unit.

**Common units**: `m` (meters), `Pa` (Pascals), `°C` (Celsius), `s` (seconds), `kg` (kilograms)

### Location

The **location** specifies what kind of entities the field's data is associated with within the support.

**Standard locations**:

| Location | Description | Typical use |
|----------|-------------|-------------|
| `Nodal` | Data at mesh nodes (vertices) | Displacement, temperature |
| `Elemental` | Data at mesh element centers | Element volumes, material IDs |
| `ElementalNodal` | Data at each node of each element | Stress, strain (extrapolated to nodes) |
| `TimeFreq` | Data at time steps or frequencies | Global quantities over time |
| `Overall` | Data for the entire model (single value) | Total mass, global energy |

### Scoping

The **scoping** of the field defines which specific entities have data in the field by listing their IDs. It acts as an index mapping between the data array position and the actual entity identifiers.

**Structure**: An ordered list of entity IDs (e.g., `[10, 25, 100, 533]` for node IDs)

**Key properties**:
- **Length**: Number of entities with data (`scoping.size`)
- **IDs**: The actual entity identifiers from the mesh/support (potentially non-sequential)
- **Index mapping**: Position in the scoping (0-based) vs. entity ID (1-based or non-sequential)

**Why scoping is essential**: It allows fields to store data for subsets of a model rather than requiring data for all entities. For example, a boundary condition field might only contain data for nodes on a specific surface.

### Support

The **support** defines the region where the field's data applies. It provides the spatial, temporal, or structural context for interpreting the entities.

**Support types**:

| Support type | Purpose | Example |
|-------------|---------|---------|
| `MeshedRegion` | Physical space (3D geometry) | Finite element mesh |
| `TimeFreqSupport` | Temporal/frequency domain | Time steps 0s to 10s |
| `CyclicSupport` | Cyclic symmetry structures | Turbine with repeated sectors |

The support is referenced by the field but not owned by it - multiple fields can share the same support.

### Field definition

The **field definition** aggregates metadata properties about the field: its dimensionality (number of components), unit, location, and shell layer configuration. It is accessed as a single object containing these interconnected properties.

### Shell layers

Shell elements model thin-walled structures (plates, sheet metal, composite panels) by collapsing physical thickness into a 2D surface mesh. Because stresses and strains vary through the thickness, results can be stored at several positions — called **layers** — through the wall. The `shell_layers` property on a field records which of those positions are present.

**Shell layer options**:

| Value | Description | Use case |
|-------|-------------|----------|
| `layerindependent` | No layer information | Solid elements, or results that do not vary through thickness (e.g. displacement) |
| `bottom` | Bottom surface only | Single-sided result |
| `top` | Top surface only | Single-sided result |
| `topbottom` | Bottom and top surfaces | Standard shell stress/strain |
| `mid` | Mid-surface only | Membrane behaviour |
| `topbottommid` | Bottom, top, and mid surfaces | Detailed through-thickness analysis |

#### Effect on the data array

When layers are present, the flat data array gains an extra nesting level. The ordering rules are:

- **Nodal / Elemental location**: `entity → layer → component`
- **ElementalNodal location**: `entity (element) → node → layer → component`

For a field with `layerindependent` (or for solid-element results), the layer loop collapses to a single pass, so the ordering reduces to the standard `entity → component` (or `entity → node → component` for ElementalNodal).

**Elementary data size**:
- Nodal / Elemental with layers: `components × number_of_layers`
- ElementalNodal with layers: `nodes_per_element × components × number_of_layers`

#### Return shape from entity-level access

When layers are present, `get_entity_data()` and `get_entity_data_by_id()` return a **2D array** shaped `(number_of_layers, components)` rather than a 1D array. The layer order in the returned array matches the order declared by `shell_layers` (typically bottom → top → mid for `topbottommid`).

**Example — 6-component stress tensor, `topbottommid` layers, entity ID 100**:
```
# Returned shape: (3, 6)
[
  [σx_bot, σy_bot, σz_bot, τxy_bot, τyz_bot, τxz_bot],   # row 0: bottom
  [σx_top, σy_top, σz_top, τxy_top, τyz_top, τxz_top],   # row 1: top
  [σx_mid, σy_mid, σz_mid, τxy_mid, τyz_mid, τxz_mid]    # row 2: mid
]
```

For a scalar field (`layerindependent`), the return is always a 1D array with a single value `[value]`, unchanged from the no-layer case.

### Name

The **name** is an optional text identifier for the field, used for documentation and debugging purposes. Examples: `"displacement"`, `"stress_von_mises"`, `"temperature_field"`.

## Field variants

While the standard Field stores double-precision floating-point data, DPF provides specialized field types for different data types:

### PropertyField

Stores **integer values** instead of doubles. Used for:
- Material IDs or element type IDs
- Boolean flags (represented as 0/1)
- Element or node property indices
- Mesh connectivity information

### StringField

Stores **text values**. Used for:
- Material names or labels
- Result descriptions
- Custom annotations

### CustomTypeField

Stores **custom data types** beyond standard primitives. Used for:
- Complex numbers (electromagnetic analysis)
- Custom types defined by specialized plugins
- Any data type compatible with `numpy.dtype`

All field variants follow the same organizational structure (data, scoping, support, location) but differ in the data type stored in the data array.

## Data access patterns

How you read field data efficiently depends on two factors: what scope of data you need (a handful of entities vs. the whole field) and where the DPF server is running relative to your client code.

### Entity-by-entity access

Two methods let you query data for a single entity at a time:

**`get_entity_data(index)`**: Retrieve data by position (0-based index) in the scoping.
- The *index* is the ordinal position in the scoping list, not the entity ID.
- Use when iterating sequentially through all entities — though see the loop warning below.

**`get_entity_data_by_id(id)`**: Retrieve data by entity ID (the actual node or element ID from the mesh).
- The *id* is the entity identifier from the support (1-based, potentially non-sequential).
- Use when you need data for a small set of known entities.

**Index vs. ID**: Because scoping IDs are not necessarily sequential (e.g., scoping `[10, 25, 100]` has index 0 → ID 10, index 1 → ID 25), the two methods serve distinct needs. Conversions are available through the scoping object (`scoping.id(index)` and `scoping.index(id)`).

**Return shape**: The returned array is automatically shaped based on the field's component count and shell layers:
- Scalar field (1 component): `[value]`
- Vector field (3 components): `[X, Y, Z]`
- Tensor field with layers (6 components, 3 layers): `[[σx_bot, ...], [σx_top, ...], [σx_mid, ...]]`

**Loop anti-pattern**: Do not call entity-by-entity methods inside a loop over many entities. Each call is a round-trip to the DPF server. With thousands of entities this becomes prohibitively slow, regardless of whether the server is local or remote. Use bulk access instead (see below).

### Bulk data access

**`field.data`**: Returns the complete flat data array.
- On a **local server**, this returns a direct pointer to server memory — no data is copied, making it the fastest option for any field size.
- On a **remote server**, this transfers the entire array over the network in a single operation.

**`as_local_field()`**: Downloads the field from a remote server into local memory and wraps it in a context manager. All subsequent `get_entity_data()` calls within the context block operate on the local copy (local array indexing, no further network traffic). This approach also ensures proper resource cleanup when the context exits.

### Choosing the right approach

The table below summarises which pattern to use based on server topology and field size:

| Scenario | Recommended approach | Rationale |
|----------|----------------------|-----------|
| Local server, any field size | `field.data` + manual index arithmetic | Direct memory pointer, zero copy overhead |
| Remote server, small-to-medium field | `field.data` or `as_local_field()` | Single network transfer, then local operations |
| Remote server, large field (> ~100 MB) | `as_local_field()` | Controlled download with explicit cleanup |
| Remote server, very large field (> ~1 GB) | Filter server-side first, then download the subset | Avoids transferring data that will not be used |
| Only a few specific entities needed | `get_entity_data()` or `get_entity_data_by_id()` | Sufficient for small query counts; avoid in tight loops |

### Filtering server-side before downloading

When only a subset of entities is needed from a large field on a remote server, the most efficient pattern is to reduce the data on the server first — before any network transfer occurs. Two common mechanisms are:

- **Mesh scoping**: Provide a scoping to the result operator (or to a rescope operator) so that only data for the relevant nodes or elements is evaluated and returned.
- **Time/frequency scoping**: Request only the time sets or frequencies you need rather than all sets.

This server-side filtering can reduce a gigabyte-scale transfer to a megabyte-scale one, after which the normal `field.data` or `as_local_field()` patterns apply to the smaller result.

## Properties summary

Key field properties for introspection:

| Property | Description | Type |
|----------|-------------|------|
| `location` | Type of entities (Nodal, Elemental, etc.) | `str` |
| `component_count` | Number of components per elementary data | `int` |
| `elementary_data_count` | Number of elementary data (entities) | `int` |
| `size` | Total data array length (entities × layers × components) | `int` |
| `scoping` | Entity IDs with data | [`scoping`](./dpf-types.md#scoping) |
| `unit` | Measurement unit | `str` |
| `shell_layers` | Shell layer configuration | `enum` |
| `field_definition` | Aggregated metadata | [`field_definition`](./dpf-types.md#field-definition) |
| `data` | Raw data array | `array of double` |

## Related types

Fields are often used in combination with:
- [`fields_container`](./dpf-types.md#fields-container): Collection of fields indexed by labels (time, frequency, etc.)
- [`meshed_region`](./dpf-types.md#meshed-region): Support for spatial fields
- [`time_freq_support`](./dpf-types.md#time-freq-support): Support for temporal/frequency fields
- [`scoping`](./dpf-types.md#scoping): Entity selection mechanism
