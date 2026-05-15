# Key takeaways

Congratulations! You've completed the "Working with Data" chapter. Here's a summary of the essential concepts you've learned.

## Which data can be represented
- DPF represents simulation data as **fields** with different elementary data structures:
    - **Scalar fields**: Single value per entity (temperature, pressure)
    - **Vector fields**: Three components per entity (displacement, velocity)
    - **Tensor fields**: Six or nine components per entity (stress, strain)
- Data can vary across **space** (mesh nodes/elements), **time** (transient analysis), and **frequency** (harmonic analysis)

## Where does the data come from
**Direct user input**

- Create fields from scratch by setting data arrays, units, scoping, and location
- Useful for custom calculations or importing data from non-ANSYS sources

**Result files**

- Use the **DataSources** object to point to result file paths (`.rst`, `.rth`, `.mode`, etc.)
- Use **result operators** (`ops.result.displacement`, `ops.result.stress`, etc.) to extract specific results from files
- DataSources can reference local files or remote files on a server

## How is data represented in DPF
**Fields: The core data structure**

- A **Field** associates numerical data with entities in a discretized region
- Key field components:
    - **Data**: Flat array of numerical values
    - **Unit**: Measurement system (m, Pa, °C, etc.)
    - **Support**: The complete domain (mesh, time series, cyclic pattern)
    - **Location**: Type of entities (Nodal, Elemental, ElementalNodal, TimeFreq)
    - **Scoping**: Specific entity IDs that have data
    - **Shell layers**: Layer information for shell elements (bottom, top, mid)
    - **Name**: Optional identifier for documentation

- **Data array ordering**: Entity → Node (if ElementalNodal) → Layer (if shell) → Component
- **Data access methods**: Use `get_entity_data(index)` or `get_entity_data_by_id(id)` for individual entities
- **Performance considerations**: For local servers, `field.data` provides direct memory access. For remote servers and large fields, filter on the server first before downloading

**Supports: Defining the domain**

- **MeshedRegion**: Geometric domain containing nodes, elements, connectivity, and unit system
- **TimeFreqSupport**: Temporal or frequency domain with set IDs and time/frequency values
- **CyclicSupport**: Cyclic symmetry domain (covered in advanced topics)
- **Support vs. Scoping**: Support defines the complete domain; scoping simply gives a list of entity IDs

**Collections: Grouping multiple objects**

- **FieldsContainer**: Groups multiple fields organized by labels (time, frequency, zone)
- **ScopingsContainer**: Groups multiple scopings
- **MeshesContainer**: Groups multiple meshed regions
- Collections enable bulk processing across time steps, regions, or other dimensions

## How to interact with data in DPF
**Operators: Building blocks for data processing**

- An **operator** is a function that takes inputs, performs an operation, and produces outputs
- **Three-step pattern**:
    1. Instantiate the operator
    2. Connect inputs (using named properties or pin numbers)
    3. Get outputs
- **Python convenience**: Named input properties (`inputs.data_sources()`) hide underlying pin numbers
- **Raw API**: Use `operator.connect(pin_number, object)` when Python wrappers aren't up-to-date
- **Operator categories**: result, math, filter, averaging, utility, mesh operators

**Workflows: Chaining operators**

- **Implicit chaining**: Connect operator outputs directly to inputs (simple, for short workflows)
- **Explicit Workflow object**: Create reusable workflows with named inputs/outputs
- **Workflow benefits**:
    - **Reusability**: Define once, use with different data sources
    - **Modularity**: Break complex analysis into manageable steps
    - **Shareability**: Save and share workflows across scripts
    - **Visualization**: Export to Graphviz format or use `workflow.view()`
- **When to use workflows**: Multi-step processing, reusable analysis templates, complex pipelines

## Practical skills acquired
You can now:

- ✅ Create fields from scratch with proper data, unit, support, location, and scoping
- ✅ Extract results from files using DataSources and result operators
- ✅ Access field data efficiently (understanding index vs. ID, local vs. remote server)
- ✅ Work with supports (MeshedRegion, TimeFreqSupport) to understand where data applies
- ✅ Use individual operators to transform data
- ✅ Chain operators to create multi-step workflows
- ✅ Create reusable Workflow objects with named inputs/outputs
- ✅ Visualize workflow structure using Graphviz export

## 📝 Checkpoint: Verify your understanding

Before moving to the next chapter:

## Complete the Working with data survey
**Take 5-7 minutes to:**
- ✅ Verify you understood the key concepts
- 💡 Share what worked well
- 🔧 Tell us what could be improved

[📋 Start survey →](https://forms.office.com/r/bSHdhE9mPZ)

Your responses directly improve this content for future learners!
