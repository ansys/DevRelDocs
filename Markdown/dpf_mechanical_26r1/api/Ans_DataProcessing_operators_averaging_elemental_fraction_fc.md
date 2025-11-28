---
uid: Ans.DataProcessing.operators.averaging.elemental_fraction_fc
title: elemental_fraction_fc
---

# elemental_fraction_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion) (optional), scoping (Scoping) (optional), denominator (FieldsContainer) (optional), collapse_shell_layers (bool) (optional)
            available outputs: fields_container (FieldsContainer)

elemental_fraction_fc()
elemental_fraction_fc(fields_container: object, mesh: object, scoping: object, denominator: object, collapse_shell_layers: object, config: OperatorConfig)
elemental_fraction_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
