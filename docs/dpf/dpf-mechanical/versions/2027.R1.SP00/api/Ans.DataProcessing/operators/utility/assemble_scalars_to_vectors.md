---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_vectors
---

# *class* assemble_scalars_to_vectors(x: object = None, y: object = None, z: object = None, config: OperatorConfig = None)

Takes three scalar fields and assembles them as a 3D vector field.

available inputs: `x` (Field) (optional), `y` (Field) (optional), `z` (Field) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [assemble_scalars_to_vectors operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/assemble_scalars_to_vectors.md)

**Parameters:**

* **x**
* **y**
* **z**
* **config**

**Example:**

```python
op = assemble_scalars_to_vectors()

op = assemble_scalars_to_vectors(x=my_x,y=my_y,z=my_z)
```

## Inputs

### x

**Type:** *LinkableInput*

### y

**Type:** *LinkableInput*

### z

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
