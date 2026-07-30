---
uid: Ans.DataProcessing.operators.scoping.split_on_property_type
---

# *class* split_on_property_type(mesh_scoping: object = None, mesh: object = None, requested_location: object = None, skin_case: object = None, label1: object = None, label2: object = None, config: OperatorConfig = None)

split_on_property_type()

split_on_property_type(mesh_scoping: object, mesh: object, requested_location: object, skin_case: object, label1: object, label2: object, config: OperatorConfig)

split_on_property_type(config: OperatorConfig)



**DPF Framework Reference:** [split_on_property_type operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/split_on_property_type.md)

**Parameters:**

* **mesh_scoping**
* **mesh**
* **requested_location**
* **skin_case**
* **label1**
* **label2**
* **config**

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
