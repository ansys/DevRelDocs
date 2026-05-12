---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_vectors_fc
---

# *class* assemble_scalars_to_vectors_fc(x: object = None, y: object = None, z: object = None, config: OperatorConfig = None)

Takes three scalar fields container and assembles them as a 3D vector fields container.

available inputs: `x` (FieldsContainer) (optional), `y` (FieldsContainer) (optional), `z` (FieldsContainer) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [assemble_scalars_to_vectors_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/assemble_scalars_to_vectors_fc.md)

**Parameters:**

* **x**
* **y**
* **z**
* **config**

**Example:**

```python
op = assemble_scalars_to_vectors_fc()

op = assemble_scalars_to_vectors_fc(x=my_x,y=my_y,z=my_z)
```

## Inputs

### x

**Type:** *LinkableInput*

### y

**Type:** *LinkableInput*

### z

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
