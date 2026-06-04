---
uid: Ans.DataProcessing.operators.mesh.from_field
---

# *class* from_field(field: object = None, config: OperatorConfig = None)

Extracts the meshed region from the support of a field.

available inputs: `field` (Field)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [from_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/from_field.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = from_field()

op = from_field(field=my_field)
```

## Inputs

### field

Field containing a mesh support

**Type:** *LinkableInput*

## Outputs

### mesh

Meshed region extracted from the field's support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
