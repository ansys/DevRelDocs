---
uid: Ans.DataProcessing.operators.result.cyclic_analytic_seqv_max
title: cyclic_analytic_seqv_max
---

# cyclic_analytic_seqv_max Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Compute the maximum of the Von Mises equivalent stress that can be expected on 360 degrees   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), fields_container (FieldsContainer), bool_rotate_to_global (bool) (optional), cyclic_support (CyclicSupport)
            available outputs: fields_container (FieldsContainer)

cyclic_analytic_seqv_max()
cyclic_analytic_seqv_max(time_scoping: object, mesh_scoping: object, fields_container: object, bool_rotate_to_global: object, cyclic_support: object, config: OperatorConfig)
cyclic_analytic_seqv_max(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cyclic_analytic_seqv_max()
```

#### Constructor

```python
cyclic_analytic_seqv_max(time_scoping, mesh_scoping, fields_container, bool_rotate_to_global, cyclic_support, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `fields_container` (*object*)
- `bool_rotate_to_global` (*object*)
- `cyclic_support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cyclic_analytic_seqv_max(config)
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
