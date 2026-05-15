---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_component
---

# *class* workflow_energy_per_component(time_scoping: object = None, mesh_scoping: object = None, energy_type: object = None, streams_container: object = None, data_sources: object = None, named_selection1: object = None, named_selection2: object = None, config: OperatorConfig = None)

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `energy_type` (Int32) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `named_selection1` (string) (optional), `named_selection2` (string) (optional)

available outputs: `component_energy` (FieldsContainer), `component_energy_percentage` (FieldsContainer), `component_total_energy` (FieldsContainer), `component_total_energy_percentage` (FieldsContainer), `component_strain_energy` (FieldsContainer), `component_strain_energy_percentage` (FieldsContainer), `component_kinetic_energy` (FieldsContainer), `component_kinetic_energy_percentage` (FieldsContainer)

**DPF Framework Reference:** [workflow_energy_per_component operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/workflow_energy_per_component.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **energy_type**
* **streams_container**
* **data_sources**
* **named_selection1**
* **named_selection2**
* **config**

**Example:**

```python
op = workflow_energy_per_component()

op = workflow_energy_per_component(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,energy_type=my_energy_type,streams_container=my_streams_container,data_sources=my_data_sources,named_selection1=my_named_selection1,named_selection2=my_named_selection2)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed.

**Type:** *LinkableInput*

### energy_type

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy, 3: All energy types)

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### named_selection1

Named Selections. Intersection of all  Named Selections with the master scoping will be done.

**Type:** *LinkableInput*

### named_selection2

Named Selections. Intersection of all  Named Selections with the master scoping will be done.

**Type:** *LinkableInput*

## Outputs

### component_energy

**Type:** *LinkableOutput*

### component_energy_percentage

**Type:** *LinkableOutput*

### component_total_energy

**Type:** *LinkableOutput*

### component_total_energy_percentage

**Type:** *LinkableOutput*

### component_strain_energy

**Type:** *LinkableOutput*

### component_strain_energy_percentage

**Type:** *LinkableOutput*

### component_kinetic_energy

**Type:** *LinkableOutput*

### component_kinetic_energy_percentage

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
