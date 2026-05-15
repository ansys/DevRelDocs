---
uid: Ans.DataProcessing.operators.averaging.extend_to_mid_nodes_fc
---

# *class* extend_to_mid_nodes_fc(fields_container: object = None, mesh: object = None, config: OperatorConfig = None)

Extends Elemental Nodal or Nodal fields defined on corner nodes to Elemental Nodal fields defined also on the mid nodes.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [extend_to_mid_nodes_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/extend_to_mid_nodes_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **config**

**Example:**

```python
op = extend_to_mid_nodes_fc()

op = extend_to_mid_nodes_fc(fields_container=my_fields_container,mesh=my_mesh)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

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
