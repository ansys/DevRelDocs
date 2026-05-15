---
uid: Ans.DataProcessing.operators.averaging.extend_to_mid_nodes
---

# *class* extend_to_mid_nodes(field: object = None, mesh: object = None, config: OperatorConfig = None)

Extends an Elemental Nodal or Nodal field defined on corner nodes to a field defined also on the mid nodes.

available inputs: `field` (Field, FieldsContainer), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [extend_to_mid_nodes operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/extend_to_mid_nodes.md)

**Parameters:**

* **field**
* **mesh**
* **config**

**Example:**

```python
op = extend_to_mid_nodes()

op = extend_to_mid_nodes(field=my_field,mesh=my_mesh)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh

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
