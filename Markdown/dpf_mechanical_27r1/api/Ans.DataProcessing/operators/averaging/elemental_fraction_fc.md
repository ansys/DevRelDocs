---
uid: Ans.DataProcessing.operators.averaging.elemental_fraction_fc
---

# *class* elemental_fraction_fc(fields_container: object = None, mesh: object = None, scoping: object = None, denominator: object = None, collapse_shell_layers: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `scoping` (Scoping) (optional), `denominator` (FieldsContainer) (optional), `collapse_shell_layers` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elemental_fraction_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_fraction_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **denominator**
* **collapse_shell_layers**
* **config**

**Example:**

```python
op = elemental_fraction_fc()

op = elemental_fraction_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping,denominator=my_denominator,collapse_shell_layers=my_collapse_shell_layers)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

**Type:** *LinkableInput*

### scoping

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

**Type:** *LinkableInput*

### denominator

If a fields container is set in this pin, it is used as the denominator of the fraction instead of entity_average_fc.

**Type:** *LinkableInput*

### collapse_shell_layers

If true, the data across different shell layers is averaged as well (default is false).

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
