# How is data represented in DPF

Before exploring where data comes from and how to process it, you need to understand how DPF organizes it internally. DPF uses specific structures to store data and associate it with the domain it describes, making the data self-describing and efficient to manipulate.

## Understanding fields: The core data structure

### What is a field

A **Field** is a container that associates numerical data with entities (points, nodes, elements) in a discretized region. Think of it as a structured way to store values that vary across space, time, or other dimensions.

**Why fields matter**: Fields make data self-describing. Instead of just having an array of numbers, you have data that knows what it represents, where it applies, and how it's measured.

**Real-world analogy**: Imagine a temperature sensor network. A simple array `[20.5, 21.3, 19.8]` is just numbers. A field adds context: "These are temperatures in Celsius, measured at sensor IDs 1, 5, and 9, located at specific coordinates in the room."

### Field components explained

Every field contains several interconnected pieces of information:

#### Data: The raw values

The **data** in a field is a flat array of numerical values. This is the actual information you want to work with (temperatures, displacements, stresses, etc.).

```python
# Example data array (conceptual)
data = [2.5, -1.2, 0.8, 3.1, -0.9, 1.2, 1.8, -1.5, 0.5]  # 3 vectors with X, Y, Z components
```

#### Unit: The measurement system

Every field has a **unit** that defines how values are measured. All values in a field share the same unit.

**Examples**:
- Displacement: `m` (meters)
- Temperature: `°C` or `K`
- Stress: `Pa` (Pascals)
- Time: `s` (seconds)

#### Elementary data: Data per entity

**Elementary data** is the set of values associated with a single entity (one node, one element, one time step).

**Structure**:
- **Scalar**: 1 value per entity (e.g., temperature: `[21.5]`)
- **Vector**: 3 values per entity (e.g., displacement: `[2.5, -1.2, 0.8]`)
- **Matrix/Tensor**: 6 or 9 values per entity (e.g., stress tensor: `[σx, σy, σz, τxy, τyz, τxz]`)

The individual values within elementary data are called **components** (X, Y, Z for vectors; tensor components for matrices).

#### Support: The region of definition

The **support** defines the region where the field's data applies. It provides the context for understanding what the entities represent.

**Types of support**:

| Support type | What it represents | Example |
|-------------|-------------------|---------|
| **Meshed Region** | Physical space (3D geometry) | A finite element mesh of a car body |
| **Time Frequency Support** | Time steps or frequencies | Analysis time from 0s to 10s in 0.1s steps |
| **Cyclic Support** | Symmetric/cyclic structures | Turbine blade with 24 sectors |

#### Location: Type of entities

The **location** specifies what kind of entities the data is associated with within the support.

**Common locations**:
- `Nodal`: Data at mesh nodes (vertices)
- `Elemental`: Data at mesh elements
- `ElementalNodal`: Data at mesh elements, for each node of the element (e.g., stress)
- `TimeFreq`: Data at time steps or frequencies

#### Scoping: Which entities

The **scoping** defines which specific entities (by ID) have data in the field. It acts as an index into the support.

**Example**: If a mesh has 1000 nodes but you only computed displacement for nodes 10, 25, 100, and 500, the scoping contains `[10, 25, 100, 500]`.

**Why scoping matters**: It allows fields to store data for subsets of a model (e.g., only boundary nodes, only elements in a specific part).

In Python, a scoping is a `dpf.Scoping` object. You can create one independently of a field:

```python
import ansys.dpf.core as dpf

# Select specific nodes from a mesh
my_scoping = dpf.Scoping(ids=[10, 25, 100, 500], location=dpf.locations.nodal)
print(my_scoping.ids)       # [10, 25, 100, 500]
print(my_scoping.location)  # Nodal
```

When you access `field.scoping`, you are working with a `Scoping` object that is embedded in the field.
You can also create standalone `Scoping` objects to pass to operators or to group into a `ScopingsContainer`
(covered in the Collections section below).

#### Name: Optional identifier

The **name** is an optional text identifier you can assign to a field for documentation and debugging purposes.

**Example**: `"temperature_field"`, `"stress_von_mises"`, `"displacement_x"`

**Why names help**: When working with multiple fields in a workflow, names make it easier to identify which field contains what data.

### How these pieces work together

Here's a concrete example: Displacement field for 3 nodes of a mesh:

```
Field: Displacement
├── Data: [2.5, -1.2, 0.8, 3.1, -0.9, 1.2, 1.8, -1.5, 0.5]  (9 values)
├── Unit: "m" (meters)
├── Support: Meshed Region (the mesh geometry)
├── Location: "Nodal" (data at nodes)
├── Scoping: [10, 25, 100]  (node IDs)
├── Name: "displacement" (optional)
└── Elementary data structure: 3 components per entity (X, Y, Z)
```

**Interpretation**:
- Node ID 10: displacement = `[2.5, -1.2, 0.8]` m
- Node ID 25: displacement = `[3.1, -0.9, 1.2]` m
- Node ID 100: displacement = `[1.8, -1.5, 0.5]` m

### Understanding data array ordering

The data array in a field follows a specific ordering structure from coarse to fine. Understanding this ordering is critical for correctly interpreting and manipulating field data.

#### Basic ordering: Entity, layer, component

For most fields, the data array is organized as:

1. **Entity** (outermost loop): Loop through each entity in the scoping
2. **Layer** (middle loop, if applicable): Loop through shell layers for shell elements
3. **Component** (innermost loop): Loop through components (X, Y, Z for vectors)

**Example without layers** (Nodal vector field with 2 nodes):
```python
# Scoping: [10, 25]
# Components: 3 (X, Y, Z)
data = [X10, Y10, Z10, X25, Y25, Z25]
```

**Example with layers** (shell element stress with 1 element, 3 layers):
```python
# Scoping: [1]  (element ID)
# Layers: bottom, top, mid
# Components: 6 (stress tensor components)
data = [σx_bot, σy_bot, σz_bot, τxy_bot, τyz_bot, τxz_bot,  # Bottom layer
        σx_top, σy_top, σz_top, τxy_top, τyz_top, τxz_top,  # Top layer
        σx_mid, σy_mid, σz_mid, τxy_mid, τyz_mid, τxz_mid]  # Mid layer
```

