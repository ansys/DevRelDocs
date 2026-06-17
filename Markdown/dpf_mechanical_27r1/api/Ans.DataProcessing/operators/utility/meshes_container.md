---
uid: Ans.DataProcessing.operators.utility.meshes_container
---

# *class* meshes_container(input: object = None, config: OperatorConfig = None)

Incrementaly merge the input.

available inputs: `input` (MeshesContainer)

available outputs: `incremented_result` (Any)

**DPF Framework Reference:** [meshes_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/meshes_container.md)

**Parameters:**

* **input**
* **config**

**Example:**

```python
op = meshes_container()

op = meshes_container(input=my_input)
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
