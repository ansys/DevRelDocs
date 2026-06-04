---
uid: Ans.DataProcessing.operators.scoping.split_on_property_type
---

# *class* split_on_property_type(mesh_scoping: object = None, mesh: object = None, requested_location: object = None, skin_case: object = None, label1: object = None, label2: object = None, config: OperatorConfig = None)

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material, since 2025R1 it supports any scalar property field name contained in the mesh property fields) and returns a scopings container with those split scopings.

available inputs: `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion), `requested_location` (string), `skin_case` (Int32) (optional), `label1` (string) (optional), `label2` (string) (optional)

available outputs: `mesh_scoping` (ScopingsContainer)

**DPF Framework Reference:** [split_on_property_type operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/split_on_property_type.md)

**Parameters:**

* **mesh_scoping**
* **mesh**
* **requested_location**
* **skin_case**
* **label1**
* **label2**
* **config**

**Example:**

```python
op = split_on_property_type()

op = split_on_property_type(mesh_scoping=my_mesh_scoping,mesh=my_mesh,requested_location=my_requested_location,skin_case=my_skin_case,label1=my_label1,label2=my_label2)
```

## Inputs

### mesh_scoping

Scoping

**Type:** *LinkableInput*

### mesh

mesh region

**Type:** *LinkableInput*

### requested_location

location (default is elemental)

**Type:** *LinkableInput*

### skin_case

set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default)

**Type:** *LinkableInput*

### label1

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')

**Type:** *LinkableInput*

### label2

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
