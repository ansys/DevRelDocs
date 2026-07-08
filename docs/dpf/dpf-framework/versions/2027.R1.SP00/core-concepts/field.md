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

**Example data array for 2 nodes with 3-component vectors (displacement)**:
```
data = [X_node1, Y_node1, Z_node1, X_node2, Y_node2, Z_node2]
```

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

### ElementalNodal fields and element-type properties

For `ElementalNodal` fields, the size of each elementary data block
depends on the **element type** of the entity it describes. Mixed-element meshes
therefore produce **variable-size** ElementalNodal fields: each element contributes
`n_nodes_per_element × n_components × n_layers` consecutive values, with no padding
between elements.

To locate each entity's data block in the flat array without recomputing per-element
sizes, every field exposes a **`data_pointer`** array: `data_pointer[i]` is the
index in the flat `data` array where entity *i*'s elementary data begins. For
fields where every entity has the same number of components (typical `Nodal`,
`Elemental`, scalar or 3D-vector cases) the `data_pointer` is **empty** - the
simple stride `index × elementary_data_size` is sufficient. For variable-size
fields (mixed-element ElementalNodal, connectivity property fields) it is
populated and is the canonical way to slice the `data` array per entity without
walking element types upfront.

The number of rows per element (`n_nodes_per_element` for ElementalNodal, `1` for
Elemental) is derivable from the element type alone, independently of any specific
field. This information lives on the [`meshed_region`](./dpf-types.md#meshed-region),
not on the field. Two element-type properties are central to interpreting the data
layout:

- **Dimensionality** (`0D`, `1D`, `2D`, `3D` -> point, beam, shell, solid). It
  governs the geometric role of the element and which nodes carry physically
  meaningful results.
- **Second-order flag**. Second-order elements add **mid-side nodes** between the
  corner nodes. When set, the element contributes additional nodal rows to an
  ElementalNodal field for those mid-nodes (when the solver file stores values for
  them).

Dimensionality and second-order are properties of the **element type itself**; they
are not field-level concepts. The field's `location` only states *where* the data
sits (`Nodal`, `Elemental`, `ElementalNodal`); it does not encode the element
shape, order, or node count.

#### Entity ID uniqueness across element types

Element IDs used in the `scoping` of an `Elemental` or `ElementalNodal` field are
**globally unique within the `MeshedRegion`**, across all element types. A given
integer ID identifies exactly one element regardless of whether it is a tetrahedron,
hexahedron, shell, beam, or point. The same uniqueness guarantee applies to node
IDs in `Nodal` scopings. The scoping's ID list is therefore sufficient on its own to
locate each entity in the mesh - no element-type lookup is needed to disambiguate
IDs.

#### Mid-node values and `extend_to_mid_nodes`

When an ElementalNodal field is read from a solver file that produced results at
both corner and mid-side nodes, the field already contains one row per node per
element - corner and mid-node rows interleaved per element in the order declared by
the element's connectivity.

Solver files that only store corner-node values for second-order elements produce
an ElementalNodal field with corner-node rows only. To obtain a field that also
carries mid-node rows for downstream consumers that expect them, use the
[`extend_to_mid_nodes`](../operator-specifications/averaging/extend_to_mid_nodes.md)
operator (or [`extend_to_mid_nodes_fc`](../operator-specifications/averaging/extend_to_mid_nodes_fc.md)
for a fields container). It interpolates corner-node values onto the mid-side nodes,
producing a field whose elementary data sizes match the full corner + mid-node
layout.

#### Homogeneous sub-fields per shape

When downstream code needs to process the data array as a regular block - for
example reshaping it as `(n_entities, rows_per_entity * components)` - the
variable-size layout of a mixed-element ElementalNodal field becomes an obstacle.
The recommended strategy is to **split by shape**: use the
[`split_on_property_type`](../operator-specifications/scoping/split_on_property_type.md)
operator with the `elshape` property to produce one scoping per shape class
(triangles, quads, tets, hexes, ...). Re-evaluating (or rescoping) the result for
each scoping yields homogeneous-size sub-fields, one per shape, that can each be
processed as a regular block without per-element bookkeeping.

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

For shell elements (elements with thickness), the **shell_layers** property defines which layers through the thickness contain data. Results can be computed at different positions through the shell thickness.

**Shell layer options**:

| Value | Description | Use case |
|-------|-------------|----------|
| `layerindependent` | No layer information | Solid elements, nodal results |
| `bottom` | Bottom surface only | Single-sided result |
| `top` | Top surface only | Single-sided result |
| `topbottom` | Bottom and top surfaces | Standard shell stress/strain |
| `mid` | Mid-surface only | Membrane behavior |
| `topbottommid` | Bottom, top, and mid surfaces | Detailed through-thickness analysis |

The shell layers affect the data array ordering: when present, data is organized by entity → layer → component.

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

Fields provide methods to query data efficiently:

### Entity data access

**`get_entity_data(index)`**: Retrieve data by position (0-based index) in the scoping
- Use when iterating sequentially through all entities

**`get_entity_data_by_id(id)`**: Retrieve data by entity ID (actual node/element ID)
- Use when querying specific known entities

**Return shape**: The returned array is automatically shaped based on the field's component count and shell layers:
- Scalar field (1 component): `[value]`
- Vector field (3 components): `[X, Y, Z]`
- Tensor field with layers (6 components, 3 layers): `[[σx_bot, ...], [σx_top, ...], [σx_mid, ...]]`

### Bulk data access

**`field.data`**: Access the complete data array
- **Local server**: Returns a pointer to the memory (no copy, very fast)
- **Remote server**: Transfers the entire array over the network (one-time cost)

**`as_local_field()`**: Transfer field from remote server to local memory for processing
- Use when working with large fields on remote servers
- Enables efficient local processing after initial transfer

**Performance consideration**: Avoid calling entity data methods inside loops over thousands of entities. Each call is a server request. Instead, use bulk access methods and parse the data array directly.

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

## Common pitfalls

### Replacing the scoping does not resize the data buffer

Assigning a new scoping to a field updates only the metadata - it does **not** filter or
resize the underlying data array. After reassignment, the scoping length and the data
length may be inconsistent, which leads to silent incorrect results or errors when the
field is consumed by a downstream operator.

**Do not** use the scoping setter to extract a spatial subset. Instead:

- Use the `rescope` operator to produce a correctly-sized field for a chosen subset.
- Call `field.deep_copy()` to obtain an independent copy before modifying the scoping.

```python
import ansys.dpf.core as dpf

model = dpf.Model("file.rst")
result_field = model.results.displacement()[0]
my_scoping = dpf.Scoping(ids=[1, 2, 3], location=dpf.locations.nodal)

# Correct - use rescope to filter any field to a scoping
rescope_op = dpf.operators.scoping.rescope()
rescope_op.inputs.fields.connect(result_field)
rescope_op.inputs.mesh_scoping.connect(my_scoping)
filtered_field = rescope_op.outputs.fields_as_field()

# Correct - deep-copy a field before modifying its scoping
my_field = result_field.deep_copy()
```

### `coordinates_field` returns a live reference

The `MeshedRegion.nodes.coordinates_field` property (Python `nodes.coordinates_field`,
C# or IronPython MechDPF `MeshedRegion.CoordinatesField`) returns a **live reference** to the internal mesh node
coordinate array. Any modification to the returned field is reflected immediately in the
mesh, and subsequent calls return the same underlying data.

To obtain an independent snapshot that is safe to modify without affecting the mesh:

```python
# Python - deep copy
coords_copy = model.mesh.nodes.coordinates_field.deep_copy()
```

In C# or IronPython (MechDPF), call `GetHardCopy()` to obtain an independent copy:

```csharp
// C# - independent copy
Field snapshot = mesh.CoordinatesField.GetHardCopy();
```

## Related types

Fields are often used in combination with:
- [`fields_container`](./dpf-types.md#fields-container): Collection of fields indexed by labels (time, frequency, etc.)
- [`meshed_region`](./dpf-types.md#meshed-region): Support for spatial fields
- [`time_freq_support`](./dpf-types.md#time-freq-support): Support for temporal/frequency fields
- [`scoping`](./dpf-types.md#scoping): Entity selection mechanism
