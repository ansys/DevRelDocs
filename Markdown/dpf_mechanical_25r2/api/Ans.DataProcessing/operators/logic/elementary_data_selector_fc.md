---
uid: Ans.DataProcessing.operators.logic.elementary_data_selector_fc
---

# elementary_data_selector_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Creates a scalar fields container based on the selected elementary data for each field.   ///available inputs: fields_container (FieldsContainer, Field), elementary_data_index (Int32, IList int, System.Collections.IEnumerable), elementary_data_index_2 (Int32, IList int, System.Collections.IEnumerable) (optional)
            available outputs: fields_container (FieldsContainer)

elementary_data_selector_fc()
elementary_data_selector_fc(fields_container: object, elementary_data_index: object, elementary_data_index_2: object, config: OperatorConfig)
elementary_data_selector_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elementary_data_selector_fc()
```

#### Constructor

```python
elementary_data_selector_fc(fields_container, elementary_data_index, elementary_data_index_2, config)
```

**Parameters:**

- `fields_container` (*object*)
- `elementary_data_index` (*object*)
- `elementary_data_index_2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elementary_data_selector_fc(config)
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
