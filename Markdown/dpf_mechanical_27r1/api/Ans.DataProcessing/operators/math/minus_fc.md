---
uid: Ans.DataProcessing.operators.math.minus_fc
---

# *class* minus_fc(field_or_fields_container_A: object = None, field_or_fields_container_B: object = None, config: OperatorConfig = None)

minus_fc()
minus_fc(field_or_fields_container_A: object, field_or_fields_container_B: object, config: OperatorConfig)
minus_fc(config: OperatorConfig)


**DPF Framework Reference:** [minus_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/minus_fc.md)

**Parameters:**

* **field_or_fields_container_A**
* **field_or_fields_container_B**
* **config**

## Inputs

### field_or_fields_container_A

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field_or_fields_container_B

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

Field containing the element-wise difference (fieldA - fieldB)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
