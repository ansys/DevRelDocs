---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt
---

# strain_from_voigt Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Converts the strain field from Voigt notation into standard format.   ///available inputs: field (Field, FieldsContainer)
            available outputs: field (Field)

strain_from_voigt()
strain_from_voigt(field: object, config: OperatorConfig)
strain_from_voigt(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
strain_from_voigt()
```

#### Constructor

```python
strain_from_voigt(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
strain_from_voigt(config)
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
