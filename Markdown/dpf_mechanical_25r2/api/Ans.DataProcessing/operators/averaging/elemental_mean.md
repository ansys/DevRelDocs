---
uid: Ans.DataProcessing.operators.averaging.elemental_mean
---

# elemental_mean Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Computes the average of a multi-entity field, (ElementalNodal -> Elemental), (NodalElemental -> Nodal).

available inputs: `field` (Field), `collapse_shell_layers` (bool) (optional), `force_averaging` (bool) (optional), `scoping` (Scoping) (optional)

available outputs: `field` (Field)

## Example

```python
op = elemental_mean()

op = elemental_mean(field=my_field,collapse_shell_layers=my_collapse_shell_layers,force_averaging=my_force_averaging,scoping=my_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
elemental_mean()
```

#### Constructor

```python
elemental_mean(field, collapse_shell_layers, force_averaging, scoping, config)
```

**Parameters:**

- `field` (*object*)
- `collapse_shell_layers` (*object*)
- `force_averaging` (*object*)
- `scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_mean(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
