---
uid: Ans.DataProcessing.operators.scoping.rescope_fc
---

# *class* rescope_fc(fields_container: object = None, mesh_scoping: object = None, default_value: object = None, config: OperatorConfig = None)

rescope_fc()
rescope_fc(fields_container: object, mesh_scoping: object, default_value: object, config: OperatorConfig)
rescope_fc(config: OperatorConfig)


**DPF Framework Reference:** [rescope_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_fc.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **default_value**
* **config**

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### default_value

If pin 2 is used, the IDs not found in the field are added with this default value.

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
