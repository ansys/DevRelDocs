---
uid: Ans.DataProcessing.operators.utility.fields_container
---

# *class* fields_container(input: object = None, config: OperatorConfig = None)

Incrementaly merge the input.

available inputs: `input` (FieldsContainer)

available outputs: `incremented_result` (Any)

**DPF Framework Reference:** [fields_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/fields_container.md)

**Parameters:**

* **input**
* **config**

**Example:**

```python
op = fields_container()

op = fields_container(input=my_input)
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
