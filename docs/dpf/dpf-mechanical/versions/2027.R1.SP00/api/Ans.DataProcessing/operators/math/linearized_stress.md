---
uid: Ans.DataProcessing.operators.math.linearized_stress
---

# *class* linearized_stress(stress_comps: object = None, iComp: object = None, path_coords: object = None, rho: object = None, kbr: object = None, ksxbzro: object = None, out_type: object = None, config: OperatorConfig = None)

get linearized stress

available inputs: `stress_comps` (FieldsContainer), `iComp` (Int32), `path_coords` (Field), `rho` (double), `kbr` (Int32), `ksxbzro` (Int32), `out_type` (Int32)

available outputs: `linearized_stress_results` (FieldsContainer), `linearized_stress_all_results` (FieldsContainer), `linearized_stress_params` (FieldsContainer)

**DPF Framework Reference:** [linearized_stress operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/linearized_stress.md)

**Parameters:**

* **stress_comps**
* **iComp**
* **path_coords**
* **rho**
* **kbr**
* **ksxbzro**
* **out_type**
* **config**

**Example:**

```python
op = linearized_stress()

op = linearized_stress(stress_comps=my_stress_comps,iComp=my_iComp,path_coords=my_path_coords,rho=my_rho,kbr=my_kbr,ksxbzro=my_ksxbzro,out_type=my_out_type)
```

## Inputs

### stress_comps

Stress tensor components evaluated at path points

**Type:** *LinkableInput*

### iComp

Stress component index to linearize

**Type:** *LinkableInput*

### path_coords

Path point coordinates

**Type:** *LinkableInput*

### rho

Optional geometric parameter

**Type:** *LinkableInput*

### kbr

Option flag controlling bending/reference behavior

**Type:** *LinkableInput*

### ksxbzro

Option flag controlling coordinate/zero-reference handling

**Type:** *LinkableInput*

### out_type

Requested linearized stress output type.

**Type:** *LinkableInput*

## Outputs

### linearized_stress_results

Selected linearized stress results for the requested output type

**Type:** *LinkableOutput*

### linearized_stress_all_results

All linearized stress result types computed along the path

**Type:** *LinkableOutput*

### linearized_stress_params

Linearization parameters and metadata

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
