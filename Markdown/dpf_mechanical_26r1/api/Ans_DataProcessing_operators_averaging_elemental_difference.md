---
uid: Ans.DataProcessing.operators.averaging.elemental_difference
title: elemental_difference
---

# elemental_difference Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional), mesh (MeshedRegion) (optional), through_layers (bool) (optional)
            available outputs: field (Field)

elemental_difference()
elemental_difference(field: object, mesh_scoping: object, mesh: object, through_layers: object, config: OperatorConfig)
elemental_difference(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_difference()
```

#### Constructor

```python
elemental_difference(field, mesh_scoping, mesh, through_layers, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `through_layers` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_difference(config)
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
