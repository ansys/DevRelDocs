---
uid: Ans.DataProcessing.operators.scoping.rescope
---

# *class* rescope(fields: object = None, mesh_scoping: object = None, default_value: object = None, config: OperatorConfig = None)

rescope()
rescope(fields: object, mesh_scoping: object, default_value: object, config: OperatorConfig)
rescope(config: OperatorConfig)


**DPF Framework Reference:** [rescope operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope.md)

**Parameters:**

* **fields**
* **mesh_scoping**
* **default_value**
* **config**

## Inputs

### fields

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### default_value

If pin 2 is used, the IDs not found in the field are added with this default value.

**Type:** *LinkableInput*

## Outputs

### fields

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