#### Shell layers property

The `shell_layers` property defines which layers are present in shell element data. Shell elements have thickness, and results can be computed at different layers through the thickness.

**Available shell layer values**:
- `layerindependent`: No layer information (solid elements, or layer-independent data like displacement)
- `bottom`: Data at bottom surface only
- `top`: Data at top surface only
- `topbottom`: Data at both bottom and top surfaces
- `mid`: Data at mid-surface only
- `topbottommid`: Data at bottom, top, and mid surfaces
- `nonelayer`: No shell layer data

**Example**: Accessing shell layers property:
```python
import ansys.dpf.core as dpf

# Load model and get stress field
model = dpf.Model("shell_model.rst")
stress = model.results.stress.eval()[0]

# Check shell layers
print(f"Shell layers: {stress.shell_layers}")
# Output: shell_layers.topbottommid

# This means data is ordered: entity → bottom/top/mid → components
```

#### ElementalNodal ordering: Entity, node, layer, component

For `ElementalNodal` location, an additional loop is added because data exists for each node within each element. The ordering becomes:

1. **Entity** (outermost): Loop through each element in the scoping
2. **Node** (second loop): Loop through nodes of that element based on its connectivity table
3. **Layer** (third loop, if applicable): Loop through shell layers
4. **Component** (innermost): Loop through components

**Example** (ElementalNodal stress, 1 shell element with 4 nodes, topbottom layers, 6 components):
```python
# Scoping: [100]  (element ID)
# Nodes per element: 4
# Layers: bottom, top
# Components: 6 (stress tensor)

data = [
    # Element 100, Node 1
    σx_n1_bot, σy_n1_bot, σz_n1_bot, τxy_n1_bot, τyz_n1_bot, τxz_n1_bot,  # Bottom
    σx_n1_top, σy_n1_top, σz_n1_top, τxy_n1_top, τyz_n1_top, τxz_n1_top,  # Top
    # Element 100, Node 2
    σx_n2_bot, σy_n2_bot, σz_n2_bot, τxy_n2_bot, τyz_n2_bot, τxz_n2_bot,  # Bottom
    σx_n2_top, σy_n2_top, σz_n2_top, τxy_n2_top, τyz_n2_top, τxz_n2_top,  # Top
    # Element 100, Node 3
    σx_n3_bot, σy_n3_bot, σz_n3_bot, τxy_n3_bot, τyz_n3_bot, τxz_n3_bot,  # Bottom
    σx_n3_top, σy_n3_top, σz_n3_top, τxy_n3_top, τyz_n3_top, τxz_n3_top,  # Top
    # Element 100, Node 4
    σx_n4_bot, σy_n4_bot, σz_n4_bot, τxy_n4_bot, τyz_n4_bot, τxz_n4_bot,  # Bottom
    σx_n4_top, σy_n4_top, σz_n4_top, τxy_n4_top, τyz_n4_top, τxz_n4_top   # Top
]
# Total: 1 element × 4 nodes × 2 layers × 6 components = 48 values
```

#### Quick reference: Data ordering by location

| Location | Ordering structure |
|----------|-------------------|
| **Nodal** | Entity → Layer (if shell) → Component |
| **Elemental** | Entity → Layer (if shell) → Component |
| **ElementalNodal** | Entity (element) → Node → Layer (if shell) → Component |
| **TimeFreq** | Entity (time/freq) → Component |

**Key takeaway**: The data array is always flat (1D), but organized in nested loops. The `location` and `shell_layers` properties tell you how to interpret the nesting structure.

### Accessing field data

While understanding data array ordering is important, you rarely need to parse the flat array manually. DPF provides convenient methods to query specific values directly.

#### Getting data for a single entity

Two methods let you access data for individual entities:

**`get_entity_data(index)`**: Get data by position in the scoping (0-based index)
```python
# Get data for the entity at position 0 in the scoping
data = field.get_entity_data(index=0)
```

**`get_entity_data_by_id(id)`**: Get data by entity ID (the actual node/element ID)
```python
# Get data for node ID 533 (regardless of its position)
data = field.get_entity_data_by_id(id=533)
```

**When to use which**:
- Use `get_entity_data(index)` when looping through all entities sequentially
- Use `get_entity_data_by_id(id)` when you know the specific entity ID you want

**Important**: Scoping IDs are not necessarily sequential. Entity ID 533 might be at index 2 in the field.

#### Understanding index vs. ID

The **index** is the position in the scoping array (0-based). The **ID** is the actual entity identifier from the mesh (1-based, potentially non-sequential, such as the node ID or element ID).

```python
from ansys.dpf.core import Model, examples

# Load model and get displacement field
model = Model(examples.find_simple_bar())
displacement = model.results.displacement.eval()[0]

# Get data by index (position 3 in the field)
data_by_index = displacement.get_entity_data(index=3)
print(f"Data at index 3: {data_by_index}")

# Get data by ID (node ID 533)
data_by_id = displacement.get_entity_data_by_id(id=533)
print(f"Data for node 533: {data_by_id}")

# Convert between index and ID
node_id = displacement.scoping.id(index=3)  # What ID is at index 3?
index = displacement.scoping.index(id=533)  # What index is ID 533 at?
print(f"Node ID at index 3: {node_id}")
print(f"Index of node 533: {index}")
```

**Expected output**:
```
Data at index 3: [0. 0. 0.]
Data for node 533: [5.982e-06 -1.196e-23 2.394e-05]
Node ID at index 3: 4
Index of node 533: 2
```

**What this shows**: Index 3 corresponds to node ID 4, and node ID 533 is at index 2. The methods handle this mapping automatically.

#### Return shape for entity data

The returned data is automatically shaped based on the number of components and layers:

**Scalar field** (1 component, no layers):
```python
# Temperature field
data = temperature_field.get_entity_data_by_id(10)
# Returns: [21.5]  (1D array with 1 value)
```

**Vector field** (3 components, no layers):
```python
# Displacement field
data = displacement_field.get_entity_data_by_id(10)
# Returns: [2.5, -1.2, 0.8]  (1D array with 3 values: X, Y, Z)
```

