---
uid: Ans.DataProcessing.operators.utility.extract_field
---

# extract_field Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0).   ///available inputs: fields_container (Field, FieldsContainer), indices (IList int, System.Collections.IEnumerable) (optional)
            available outputs: field (Field)

extract_field()
extract_field(fields_container: object, indices: object, config: OperatorConfig)
extract_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
extract_field()
```

#### Constructor

```python
extract_field(fields_container, indices, config)
```

**Parameters:**

- `fields_container` (*object*)
- `indices` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_field(config)
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
