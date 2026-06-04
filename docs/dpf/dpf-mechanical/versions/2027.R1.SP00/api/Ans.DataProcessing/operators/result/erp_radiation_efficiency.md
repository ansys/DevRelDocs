---
uid: Ans.DataProcessing.operators.result.erp_radiation_efficiency
---

# *class* erp_radiation_efficiency(fields_container: object = None, mesh: object = None, time_scoping: object = None, mass_density: object = None, speed_of_sound: object = None, config: OperatorConfig = None)

Compute the radiation efficiency (enhanced erp divided by classical erp)

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable), `mass_density` (double), `speed_of_sound` (double)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [erp_radiation_efficiency operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/erp_radiation_efficiency.md)

**Parameters:**

* **fields_container**
* **mesh**
* **time_scoping**
* **mass_density**
* **speed_of_sound**
* **config**

**Example:**

```python
op = erp_radiation_efficiency()

op = erp_radiation_efficiency(fields_container=my_fields_container,mesh=my_mesh,time_scoping=my_time_scoping,mass_density=my_mass_density,speed_of_sound=my_speed_of_sound)
```

## Inputs

### fields_container

the input field container expects displacements fields

**Type:** *LinkableInput*

### mesh

the meshes region in this pin has to be boundary or skin mesh

**Type:** *LinkableInput*

### time_scoping

load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping

**Type:** *LinkableInput*

### mass_density

mass density (if it's not specified, default value of the air is applied).

**Type:** *LinkableInput*

### speed_of_sound

speed of sound (if it's not specified, default value of the speed of sound in the air is applied).

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
