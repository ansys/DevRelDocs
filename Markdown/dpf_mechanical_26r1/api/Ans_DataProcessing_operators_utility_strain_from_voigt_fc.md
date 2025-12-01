---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt_fc
---

# strain_from_voigt_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Converts strain field data from Voigt notation (6-component vector) to standard symmetric matrix format (3x3 tensor).   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

strain_from_voigt_fc()
strain_from_voigt_fc(fields_container: object, config: OperatorConfig)
strain_from_voigt_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
strain_from_voigt_fc()
```

#### Constructor

```python
strain_from_voigt_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
strain_from_voigt_fc(config)
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