**Tensor field with layers** (6 components, 3 layers):
```python
# Stress field with topbottommid layers
data = stress_field.get_entity_data_by_id(100)
# Returns 2D array shape (3, 6):
# [[σx_bot, σy_bot, σz_bot, τxy_bot, τyz_bot, τxz_bot],   # Bottom layer
#  [σx_top, σy_top, σz_top, τxy_top, τyz_top, τxz_top],   # Top layer
#  [σx_mid, σy_mid, σz_mid, τxy_mid, τyz_mid, τxz_mid]]   # Mid layer
```

The reshaping happens automatically based on `field.component_count` and `field.shell_layers`.

#### Accessing specific components

You can extract specific components directly from the data array:

```python
# Get displacement field
disp_field = model.results.displacement.eval()[0]

# Get all data for node 10
data = disp_field.get_entity_data_by_id(id=10)  # Returns [X, Y, Z]

# Access individual components
x_displacement = data[0]
y_displacement = data[1]
z_displacement = data[2]

print(f"Node 10: X={x_displacement}, Y={y_displacement}, Z={z_displacement}")
```

#### Efficient data access for loops

**Warning**: Do NOT call `get_entity_data()` or `get_entity_data_by_id()` inside loops over many entities. Each call is a request to the DPF server, which becomes prohibitively slow with thousands of requests.

**Inefficient** (thousands of server requests):
```python
# Slow regardless of server type
for i in range(len(field.scoping)):
    data = field.get_entity_data(i)  # Request each time!
    process(data)
```

The best approach for looping depends on whether your DPF server is local or remote, and the size of your data.

#### Choosing the right approach

**Server connection types**:
- **Local server**: DPF server runs on your machine. `field.data` accesses memory directly (pointer), very fast.
- **Remote server**: DPF server runs on another machine. `field.data` transfers the entire array over the network.

**Recommended approaches by scenario**:

| Scenario | Best approach | Why |
|----------|--------------|-----|
| **Local server, any size** | `field.data` + manual loop | Direct memory access (pointer), no copy overhead |
| **Remote server, small field (<100 MB)** | `field.data` or `as_local_field()` | Single network transfer is acceptable |
| **Remote server, large field (>100 MB)** | `as_local_field()` | Better memory management and cleanup |
| **Remote server, very large field (>1 GB)** | Filter with operators first, then process subset | Avoid transferring GB over network |
| **Need only a few entities** | `get_entity_data()` or `get_entity_data_by_id()` | Efficient for small number of queries |

#### Example: Local server (direct memory access)

```python
# Efficient for local server: Direct pointer to memory
all_data = field.data  # No data copy, just memory pointer
scoping_ids = field.scoping.ids
n_components = field.component_count

for i, entity_id in enumerate(scoping_ids):
    start_idx = i * n_components
    end_idx = start_idx + n_components
    entity_data = all_data[start_idx:end_idx]
    # process entity_data
```

**Why this works for local server**: `field.data` returns a pointer to the DPF server's memory. No data is copied, making it extremely fast regardless of field size.

#### Example: Remote server with manageable field size

```python
# Good for remote server with small-to-medium fields
with field.as_local_field() as local_field:
    for i in range(len(local_field.scoping)):
        data = local_field.get_entity_data(i)  # Local array indexing
        # process data
```

**Why this works for remote server**: Downloads the field once over the network, then all `get_entity_data()` calls are local array operations. The context manager ensures proper cleanup.

**Alternative (equivalent performance)**:
```python
# Also good for remote server with small-to-medium fields
all_data = field.data  # Single network transfer
scoping_ids = field.scoping.ids
n_components = field.component_count

for i, entity_id in enumerate(scoping_ids):
    start_idx = i * n_components
    end_idx = start_idx + n_components
    entity_data = all_data[start_idx:end_idx]
    # process entity_data
```

#### Example: Remote server with very large field (filter first)

```python
# Best for large fields on remote server: Filter server-side before downloading
from ansys.dpf.core import operators as ops

# Create scoping with only the entities you need
my_scoping = dpf.Scoping(ids=[10, 25, 100, 533], location=dpf.locations.nodal)

# Use rescope operator to extract subset on the SERVER
rescope_op = ops.scoping.rescope(fields_container=displacement, mesh_scoping=my_scoping)
small_field = rescope_op.outputs.fields_container()[0]

# Now download and process the smaller field
with small_field.as_local_field() as local_field:
    for i in range(len(local_field.scoping)):
        data = local_field.get_entity_data(i)
        # process data
```

**Why this works**: The filtering happens on the DPF server. Only the subset is transferred over the network, potentially reducing GB to MB.

**Other server-side filtering examples**:
- Time steps: Use time scoping to extract specific time sets before downloading
- Mesh regions: Extract named selections or element/node sets on the server
- Result types: Get only the components you need (e.g., only X displacement, not full vector)

#### Quick reference: Data access methods

| Method | When to use | Local server performance | Remote server performance |
|--------|-------------|-------------------------|--------------------------|
| `field.get_entity_data(index)` | Query a few specific entities | Fast (pointer access) | Slow (network request per call) |
| `field.get_entity_data_by_id(id)` | Query a few entities by ID | Fast (pointer access) | Slow (network request per call) |
| `field.data` + manual loop | Local server with any size field | **Excellent** (direct memory) | **Good** for small fields, slow for large (transfers all data) |
| `field.as_local_field()` + loop | Remote server with small-medium fields | Good | **Good** (one transfer, better cleanup) |
| Operators + filter → download | Large fields on remote server | N/A | **Excellent** (only transfer needed data) |
| `field.scoping.index(id)` | Convert entity ID to index | Fast | Fast |
| `field.scoping.id(index)` | Convert index to entity ID | Fast | Fast |

**Key takeaway**: For local servers, `field.data` is extremely efficient (direct memory access). For remote servers, consider field size: use `as_local_field()` or `field.data` for small-to-medium fields, but filter with operators first for very large fields to minimize network transfer.

### Types of fields by data type

DPF provides different field types for different data:

| Field type | Data stored | Use case |
|-----------|-------------|----------|
| **Field** | Double-precision floats | Most simulation results (displacement, stress, temperature) |
| **PropertyField** | Integers | Material IDs, element type IDs, connectivity |
| **StringField** | Text strings | Material names, labels, metadata |
| **CustomTypeField** | Custom data types | Specialized data (complex numbers, custom structures) |

