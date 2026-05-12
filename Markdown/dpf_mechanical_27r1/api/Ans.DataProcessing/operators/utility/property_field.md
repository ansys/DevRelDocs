---
uid: Ans.DataProcessing.operators.utility.property_field
---

# *class* property_field(input: object = None, config: OperatorConfig = None)

Incrementaly merge the input.

available inputs: `input` (PropertyField)

available outputs: `incremented_result` (Any)

**DPF Framework Reference:** [property_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/property_field.md)

**Parameters:**

* **input**
* **config**

**Example:**

```python
op = property_field()

op = property_field(input=my_input)
```

## Inputs

### input

**Type:** *LinkableInput*

## Outputs

### incremented_result

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
