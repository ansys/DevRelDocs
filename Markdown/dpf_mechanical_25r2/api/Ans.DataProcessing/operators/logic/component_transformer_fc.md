---
uid: Ans.DataProcessing.operators.logic.component_transformer_fc
---

# component_transformer_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Takes the input field and creates a field with overriden value on given components.   ///available inputs: fields_container (FieldsContainer), component_number (Int32, IList int, System.Collections.IEnumerable), default_value (double) (optional)
            available outputs: fields_container (FieldsContainer)

component_transformer_fc()
component_transformer_fc(fields_container: object, component_number: object, default_value: object, config: OperatorConfig)
component_transformer_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
component_transformer_fc()
```

#### Constructor

```python
component_transformer_fc(fields_container, component_number, default_value, config)
```

**Parameters:**

- `fields_container` (*object*)
- `component_number` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_transformer_fc(config)
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