All field types follow the same organizational pattern (data + unit + support + location + scoping).

### Creating a field from scratch

Here's how to create a simple scalar field representing temperature at 4 nodes:

```python
import ansys.dpf.core as dpf

# Create a field
temperature_field = dpf.Field()

# Set the data (4 temperature values)
temperature_field.data = [20.5, 21.3, 19.8, 22.1]

# Set the unit
temperature_field.unit = "°C"

# Define which nodes have data
temperature_field.scoping.ids = [1, 5, 9, 12]  # Node IDs

# Set the location
temperature_field.location = dpf.locations.nodal

# Give it a name
temperature_field.name = "temperature_field"

# Print the field
print(temperature_field)
```

**Expected output**:
```
DPF temperature_field
  Location: Nodal
  Unit: °C
  4 entities
  Data: 4 components
  Ids: [1, 5, 9, 12]
  Min: 19.8
  Max: 22.1
```

**What this shows**: Creating a field requires defining all the pieces: data, unit, scoping (which entities), and location (type of entities).

### Accessing field data from a result file

When you extract results from a file, DPF automatically creates fields with all components properly set:

```python
from ansys.dpf.core import Model, examples

# Load a result file
model = Model(examples.find_simple_bar())

# Get the displacement result
displacement = model.results.displacement.eval()

# displacement is a FieldsContainer (we'll explain this in Collections)
# Get the first field from the container
field = displacement[0]

# Explore the field
print(f"Location: {field.location}")
print(f"Unit: {field.unit}")
print(f"Number of entities: {len(field.scoping)}")
print(f"Number of components per entity: {field.component_count}")
print(f"Scoping (first 5 IDs): {field.scoping.ids[:5]}")
print(f"Data (first 15 values): {field.data[:15]}")
```

**Expected output**:
```
Location: Nodal
Unit: m
Number of entities: 81
Number of components per entity: 3
Scoping (first 5 IDs): [1 2 3 4 5]
Data (first 15 values): [0.         0.         0.         0.         0.         0.
 0.         0.         0.         1.607e-09 -5.106e-26  3.218e-09]
```

**What this shows**: Fields from result files automatically include all metadata (location, unit, scoping). The data array is organized as `[X1, Y1, Z1, X2, Y2, Z2, ...]` for vector fields.


## Understanding supports: Defining the domain

You've learned that every field has a **support** and a **scoping**. These two concepts work together to define where field data lives:

- **Support**: The complete domain containing all possible entities (the full mesh, all time steps, etc.)
- **Scoping**: The specific entity IDs within that domain where this field has data

Think of the support as a map of your entire region, and the scoping as pins marking specific locations on that map where you have measurements.

Now let's explore the two most important support types: MeshedRegion (spatial domain) and TimeFreqSupport (temporal/frequency domain).

### What is a support

A **support** is an object that defines the domain where field data is defined. It provides the complete region or space containing all possible entities (nodes, elements, time steps, etc.).

**Why supports matter**: A field's data array is just numbers. The support defines the domain (mesh geometry, time series, or cyclic pattern), while the **scoping** maps those numbers to specific entity IDs within that domain. Together, support and scoping tell you exactly where each value applies.

**Example flow**: How values in a field's data array map to a physical location for a nodal 3D vector field:

1. **Position in data array** (`field.data[6:9]`): Values `[2.5, -1.2, 0.8]` at indices 6, 7, 8 (third set of 3D elementary data)
2. **Entity ID via scoping** (`field.scoping.ids[2]`): Corresponding third position in the nodal scoping → Node ID 100
3. **Physical location via support** (`field.support.nodes.coordinates_field.get_entity_data_by_id(100)`): Node ID 100 → Coordinates `[0.025, 0.010, 0.000]` m

**Result**: The displacement `[2.5, -1.2, 0.8]` m applies at the node located at position `(0.025, 0.010, 0.000)` m in 3D space.

### MeshedRegion: The geometric support

A **MeshedRegion** is a support that represents the finite element mesh: the geometric domain where spatial field data is defined.

**What it contains**:
- **Nodes**: Vertex coordinates (X, Y, Z positions in space)
- **Elements**: Connectivity (which nodes form each element)
- **Element types**: Solid, shell, beam, etc.
- **Unit system**: Length units (m, mm, in, etc.)
- **Other case-specific properties**: Faces, assigned material, etc.

#### Accessing the mesh

Every DPF model provides access to its meshed region:

```python
from ansys.dpf.core import Model, examples

# Load a model
model = Model(examples.find_simple_bar())

# Get the meshed region
mesh = model.metadata.meshed_region

# Explore the mesh
print(f"Number of nodes: {mesh.nodes.n_nodes}")
print(f"Number of elements: {mesh.elements.n_elements}")
print(f"Unit: {mesh.unit}")
```

**Expected output**:
```
Number of nodes: 81
Number of elements: 40
Unit: m
```

#### Working with nodes

Nodes represent points in 3D space where results are computed:

```python
# Get all node IDs
node_ids = mesh.nodes.scoping.ids
print(f"First 5 node IDs: {node_ids[:5]}")

# Get coordinates for a specific node
node_10_coords = mesh.nodes.coordinates_field.get_entity_data_by_id(10)
print(f"Node 10 coordinates: {node_10_coords}")

# Get all node coordinates as a field
coords_field = mesh.nodes.coordinates_field
print(f"Coordinates field has {len(coords_field.scoping)} nodes")
print(f"Components per node: {coords_field.component_count} (X, Y, Z)")
```

**Expected output**:
```
First 5 node IDs: [1 2 3 4 5]
Node 10 coordinates: [0.015 0.015 0.   ]
Coordinates field has 81 nodes
Components per node: 3 (X, Y, Z)
```

#### Working with elements

Elements connect nodes to form the mesh structure:

```python
# Get all element IDs
element_ids = mesh.elements.scoping.ids
print(f"Number of elements: {len(element_ids)}")

# Get element types
element_types = mesh.elements.element_types_field
print(f"Unique element types: {set(element_types.data)}")

# Get connectivity for a specific element (which nodes form it)
element_1_connectivity = mesh.elements.connectivities_field.get_entity_data_by_id(1)
print(f"Element 1 is formed by nodes: {element_1_connectivity}")
```

