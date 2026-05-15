# Where does the data come from

Now that you know how DPF represents data internally, you need to understand where that data comes from.
Data in DPF can come from two main sources:

- **Result files**: Importing simulation results from supported file formats
- **Direct user input**: Creating DPF data structures programmatically from scratch

Whether data comes from files or direct input, it is represented using the same DPF structures you learned about in the previous section (Fields, FieldsContainers, MeshedRegions, etc.).

## Import data from result files

### What file formats are supported

DPF supports result files from multiple ANSYS solvers:

| Solver | File formats | Examples |
| ------ | ------------ | -------- |
| **MAPDL** | .rst, .mode, .rth, .rfrq, .rdsp | Structural analysis results |
| **LS-DYNA** | .d3plot, .binout | Explicit dynamics results |
| **Fluent** | .cas/.dat.h5 (CFF), .flprj (project) | CFD results |
| **CFX** | .cas/.dat.cff (CFF), .res, .flprj (project) | CFD results |

For the official list of supported file formats and versions, see the [DPF Framework documentation](https://developer.ansys.com/docs/dpf-framework-2026-r1/index.md).

**Why this matters**: DPF provides a unified interface for all these formats.
The same code can extract displacement from a MAPDL .rst file or temperature from a Fluent .cas.h5 file.

### How to access result files: DataSources

A **DataSources** is an object that references result file locations and manages access to their data.
It stores file paths and provides this information to DPF operators that need to read the files.

**What it does**: Points to where your result files are located
**What it doesn't do**: It doesn't load or parse the data itself (that's done by operators)

**Example with a single file**:

```python
import ansys.dpf.core as dpf
from ansys.dpf.core import examples

# Get path to example result file
result_path = examples.find_simple_bar()

# Create DataSources pointing to the file
data_sources = dpf.DataSources(result_path)
```

**Example with multiple files** (common for Fluent/CFX):

```python
# Download Fluent example files
files = examples.download_fluent_multi_species()

# Create DataSources with both cas and dat files
data_sources = dpf.DataSources()
data_sources.set_result_file_path(files["cas"], "cas")
data_sources.add_file_path(files["dat"], "dat")
```

**What this shows**: DataSources can manage single files or multiple related files (like Fluent's .cas and .dat pair).

### When to use streams: StreamsContainer

A **StreamsContainer** is an object that keeps result files open and caches data to improve performance for repeated access.

**When to use it**:

- Working with large files where repeated file opening is slow
- Running multiple operations on the same data
- Performance is critical

**When not needed**:

- Single-pass operations
- Small files
- Quick data exploration

**Example**:

```python
# Create streams from DataSources
streams = dpf.operators.metadata.streams_provider(data_sources)

# Pass streams to operators for better performance
displacement_op = dpf.operators.result.displacement()
displacement_op.inputs.streams_container(streams)
fields = displacement_op.eval()
```

**What this shows**: Streams act as a performance optimization layer between files and reader operators.

## Streams keep files open
A `StreamsContainer` holds open file handles for every file it references, for as long as it exists.
This means the associated files cannot be moved, deleted, or written to by another process while the streams are open.

Streams are closed automatically when the `StreamsContainer` Python object is deleted (garbage collected).
If you need to release the files earlier, close the streams explicitly:

```python
streams.release_handles()
```

### Exploring data with Model

A **Model** is a helper object that provides high-level access to result file contents.
It automatically reads file metadata and creates convenient methods to extract results, mesh, and analysis information.

**What Model provides**:

- Automatic detection of available results
- Easy access to mesh information
- Analysis metadata (units, analysis type, time steps)
- Simplified syntax for common operations
- Automatic creation and management of streams

**Why use Model**: It handles the complexity of setting up operators
and provides a more user-friendly interface than working directly with DataSources and operators.

**When NOT to use Model**: Model's convenience comes with overhead.
It automatically reads metadata, creates multiple operators, and performs setup work behind the scenes.
For performance-critical applications or when you need explicit control over data access patterns,
working directly with DataSources/Streams and operators gives you fine-grained control and avoids unnecessary operations.

**Creating a Model**:

```python
# Method 1: From file path
model = dpf.Model(result_path)

# Method 2: From DataSources
model = dpf.Model(data_sources)
```

**What's inside a Model**:

```python
# Print Model to see available information
print(model)
```

**Expected output**:

```cmd
DPF Model
------------------------------
Static analysis
Unit system: Metric (m, kg, N, s, V, A)
Physics Type: Mechanical
Available results:
     -  displacement: Nodal Displacement
     -  element_nodal_forces: ElementalNodal Element nodal Forces
     -  elemental_volume: Elemental Volume
     -  stiffness_matrix_energy: Elemental Energy-stiffness matrix
     -  artificial_hourglass_energy: Elemental Hourglass Energy
     -  thermal_dissipation_energy: Elemental thermal dissipation energy
     -  kinetic_energy: Elemental Kinetic Energy
     -  co_energy: Elemental co-energy
     -  incremental_energy: Elemental incremental energy
     -  elastic_strain: ElementalNodal Strain
     -  structural_temperature: ElementalNodal Temperature
------------------------------
DPF  Meshed Region:
  81 nodes
  8 elements
  Unit: m
------------------------------
DPF  Time/Freq Support:
  Number of sets: 1
Cumulative     Time (s)       LoadStep       Substep
1              1.000000       1              1
```

**What each part means**:

- **Analysis type**: Static, transient, modal, etc.
- **Unit system**: How values are measured (includes length, mass, force, time, voltage, current)
- **Available results**: Shows result name, location (Nodal/Elemental/ElementalNodal), and physical description
- **Meshed Region**: Node and element counts with spatial units
- **Time/Freq Support**: Information about time steps or frequencies in the analysis

**Accessing data through Model**:

```python
# Get displacement directly
displacement = model.results.displacement.eval()

# Get mesh information
mesh = model.metadata.meshed_region

# Get time/frequency information
time_freq_support = model.metadata.time_freq_support
```

**What this shows**: Model provides a clean, documented interface without needing to work directly with DataSources and operators.

## Quick reference: When to use what

| Object | Use when | Purpose |
| ------ | -------- | ------- |
| **DataSources** | Building custom workflows, using operators directly | References file locations |
| **StreamsContainer** | Performance matters, repeated access to large files | Keeps files open, caches data |
| **Model** | Exploring data, quick analysis, common operations | High-level interface with automatic setup |

**Recommended approach**:

- **Model**: Use for interactive data exploration, prototyping, and common analysis tasks where convenience is prioritized over performance.
- **DataSources + operators**: Use for single-pass workflows or during workflow development when explicit control over data flow is required
without implicit caching or optimizations.
- **DataSources + Streams + operators**: Use for production workflows requiring optimal performance through file caching and repeated data access.

## Import data from user input

To create DPF data structures from scratch (without result files), you build fields, scopings, and supports programmatically.
This allows you to use DPF for custom data or non-ANSYS sources.

**When you'd do this**:

- Importing experimental data
- Custom simulations outside ANSYS
- Synthetic test data
- Combining data from multiple sources

This process requires understanding how DPF represents data internally, which was covered in the previous section.

## Exercise: Import and explore a result file

**Task**: Use `examples.download_transient_result()` to get a transient mechanical result file, then practice creating a `DataSources`, a `StreamsContainer`, and a `Model`. Explore the model contents and extract key metadata.

1. Import the necessary modules
2. Get the result file path using `examples.download_transient_result()`
3. Create a `DataSources` pointing to the file and print it
4. Create a `StreamsContainer` from the `DataSources`
5. Create a `Model` from the `DataSources` and print it
6. Print the number of nodes in the mesh and the number of time steps

<details>
<summary>Expand to see the answer</summary>

```python
import ansys.dpf.core as dpf
from ansys.dpf.core import examples

# Step1: Get the result file path
result_path = examples.download_transient_result()

# Step2: Create a DataSources and inspect it
data_sources = dpf.DataSources(result_path)
print("DataSources:")
print(data_sources)

# Step3: Create a StreamsContainer for repeated access performance
streams_op = dpf.operators.metadata.streams_provider()
streams_op.inputs.data_sources(data_sources)
streams_container = streams_op.outputs.streams_container()
print(f"\nStreamsContainer created: {type(streams_container).__name__}")

# Step4: Create a Model from the DataSources and print its contents
model = dpf.Model(data_sources)
print("\nModel contents:")
print(model)

# Step5: Extract mesh and time metadata
mesh = model.metadata.meshed_region
time_freq = model.metadata.time_freq_support
print(f"Number of nodes: {mesh.nodes.n_nodes}")
print(f"Number of elements: {mesh.elements.n_elements}")
print(f"Number of time steps: {time_freq.n_sets}")
```

**Expected output**:

```
DataSources:
DPF  DataSources:
  Result files:
     result key: rst and path: C:\...\transient.rst
  Secondary files:

StreamsContainer created: StreamsContainer

Model contents:
DPF Model
------------------------------
Static analysis
Unit system: MKS: m, kg, N, s, V, A, degC
Physics Type: Mechanical
Available results:
     -  node_orientations: Nodal Node Euler Angles
     -  displacement: Nodal Displacement
     -  nodal_rotation: Nodal Rotation
     -  reaction_force: Nodal Force
     -  stress: ElementalNodal Stress
     -  elastic_strain: ElementalNodal Strain
     -  structural_temperature: ElementalNodal Structural temperature
     -  ...
------------------------------
DPF  Meshed Region:
  3820 nodes
  789 elements
  Unit: m
------------------------------
DPF  Time/Freq Support:
  Number of sets: 35
Cumulative     Time (s)       LoadStep       Substep
1              0.000000       1              1
2              0.019975       1              2
...
35             0.676628       1              35

Number of nodes: 3820
Number of elements: 789
Number of time steps: 35
```

**What you learned**:

- `examples.download_transient_result()` is the function to get an example transient mechanical result file
- `DataSources` wraps the file path and is the starting point for all file-based workflows
- `StreamsContainer` is created via the `streams_provider` operator and keeps the file open for repeated access
- `Model` provides a high-level view of the file contents, including available results, mesh, and time steps
- The same `DataSources` object can be passed to both `StreamsContainer` and `Model`

</details>

In the next section, you'll learn how to interact with that data using operators and workflows.
