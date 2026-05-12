---
uid: Ans.DataProcessing.operators.averaging.nodal_difference_fc
---

# *class* nodal_difference_fc(fields_container: object = None, mesh: object = None, scoping: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `scoping` (Scoping, ScopingsContainer) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [nodal_difference_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_difference_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **config**

**Example:**

```python
op = nodal_difference_fc()

op = nodal_difference_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

**Type:** *LinkableInput*

### scoping

Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers.

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
