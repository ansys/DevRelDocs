---
uid: Ans.DataProcessing.operators.result.poynting_vector_surface
---

# *class* poynting_vector_surface(fields_containerA: object = None, fields_containerB: object = None, fields_containerC: object = None, fields_containerD: object = None, meshed_region: object = None, int32: object = None, config: OperatorConfig = None)

Compute the Poynting Vector surface integral

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `fields_containerC` (FieldsContainer), `fields_containerD` (FieldsContainer), `meshed_region` (MeshedRegion) (optional), `int32` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [poynting_vector_surface operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/poynting_vector_surface.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **fields_containerC**
* **fields_containerD**
* **meshed_region**
* **int32**
* **config**

**Example:**

```python
op = poynting_vector_surface()

op = poynting_vector_surface(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,fields_containerC=my_fields_containerC,fields_containerD=my_fields_containerD,meshed_region=my_meshed_region,int32=my_int32)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### fields_containerC

**Type:** *LinkableInput*

### fields_containerD

**Type:** *LinkableInput*

### meshed_region

the mesh region in this pin have to be boundary or skin mesh

**Type:** *LinkableInput*

### int32

load step number, if it's specified, the Poynting Vector is computed only on the substeps of this step

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
