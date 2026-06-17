---
uid: Ans.DataProcessing.operators.utility.mesh
---

# *class* mesh(input: object = None, config: OperatorConfig = None)

Incrementaly merge the input.

available inputs: `input` (MeshedRegion)

available outputs: `incremented_result` (Any)

**DPF Framework Reference:** [mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/mesh.md)

**Parameters:**

* **input**
* **config**

**Example:**

```python
op = mesh()

op = mesh(input=my_input)
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
