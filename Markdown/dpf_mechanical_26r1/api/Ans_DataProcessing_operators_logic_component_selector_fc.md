---
uid: Ans.DataProcessing.operators.logic.component_selector_fc
title: component_selector_fc
---

# component_selector_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Creates a scalar fields container based on the selected component for each field.   ///available inputs: fields_container (FieldsContainer, Field), component_number (Int32, IList int, System.Collections.IEnumerable)
            available outputs: fields_container (FieldsContainer)

component_selector_fc()
component_selector_fc(fields_container: object, component_number: object, config: OperatorConfig)
component_selector_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
component_selector_fc()
```

#### Constructor

```python
component_selector_fc(fields_container, component_number, config)
```

**Parameters:**

- `fields_container` (*object*)
- `component_number` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_selector_fc(config)
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
