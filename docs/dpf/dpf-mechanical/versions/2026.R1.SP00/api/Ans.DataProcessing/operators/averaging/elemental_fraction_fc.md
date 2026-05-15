---
uid: Ans.DataProcessing.operators.averaging.elemental_fraction_fc
---

# elemental_fraction_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `scoping` (Scoping) (optional), `denominator` (FieldsContainer) (optional), `collapse_shell_layers` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = elemental_fraction_fc()

op = elemental_fraction_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping,denominator=my_denominator,collapse_shell_layers=my_collapse_shell_layers)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
elemental_fraction_fc()
```

#### Constructor

```python
elemental_fraction_fc(fields_container, mesh, scoping, denominator, collapse_shell_layers, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `denominator` (*object*)
- `collapse_shell_layers` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_fraction_fc(config)
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