**Expected output**:
```
Number of elements: 40
Unique element types: {1}
Element 1 is formed by nodes: [1 2 5 4 9 10 13 12]
```

**What element type codes mean**: DPF uses integer codes for element types (1 = HEX8, 2 = HEX20, etc.). You'll typically work with these through operators rather than manually.

#### When you use MeshedRegion

You'll work with meshed regions when:
- Extracting node coordinates for spatial analysis
- Filtering results by element type
- Creating custom scopings for mesh subsets
- Exporting mesh geometry
- Understanding element connectivity

### TimeFreqSupport: The temporal/frequency support

A **TimeFreqSupport** is a support that represents time steps (transient analysis) or frequency sets (harmonic analysis) where results are available.

**What it contains**:
- **Time or frequency values**: The actual time instants (seconds) or frequencies (Hz)
- **Set IDs**: Integer identifiers for each time/frequency set
- **Cumulative index**: Index for accessing results sequentially

#### Accessing time/frequency information

```python
from ansys.dpf.core import Model, examples

# Load a transient analysis (multiple time steps)
model = Model(examples.find_msup_transient())

# Get the time/frequency support
time_freq_support = model.metadata.time_freq_support

# Explore available time steps
print(f"Number of time sets: {time_freq_support.n_sets}")
print(f"Time frequencies: {time_freq_support.time_frequencies.data[:5]} (first 5)")
```

**Expected output**:
```
Number of time sets: 20
Time frequencies: [0.01 0.02 0.03 0.04 0.05] (first 5)
```

#### Understanding set IDs vs. time values

**Set ID** (also called time step ID): Integer identifier (1, 2, 3, ...)
**Time value**: Actual time in seconds (0.01s, 0.02s, 0.03s, ...)

```python
# Get time value for a specific set ID
time_freq = time_freq_support.time_frequencies
print(f"Set ID 1 → Time: {time_freq.data[0]}s")
print(f"Set ID 5 → Time: {time_freq.data[4]}s")
print(f"Set ID 10 → Time: {time_freq.data[9]}s")
```

**Expected output**:
```
Set ID 1 → Time: 0.01s
Set ID 5 → Time: 0.05s
Set ID 10 → Time: 0.1s
```

**Important**: When requesting results by time step, you use the set ID (integer), not the time value (float).

#### Accessing results at specific time steps

```python
# Get displacement at time step 5
displacement = model.results.displacement()
displacement.inputs.time_scoping([5])  # Set ID, not time value
disp_field = displacement.eval()[0]

print(f"Displacement at time step 5 (time = 0.05s):")
print(f"  Max displacement: {disp_field.data.max():.6e} m")
```

#### When you use TimeFreqSupport

You'll work with time/frequency supports when:
- Extracting results for specific time steps
- Iterating through all time steps in a transient analysis
- Finding which time steps are available
- Converting between set IDs and actual time values
- Working with harmonic analyses (frequencies instead of times)

### CyclicSupport: For cyclic symmetry (brief mention)

A **CyclicSupport** is a specialized support for models with cyclic symmetry (e.g., turbine blades, gears). It defines the base sector and how it repeats around an axis.

**Note**: CyclicSupport is specific to cyclic analysis workflows. It will be covered in detail in the dedicated **Cyclic Analysis with DPF** chapter. For now, just know it exists for symmetric structures.

### Key takeaways about supports

**What supports do**:
- Define the domain where field data applies (spatial mesh, time/frequency, cyclic pattern)
- Provide context for interpreting field data
- Connect field values to physical locations, time instants, or frequencies

**Three main types**:
- **MeshedRegion**: Geometric domain (nodes, elements, coordinates)
- **TimeFreqSupport**: Temporal or frequency domain (time steps, frequencies)
- **CyclicSupport**: Cyclic symmetry domain (base sector + repetition pattern)

**When you encounter them**:
- A field usually has a support (field.support property)
- Access mesh: `model.metadata.meshed_region`
- Access time/freq: `model.metadata.time_freq_support`


## Collections

### What is a collection

A **collection** is a container that groups multiple DPF objects of the same type and organizes them using labels. Collections let you work with multiple fields, meshes, or scopings at once, making it easier to process results across time steps, frequency sets, or other dimensions.

**Why collections matter**: When working with transient analysis (multiple time steps) or processing results for different regions, collections automatically organize and label your data, making it easy to access specific results or process all of them in bulk.

**Real-world analogy**: Think of a photo album. Instead of storing hundreds of individual photos loosely, you organize them by year, event, or person. Collections do the same for DPF data.

### What are labels

**Labels** are categories used to organize objects within a collection. Each object is associated with an integer ID for every label. A **label space** (like `{"time": 3}`) acts as a filter to identify specific objects.

**Common labels**: `time` (time step ID), `frequency` (frequency set ID), `zone` (fluid zone ID), `stage` (load stage ID).

### Types of collections

| Collection type | Contains | Common use case |
|----------------|----------|-----------------|
| **FieldsContainer** | Multiple Field objects | Results across time steps or frequency sets |
| **ScopingsContainer** | Multiple Scoping objects | Different node/element selections or regions |
| **MeshesContainer** | Multiple MeshedRegion objects | Different meshes or time-dependent meshes |

### What you can do with collections

Collections provide powerful capabilities:

- **Access by index or label**: Get a specific field by position (`container[0]`) or by label (`container.get_field({"time": 5})`)
- **Iterate**: Loop through all objects in the collection
- **Filter**: Query for objects matching specific label criteria
- **Bulk processing**: Pass entire collections to operators to process all objects at once
- **Custom organization**: Create collections with your own label schemes

### When you'll use collections

You've already seen FieldsContainer in action: when you extract results from a file, DPF returns a FieldsContainer:

```python
# This returns a FieldsContainer with one field per time step
displacement = model.results.displacement.on_all_time_freqs.eval()

# Access a specific time step
field_at_time_5 = displacement.get_field({"time": 5})
```

You'll work with collections extensively when processing transient analyses, handling multiple regions, or organizing custom datasets.

