---
uid: Ans.DataProcessing.operators.logic.ascending_sort_fc
---

# ascending_sort_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.   ///available inputs: fields_container (FieldsContainer), component_priority_table (IList int, System.Collections.IEnumerable) (optional), sort_by_scoping (bool) (optional)
            available outputs: fields_container (FieldsContainer)

ascending_sort_fc()
ascending_sort_fc(fields_container: object, component_priority_table: object, sort_by_scoping: object, config: OperatorConfig)
ascending_sort_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
ascending_sort_fc()
```

#### Constructor

```python
ascending_sort_fc(fields_container, component_priority_table, sort_by_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `component_priority_table` (*object*)
- `sort_by_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ascending_sort_fc(config)
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
