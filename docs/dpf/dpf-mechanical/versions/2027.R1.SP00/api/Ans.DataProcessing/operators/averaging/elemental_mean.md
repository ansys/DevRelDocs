---
uid: Ans.DataProcessing.operators.averaging.elemental_mean
---

# *class* elemental_mean(field: object = None, collapse_shell_layers: object = None, force_averaging: object = None, scoping: object = None, config: OperatorConfig = None)

Computes the average of a multi-entity field, (ElementalNodal -> Elemental), (NodalElemental -> Nodal).

available inputs: `field` (Field), `collapse_shell_layers` (bool) (optional), `force_averaging` (bool) (optional), `scoping` (Scoping) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_mean operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_mean.md)

**Parameters:**

* **field**
* **collapse_shell_layers**
* **force_averaging**
* **scoping**
* **config**

**Example:**

```python
op = elemental_mean()

op = elemental_mean(field=my_field,collapse_shell_layers=my_collapse_shell_layers,force_averaging=my_force_averaging,scoping=my_scoping)
```

## Inputs

### field

**Type:** *LinkableInput*

### collapse_shell_layers

If true, shell layers are averaged as well (default is false).

**Type:** *LinkableInput*

### force_averaging

If true you average, if false you just sum.

**Type:** *LinkableInput*

### scoping

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

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