### Learn more

For detailed examples of creating and working with collections, see the [DPF Collections tutorial](https://dpf.docs.pyansys.com/version/stable/tutorials/data_structures/collections.html) in the PyDPF-Core documentation. The exercises section below will also guide you through practical examples.


## Exercises

Practice what you've learned with these hands-on exercises. Try solving each exercise before looking at the solution.

### Exercise 1: Create a field from scratch

Create a scalar field representing pressure measurements at 5 specific nodes in a mesh. The field should contain:

- Node IDs: `[10, 25, 42, 100, 150]`
- Pressure values: `[101325.0, 102000.0, 99500.0, 103200.0, 98750.0]` (in Pascals)
- Unit: `"Pa"`
- Location: Nodal
- Name: `"pressure_field"`

Print the field to verify it was created correctly.

<details>
<summary>Expand to see the solution</summary>

There are two correct ways to create this field.

**Option 1: use constructor arguments**

```python
import ansys.dpf.core as dpf

# Create a scalar nodal field for 5 entities; DPF allocates a 1-component buffer immediately
pressure_field = dpf.Field(nentities=5, location=dpf.locations.nodal, nature=dpf.natures.scalar)
# Give the field a human-readable name
pressure_field.name = "pressure_field"
# Set the physical unit of the data
pressure_field.unit = "Pa"
# Define the IDs of the 5 nodes that have pressure data
pressure_field.scoping.ids = [10, 25, 42, 100, 150]
# Assign one pressure value per node, in the same order as the scoping IDs
pressure_field.data = [101325.0, 102000.0, 99500.0, 103200.0, 98750.0]
print(pressure_field)
```

**Option 2: use `dimensionality` to reconfigure after instantiation**

```python
import ansys.dpf.core as dpf
from ansys.dpf.core.dimensionality import Dimensionality

# Create a default field (note: dpf.Field() defaults to a 3-component (vector) field)
pressure_field = dpf.Field()
# Override the dimensionality: [1] means 1 component per entity (scalar), scalar nature
pressure_field.dimensionality = Dimensionality([1], dpf.natures.scalar)
# Give the field a human-readable name
pressure_field.name = "pressure_field"
# Set the physical unit of the data
pressure_field.unit = "Pa"
# Define the IDs of the 5 nodes that have pressure data
pressure_field.scoping.ids = [10, 25, 42, 100, 150]
# Assign one pressure value per node, in the same order as the scoping IDs
pressure_field.data = [101325.0, 102000.0, 99500.0, 103200.0, 98750.0]
print(pressure_field)
```

**Expected output** (same for both options):
```
DPF pressure_field Field
  Location: Nodal
  Unit: Pa
  5 entities
  Data: 1 components and 5 elementary data

  IDs                   data(Pa)
  ------------          ----------
  10                    1.013250e+05

  25                    1.020000e+05

  42                    9.950000e+04

  ...
```

> **Common pitfall:** `dpf.Field()` with no arguments defaults to a **3-component (vector) field**.
> If you set data without accounting for this, DPF will try to group your scalar values into sets of 3
> This produces a cryptic `Unable to describe object with error: index out of range` error.
> Always make sure the field's `dimensionality` matches your data before assigning it.

</details>

### Exercise 2: Create a ScopingsContainer from scratch

A mesh is made of three zones, each assigned to a different material. Create a `ScopingsContainer`
labeled on `"material"` that groups the element IDs belonging to each zone:

- Material 1 (steel): elements `[1, 2, 3, 10, 11, 12]`
- Material 2 (aluminum): elements `[4, 5, 6, 13, 14, 15]`
- Material 3 (composite): elements `[7, 8, 9, 16, 17, 18]`

Print the container to verify it was created correctly.

<details>
<summary>Expand to see the solution</summary>

```python
import ansys.dpf.core as dpf

# Create an empty ScopingsContainer and declare its label
sc = dpf.ScopingsContainer()
sc.labels = ['material']

# Create a Scoping for each material zone and add it to the container
s1 = dpf.Scoping(ids=[1, 2, 3, 10, 11, 12], location=dpf.locations.elemental)
sc.add_scoping({'material': 1}, s1)  # associate with material ID 1

s2 = dpf.Scoping(ids=[4, 5, 6, 13, 14, 15], location=dpf.locations.elemental)
sc.add_scoping({'material': 2}, s2)  # associate with material ID 2

s3 = dpf.Scoping(ids=[7, 8, 9, 16, 17, 18], location=dpf.locations.elemental)
sc.add_scoping({'material': 3}, s3)  # associate with material ID 3

print(sc)
```

**Expected output**:
```
DPF  Scopings Container
  with 3 scoping(s)
  defined on labels: material

  with:
  - scoping 0 {material:  1, } located on Elemental 6 entities.
  - scoping 1 {material:  2, } located on Elemental 6 entities.
  - scoping 2 {material:  3, } located on Elemental 6 entities.
```

</details>

### Exercise 3: Explore the ScopingsContainer from Exercise 2

Using the `ScopingsContainer` you created in Exercise 2, complete each of the following tasks:

1. Iterate over all scopings and print the element IDs in each one.
2. Retrieve only the scoping for material 2 and print its element IDs and location.
3. Print the label space (the label-value dictionary) of the first and second scopings.
4. Count the total number of elements across all materials.

<details>
<summary>Expand to see the solution</summary>

```python
import ansys.dpf.core as dpf

# Rebuild the ScopingsContainer from Exercise 2
sc = dpf.ScopingsContainer()
sc.labels = ['material']
sc.add_scoping({'material': 1}, dpf.Scoping(ids=[1, 2, 3, 10, 11, 12], location=dpf.locations.elemental))
sc.add_scoping({'material': 2}, dpf.Scoping(ids=[4, 5, 6, 13, 14, 15], location=dpf.locations.elemental))
sc.add_scoping({'material': 3}, dpf.Scoping(ids=[7, 8, 9, 16, 17, 18], location=dpf.locations.elemental))

# 1. Iterate over all scopings
for i, scoping in enumerate(sc):
    print(f'Scoping {i}: {scoping.ids.tolist()}')

# 2. Retrieve the scoping for material 2 by label
mat2 = sc.get_scoping({'material': 2})
print(f'\nMaterial 2 element IDs: {mat2.ids.tolist()}')
print(f'Material 2 location: {mat2.location}')

# 3. Print label spaces
print(f'\nLabel space of scoping 0: {sc.get_label_space(0)}')
print(f'Label space of scoping 1: {sc.get_label_space(1)}')

# 4. Total element count across all materials
total = sum(len(sc[i]) for i in range(len(sc)))
print(f'\nTotal elements across all materials: {total}')
```

**Expected output**:
```
Scoping 0: [1, 2, 3, 10, 11, 12]
Scoping 1: [4, 5, 6, 13, 14, 15]
Scoping 2: [7, 8, 9, 16, 17, 18]

Material 2 element IDs: [4, 5, 6, 13, 14, 15]
Material 2 location: Elemental

Label space of scoping 0: {'material': 1}
Label space of scoping 1: {'material': 2}

Total elements across all materials: 18
```

</details>

### Exercise 4: Build a shell mesh and attach it to an ElementalNodal field (Advanced)

## Advanced and Optional
This exercise combines two concepts from this chapter: **MeshedRegion** (from the Supports section)
and **ElementalNodal fields** (from the Fields section). It is intended for learners who want to go
deeper. You can safely skip it and come back later.

DPF needs a mesh to know how many nodes belong to each element, which is essential for correctly storing
and retrieving ElementalNodal data (data defined at every node of every element).

In this two-part exercise, you will first build a minimal shell mesh from scratch, then use it as the
support for an ElementalNodal stress field.

#### Part A: Create a single-element shell mesh

Build a `MeshedRegion` with 4 corner nodes and one quad shell element (ID 50). Place the 4 nodes at the
corners of a 1 m × 1 m square in the XY plane.

**Hint**: `mesh.nodes.add_node(id, [x, y, z])` adds a node by ID and coordinates.
`mesh.elements.add_shell_element(id, connectivity)` adds a shell element by ID and a list of
**0-based node indices** (not IDs) in the mesh's node list.

<details>
<summary>Expand to see the solution</summary>

```python
import ansys.dpf.core as dpf
from ansys.dpf.core import MeshedRegion

# Create an empty mesh
mesh = MeshedRegion()

# Add 4 corner nodes: node ID -> [x, y, z] in metres
mesh.nodes.add_node(1, [0.0, 0.0, 0.0])  # bottom-left
mesh.nodes.add_node(2, [1.0, 0.0, 0.0])  # bottom-right
mesh.nodes.add_node(3, [1.0, 1.0, 0.0])  # top-right
mesh.nodes.add_node(4, [0.0, 1.0, 0.0])  # top-left

# Add one quad shell element with ID 50.
# Connectivity uses 0-based node INDICES (not IDs).
# The 4 nodes were added in order, so their indices are 0, 1, 2, 3.
mesh.elements.add_shell_element(50, [0, 1, 2, 3])

mesh.unit = "m"  # set the length unit

print(mesh)
```

**Expected output**:
```
DPF  Meshed Region:
  4 nodes
  1 elements
  Unit: m
  With shell (2D) elements, shell (3D) elements
```

</details>

## Performance note: building large meshes
`add_node` and `add_shell_element` (and their siblings `add_solid_element`, `add_beam_element`)
call the DPF server once per node or element. For meshes with thousands of entities this becomes
very slow because each call crosses the client-to-server boundary.

For performance-critical code, the correct approach is to build the underlying `PropertyField`
objects (coordinates, connectivity, element types) in NumPy arrays first and then push them to
the server in a single call via `mesh.set_coordinates_field()` and `mesh.set_property_field()`.
This pattern is how DPF itself stores mesh data internally.

A complete working example of this approach is available in the official PyDPF-Core tutorial:
[**Create a mesh from scratch**](https://dpf.docs.pyansys.com/version/stable/tutorials/mesh/create_a_mesh_from_scratch.html).
That tutorial builds a full 3D solid mesh with hundreds of elements entirely through
vectorised PropertyField assignments.

#### Part B: Create an ElementalNodal stress field on the mesh

Using the mesh from Part A, create a shell stress field representing three in-plane stress components
(sigma_x, sigma_y, tau_xy) at both the top and bottom surfaces of the element.

**Specifications**:

- **Location**: ElementalNodal
- **Shell layers**: Top and bottom surfaces (`topbottom`)
- **Components**: 3 (sigma_x, sigma_y, tau_xy)
- **Unit**: `"Pa"`
- **Name**: `"shell_stress"`

**Data for element 50** (ordering: node, then layer within that node, then component):

| Node | Layer  | sigma_x | sigma_y | tau_xy |
|------|--------|---------|---------|--------|
| 1    | Bottom | 1000.0  | 2000.0  | 500.0  |
| 1    | Top    | 1100.0  | 2100.0  | 550.0  |
| 2    | Bottom | 1500.0  | 2500.0  | 600.0  |
| 2    | Top    | 1600.0  | 2600.0  | 650.0  |
| 3    | Bottom | 2000.0  | 3000.0  | 700.0  |
| 3    | Top    | 2100.0  | 3100.0  | 750.0  |
| 4    | Bottom | 2500.0  | 3500.0  | 800.0  |
| 4    | Top    | 2600.0  | 3600.0  | 850.0  |

That is 4 nodes × 2 layers × 3 components = **24 values** total for element 50.

After creating the field, use `get_entity_data(index=0)` to retrieve and display the data for element 50.

**Hint**: For ElementalNodal fields, use `field.append(data, entity_id)` instead of `field.data = [...]`.
`append` pushes values for one entity at a time and internally maintains a `entity_data_offsets` array — a
list of flat-array start indices, one per entity — so that `get_entity_data` can later slice out exactly
the right values for each element. `field.data = [...]` leaves the offsets empty, so `get_entity_data`
cannot know how many values belong to each entity and returns only a single data point.

## Performance note: building ElementalNodal fields with many elements
Calling `append` in a loop (one call per element) crosses the Python-to-server boundary for
every element. For large meshes, the vectorized approach is significantly faster: set
`field.data` with the full flat array in one shot, then set `field.entity_data_offsets` with the
cumulative start indices:

```python
import numpy as np
import ansys.dpf.core as dpf

# 3 quad shell elements, each with 4 nodes x 2 layers x 3 components = 24 values
n_components = 3
values_per_element = 4 * 2 * n_components  # 24

# Build the full flat data array for all elements at once
all_data = np.array([
    # element 50 data (24 values) ...
    1000., 2000., 500., 1100., 2100., 550.,
    1500., 2500., 600., 1600., 2600., 650.,
    2000., 3000., 700., 2100., 3100., 750.,
    2500., 3500., 800., 2600., 3600., 850.,
    # element 51 data (24 values) ...
    # ... (omitted for brevity)
])

field = dpf.Field(location=dpf.locations.elemental_nodal)
field.scoping.ids = [50, 51]           # one ID per element
field.data = all_data                        # push everything in one server call
field.entity_data_offsets = [0, 24]         # entity 50 starts at index 0, entity 51 at index 24
```

The offsets array has one entry per entity: `entity_data_offsets[i]` is the flat-array index
where entity `i`'s data begins. For uniform elements (same node count), the values are
evenly spaced: `[0, 24, 48, 72, ...]`.

<details>
<summary>Expand to see the solution</summary>

```python
import ansys.dpf.core as dpf
from ansys.dpf.core import MeshedRegion

# --- Part A: rebuild the mesh ---
mesh = MeshedRegion()
mesh.nodes.add_node(1, [0.0, 0.0, 0.0])  # node index 0
mesh.nodes.add_node(2, [1.0, 0.0, 0.0])  # node index 1
mesh.nodes.add_node(3, [1.0, 1.0, 0.0])  # node index 2
mesh.nodes.add_node(4, [0.0, 1.0, 0.0])  # node index 3
mesh.elements.add_shell_element(50, [0, 1, 2, 3])  # 0-based node indices
mesh.unit = "m"

# --- Part B: create the ElementalNodal stress field ---
shell_stress = dpf.Field(location=dpf.locations.elemental_nodal)

# Attach the mesh as spatial support (needed for plotting and operators, not for get_entity_data)
shell_stress.meshed_region = mesh

shell_stress.unit = "Pa"        # stress unit
shell_stress.name = "shell_stress"
shell_stress.shell_layers = dpf.shell_layers.topbottom  # bottom surface first, then top

# Use append() to associate the 24 values with entity ID 50.
# Flat ordering: for each node, list [bottom_sx, bottom_sy, bottom_txy, top_sx, top_sy, top_txy]
shell_stress.append([
    # Node 1
    1000.0, 2000.0,  500.0,  # bottom: sigma_x, sigma_y, tau_xy
    1100.0, 2100.0,  550.0,  # top:    sigma_x, sigma_y, tau_xy
    # Node 2
    1500.0, 2500.0,  600.0,  # bottom
    1600.0, 2600.0,  650.0,  # top
    # Node 3
    2000.0, 3000.0,  700.0,  # bottom
    2100.0, 3100.0,  750.0,  # top
    # Node 4
    2500.0, 3500.0,  800.0,  # bottom
    2600.0, 3600.0,  850.0,  # top
], 50)  # entity ID 50

print(shell_stress)

# Retrieve all data for element 50 (index 0 in the scoping)
element_data = shell_stress.get_entity_data(index=0)
print(f"\nData for element 50:")
print(f"Shape: {element_data.shape}  (8 nodal-layer rows x 3 components)")
print(element_data)
```

**Expected output**:
```
DPF shell_stress Field
  Location: ElementalNodal
  Unit: Pa
  1 entities
  Data: 3 components and 8 elementary data

  IDs                   data(Pa)
  ------------          ----------
  50                    1.000000e+03   2.000000e+03   5.000000e+02
                        1.100000e+03   2.100000e+03   5.500000e+02
                        1.500000e+03   2.500000e+03   6.000000e+02
                        ...


Data for element 50:
Shape: (8, 3)  (8 nodal-layer rows x 3 components)
[[1000. 2000.  500.]
 [1100. 2100.  550.]
 [1500. 2500.  600.]
 [1600. 2600.  650.]
 [2000. 3000.  700.]
 [2100. 3100.  750.]
 [2500. 3500.  800.]
 [2600. 3600.  850.]]
```

**Shape explained**: `get_entity_data` returns shape `(8, 3)` — 8 rows (4 nodes × 2 layers) each
with 3 stress components. The rows follow the node-major, layer-minor ordering: Node 1 Bottom,
Node 1 Top, Node 2 Bottom, Node 2 Top, and so on.

**What this demonstrates**:

- How to build a minimal `MeshedRegion` from scratch using `add_node` and `add_shell_element`
- How `field.append(data, entity_id)` assigns all values for one entity at once and maintains the
  `entity_data_offsets` array that maps each entity to its slice of the flat data vector
- Why `field.data = [...]` alone is not enough for ElementalNodal fields: without the offsets
  `get_entity_data` cannot determine entity boundaries and falls back to one data point per entity
- How to go further: for many elements, `field.data = all_values` + `field.entity_data_offsets = [0, 24, 48, ...]`
  is the vectorized alternative to calling `append` in a loop — same result, far fewer server round-trips
- Why the mesh is attached (`field.meshed_region = mesh`): not to help `get_entity_data`, but to give
  the field spatial context (coordinates, connectivity) needed for plotting and downstream operators
- How shell layer data is ordered: bottom surface before top, cycling per node

</details>

### Going further

Now that you understand how to work with Fields and Collections, explore these advanced topics:

- **Collections in depth**: Check out the [DPF Collections tutorial](https://dpf.docs.pyansys.com/version/stable/tutorials/data_structures/collections.html) for examples of creating custom FieldsContainers, ScopingsContainers, and MeshesContainers
- **PropertyField and StringField**: Learn about other field types in the [PyDPF-Core API documentation](https://dpf.docs.pyansys.com/version/stable/api/index.html)
- **Working with meshes**: Explore mesh manipulation in the [Mesh tutorial](https://dpf.docs.pyansys.com/version/stable/tutorials/data_structures/mesh.html)

In the next section, you'll learn where DPF data comes from and how to import it using DataSources, StreamsContainers, and the Model object.
