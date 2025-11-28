---
uid: Ans.DataProcessing.operators.logic.solid_shell_fields
---

# solid_shell_fields Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Merges shell and solid fields for each time step/frequency in the fields container.   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

solid_shell_fields()
solid_shell_fields(fields_container: object, config: OperatorConfig)
solid_shell_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
solid_shell_fields()
```

#### Constructor

```python
solid_shell_fields(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
solid_shell_fields(config)
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
