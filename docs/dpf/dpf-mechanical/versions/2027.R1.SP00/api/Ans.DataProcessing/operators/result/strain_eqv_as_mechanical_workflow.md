---
uid: Ans.DataProcessing.operators.result.strain_eqv_as_mechanical_workflow
---

# *class* strain_eqv_as_mechanical_workflow(time_scoping: object = None, mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, mesh: object = None, requested_location: object = None, read_cyclic: object = None, average_across_bodies: object = None, config: OperatorConfig = None)

Generates a workflow that computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `mesh` (MeshedRegion, MeshesContainer) (optional), `requested_location` (string) (optional), `read_cyclic` (bool) (optional), `average_across_bodies` (bool) (optional)

available outputs: `workflow` (Workflow)

**DPF Framework Reference:** [strain_eqv_as_mechanical_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/strain_eqv_as_mechanical_workflow.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **streams_container**
* **data_sources**
* **mesh**
* **requested_location**
* **read_cyclic**
* **average_across_bodies**
* **config**

**Example:**

```python
op = strain_eqv_as_mechanical_workflow()

op = strain_eqv_as_mechanical_workflow(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,mesh=my_mesh,requested_location=my_requested_location,read_cyclic=my_read_cyclic,average_across_bodies=my_average_across_bodies)
```

## Inputs

### time_scoping

time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output.

**Type:** *LinkableInput*

### mesh_scoping

nodes or elements scoping required in output.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

result file path container.

**Type:** *LinkableInput*

### mesh

prevents from reading the mesh in the results file.

**Type:** *LinkableInput*

### requested_location

average the elemental nodal result to the requested location (default is nodal).

**Type:** *LinkableInput*

### read_cyclic

if true, cyclic expansion is done. If false, it's ignored..

**Type:** *LinkableInput*

### average_across_bodies

for multibody simulations, the stresses are averaged across bodies if true or not if false (default).

**Type:** *LinkableInput*

## Outputs

### workflow

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
