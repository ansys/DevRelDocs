---
uid: Ans.DataProcessing.operators.result.transient_rayleigh_integration
---

# *class* transient_rayleigh_integration(fields_container: object = None, mesh: object = None, time_scoping: object = None, field: object = None, observation_mesh: object = None, mass_density: object = None, speed_of_sound: object = None, config: OperatorConfig = None)

Computes the transient Rayleigh integral

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable), `field` (Field), `observation_mesh` (MeshedRegion), `mass_density` (double), `speed_of_sound` (double)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [transient_rayleigh_integration operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/transient_rayleigh_integration.md)

**Parameters:**

* **fields_container**
* **mesh**
* **time_scoping**
* **field**
* **observation_mesh**
* **mass_density**
* **speed_of_sound**
* **config**

**Example:**

```python
op = transient_rayleigh_integration()

op = transient_rayleigh_integration(fields_container=my_fields_container,mesh=my_mesh,time_scoping=my_time_scoping,field=my_field,observation_mesh=my_observation_mesh,mass_density=my_mass_density,speed_of_sound=my_speed_of_sound)
```

## Inputs

### fields_container

the input field container expects acceleration fields

**Type:** *LinkableInput*

### mesh

The meshes region in this pin has to be boundary or skin mesh. This is the source meshes.

**Type:** *LinkableInput*

### time_scoping

Load step number (if it's specified, the Transient rayleigh integration is computed only on the substeps of this step) or time scoping

**Type:** *LinkableInput*

### field

The field represents the coordinates of the observation position. It should be specified if not observation mesh is provided.

**Type:** *LinkableInput*

### observation_mesh

This is the observation mesh region

**Type:** *LinkableInput*

### mass_density

Mass density (if it's not specified, default value of the air is applied).

**Type:** *LinkableInput*

### speed_of_sound

Speed of sound (if it's not specified, default value of the speed of sound in the air is applied).

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
