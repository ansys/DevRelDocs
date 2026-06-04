---
uid: Ans.DataProcessing.operators.averaging.nodal_fraction_fc
---

# *class* nodal_fraction_fc(fields_container: object = None, mesh: object = None, scoping: object = None, denominator: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the fraction between the nodal difference and the nodal average. The result is computed on a given node's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `scoping` (Scoping) (optional), `denominator` (FieldsContainer) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [nodal_fraction_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_fraction_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **denominator**
* **config**

**Example:**

```python
op = nodal_fraction_fc()

op = nodal_fraction_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping,denominator=my_denominator)
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

### denominator

If a fields container is set in this pin, it is used as the denominator of the fraction instead of elemental_nodal_To_nodal_fc.

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
