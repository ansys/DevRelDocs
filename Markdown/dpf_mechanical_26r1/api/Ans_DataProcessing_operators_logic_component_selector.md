---
uid: Ans.DataProcessing.operators.logic.component_selector
---

# component_selector Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Creates a scalar/vector field based on the selected component.   ///available inputs: field (Field, FieldsContainer), component_number (Int32, IList int, System.Collections.IEnumerable), default_value (double) (optional)
            available outputs: field (Field)

component_selector()
component_selector(field: object, component_number: object, default_value: object, config: OperatorConfig)
component_selector(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
component_selector()
```

#### Constructor

```python
component_selector(field, component_number, default_value, config)
```

**Parameters:**

- `field` (*object*)
- `component_number` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_selector(config)
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
